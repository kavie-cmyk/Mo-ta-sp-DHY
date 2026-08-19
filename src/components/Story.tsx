import { SectionShell } from './primitives/SectionShell'
import { SectionHeading } from './primitives/SectionHeading'
import { ProductMockFrame } from './primitives/ProductMockFrame'
import { DisclaimerNote } from './primitives/DisclaimerNote'
import { dyspneaSteps, type StoryStep } from '../content/dyspnea'
import {
  CaseIntroMock,
  PatientConversationMock,
  InvestigationMock,
  EvidenceBoardMock,
  DifferentialMock,
  ImagingMock,
  ReasoningMock,
  FeedbackMock,
} from './mocks/MockFragments'
import { useCallback, useEffect, useRef, useState } from 'react'
import './Story.css'

function renderMock(step: StoryStep) {
  switch (step.mock.kind) {
    case 'case':
      return <CaseIntroMock />
    case 'conversation':
      return <PatientConversationMock />
    case 'evidence':
      return <InvestigationMock />
    case 'board':
      return <EvidenceBoardMock />
    case 'hypotheses':
      return <DifferentialMock />
    case 'imaging':
      return <ImagingMock />
    case 'reasoning':
      return <ReasoningMock />
    case 'feedback':
      return <FeedbackMock />
    default:
      return null
  }
}

/**
 * V04 — Acute Dyspnea Story Stepper.
 * Desktop: 2-col, right sticky product mock panel, active step highlighted.
 * Mobile: non-sticky stacked cards, each with its own mock fragment.
 */
export function Story() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.index)
            if (!Number.isNaN(idx)) setActive(idx)
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const setRef = useCallback((el: HTMLLIElement | null, i: number) => {
    stepRefs.current[i] = el
  }, [])

  return (
    <SectionShell id="s04" labelledBy="s04-title">
      <SectionHeading
        headingId="s04-title"
        eyebrow="Nhìn sản phẩm vận hành qua một tình huống"
        headline="Từ câu hỏi đầu tiên đến lần luyện lại"
        subheadline="Một câu chuyện ngắn cho thấy ca bệnh, AI, dữ kiện, 3D và phản hồi phối hợp với nhau như thế nào trong trải nghiệm của sinh viên."
      >
        <div className="story__intro">
          <p>
            Hãy hình dung một sinh viên mở ca về một người bệnh đến khám vì khó thở. Em chỉ thấy
            thông tin ban đầu và mục tiêu học tập. Mọi dữ kiện tiếp theo phải được khám phá theo
            hành động của chính người học.
          </p>
        </div>
      </SectionHeading>

      <div className="story__note">
        <DisclaimerNote>
          Ca khó thở chỉ dùng để minh họa cách sản phẩm vận hành; không phải nội dung đã được Đại
          học Y Hà Nội xác nhận.
        </DisclaimerNote>
      </div>

      <div className="story">
        {/* Narrative steps (left) */}
        <ol className="story__steps">
          {dyspneaSteps.map((step, i) => {
            const isActive = i === active
            return (
              <li
                key={step.step}
                ref={(el) => setRef(el, i)}
                data-index={i}
                className={`story__step ${isActive ? 'story__step--active' : ''}`}
              >
                <div className="story__step-marker" aria-hidden="true">
                  {step.step}
                </div>
                <div className="story__step-copy">
                  <h3 className="story__step-title">{step.label}</h3>
                  <p className="story__step-text">{step.narrative}</p>
                  <p className="story__step-mocklabel">{step.mock.title}</p>
                </div>

                {/* Mobile: inline mock fragment (non-sticky) */}
                <div className="story__mobile-mock" aria-hidden={!isActive}>
                  <ProductMockFrame label={step.mock.title} active={isActive}>
                    <div className="story__mock-body">{renderMock(step)}</div>
                  </ProductMockFrame>
                </div>
              </li>
            )
          })}
        </ol>

        {/* Sticky product mock panel (desktop only) */}
        <div className="story__panel" aria-live="polite">
          <div className="story__panel-inner">
            <ProductMockFrame
              label={dyspneaSteps[active].mock.title}
              badge="Ví dụ minh họa"
              dark
            >
              <div className="story__mock-body">{renderMock(dyspneaSteps[active])}</div>
            </ProductMockFrame>
            <p className="story__panel-caption">
              Các màn hình trong câu chuyện là mockup minh họa trải nghiệm, không phải ảnh chụp
              một sản phẩm đã hoàn thiện.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
