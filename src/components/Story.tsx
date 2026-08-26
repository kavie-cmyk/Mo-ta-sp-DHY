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
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
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
 * Story — Acute Dyspnea example (click-driven), sub-block of S04.
 * Desktop: click a step (or use prev/next) → its mock shows in the sticky panel.
 * Mobile: click a step → its mock shows inline below the list.
 */
export function Story() {
  const [active, setActive] = useState(0)
  const total = dyspneaSteps.length

  const select = (i: number) => {
    setActive(Math.max(0, Math.min(total - 1, i)))
  }

  return (
    <div className="story__block">
      <div className="story__heading">
        <h3 className="story__subhead">Nhìn sản phẩm vận hành qua một tình huống</h3>
        <p className="story__intro">
          Hãy hình dung một sinh viên mở ca về một người bệnh đến khám vì khó thở. Mọi dữ kiện tiếp
          theo được khám phá theo hành động của chính người học — bấm vào từng bước để xem.
        </p>
      </div>

      <div className="story__note">
        <DisclaimerNote>
          Ca khó thở chỉ dùng để minh họa cách sản phẩm vận hành; không phải nội dung đã được Đại
          học Y Hà Nội xác nhận.
        </DisclaimerNote>
      </div>

      <div className="story">
        {/* Narrative steps (left) — each is a clickable button */}
        <div className="story__steps-wrap">
          <ol className="story__steps">
            {dyspneaSteps.map((step, i) => {
              const isActive = i === active
              return (
                <li key={step.step} className="story__step">
                  <button
                    type="button"
                    className={`story__step-btn ${isActive ? 'story__step-btn--active' : ''}`}
                    aria-expanded={isActive}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={() => select(i)}
                  >
                    <span className="story__step-marker" aria-hidden="true">
                      {step.step}
                    </span>
                    <span className="story__step-copy">
                      <span className="story__step-title">{step.label}</span>
                      <span className="story__step-text">{step.narrative}</span>
                    </span>
                  </button>

                  {/* Mobile: inline mock for the active step (non-sticky) */}
                  <div className="story__mobile-mock" aria-hidden={!isActive}>
                    {isActive ? (
                      <ProductMockFrame label={step.mock.title} badge="Ví dụ minh họa" active>
                        <div className="story__mock-body">{renderMock(step)}</div>
                      </ProductMockFrame>
                    ) : null}
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Sticky product mock panel (desktop) */}
        <div className="story__panel" aria-live="polite">
          <div className="story__panel-inner">
            <div className="story__panel-head">
              <span className="story__panel-step">
                Bước {dyspneaSteps[active].step} / {String(total).padStart(2, '0')}
              </span>
              <span className="story__panel-label">{dyspneaSteps[active].label}</span>
            </div>
            <ProductMockFrame
              label={dyspneaSteps[active].mock.title}
              badge="Ví dụ minh họa"
              dark
            >
              <div className="story__mock-body">{renderMock(dyspneaSteps[active])}</div>
            </ProductMockFrame>
            <div className="story__panel-nav">
              <button
                type="button"
                className="story__nav-btn"
                onClick={() => select(active - 1)}
                disabled={active === 0}
              >
                <ChevronLeft aria-hidden="true" size={18} />
                Trước
              </button>
              <button
                type="button"
                className="story__nav-btn story__nav-btn--primary"
                onClick={() => select(active + 1)}
                disabled={active === total - 1}
              >
                Tiếp
                <ChevronRight aria-hidden="true" size={18} />
              </button>
            </div>
            <p className="story__panel-caption">
              Các màn hình trong câu chuyện là mockup minh họa trải nghiệm, không phải ảnh chụp một
              sản phẩm đã hoàn thiện.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
