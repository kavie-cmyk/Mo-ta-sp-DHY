import { SectionShell } from './primitives/SectionShell'
import { nextStepFlow } from '../content/copy'
import { ArrowRight, ArrowDown } from 'lucide-react'
import './NextStep.css'

/**
 * P1 — Next-step CTA. Visualizes the 6-step path to a first case,
 * with a light (non-sales) call-to-action.
 */
export function NextStep() {
  return (
    <SectionShell id="s08" tone="dark" labelledBy="s08-title">
      <div className="next">
        <p className="next__eyebrow">Bước tiếp theo</p>
        <h2 id="s08-title" className="next__title">
          Từ mô tả sản phẩm đến một ca học cụ thể
        </h2>
        <p className="next__sub">
          Chúng tôi sẵn sàng cùng Nhà trường chọn một môn học, xác định mục tiêu sinh viên cần
          luyện và đồng xây dựng một ca mẫu để dùng thử.
        </p>

        <ol className="next__flow">
          {nextStepFlow.map((step, i) => (
            <li key={i} className="next__step">
              <span className="next__num" aria-hidden="true">
                {i + 1}
              </span>
              <span className="next__label">{step.title}</span>
              {i < nextStepFlow.length - 1 ? (
                <>
                  <ArrowRight className="next__arrow-h" aria-hidden="true" size={15} />
                  <ArrowDown className="next__arrow-v" aria-hidden="true" size={15} />
                </>
              ) : null}
            </li>
          ))}
        </ol>

        <div className="next__cta">
          <a href="#s01" className="next__cta-btn">
            Trao đổi về ca học đầu tiên
          </a>
          <p className="next__cta-note">
            Vui lòng liên hệ qua đầu mối SAVA để sắp xếp buổi trao đổi với Nhà trường.
          </p>
        </div>
      </div>
    </SectionShell>
  )
}
