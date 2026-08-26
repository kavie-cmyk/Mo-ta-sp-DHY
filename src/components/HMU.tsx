import { SectionShell } from './primitives/SectionShell'
import { SectionHeading } from './primitives/SectionHeading'
import { lmsScenarioA, standaloneFeatures, hmuValidate } from '../content/copy'
import { AccessibleAccordion } from './primitives/AccessibleAccordion'
import { accordions } from '../content/copy'
import { ArrowDown, ArrowRight, Building2, RefreshCw, Server } from 'lucide-react'
import './HMU.css'

/**
 * P0-4 — HMU deployment scenarios (2 scenarios: existing LMS / standalone),
 * written as implementation options rather than "research about HMU".
 */
export function HMU() {
  return (
    <SectionShell id="s07" tone="muted" labelledBy="s07-title">
      <SectionHeading
        headingId="s07-title"
        eyebrow="Triển khai cùng Nhà trường"
        headline="Hai cách đặt sản phẩm vào hạ tầng đào tạo"
        subheadline="Studio được thiết kế để vận hành theo hạ tầng hiện có của từng trường — không yêu cầu thay đổi hệ thống sẵn có."
      />

      <div className="hmu__scenarios">
        {/* Scenario A */}
        <div className="hmu__scenario">
          <div className="hmu__scenario-head">
            <Building2 size={18} aria-hidden="true" />
            <span>Kịch bản A — Nhà trường đã có LMS</span>
          </div>
          <ol className="hmu__flow">
            {lmsScenarioA.map((block, i) => (
              <li key={i} className="hmu__flow-item">
                <span className="hmu__flow-node">{block.title}</span>
                {i < lmsScenarioA.length - 1 ? (
                  <>
                    <ArrowRight className="hmu__flow-arrow-h" aria-hidden="true" size={15} />
                    <ArrowDown className="hmu__flow-arrow-v" aria-hidden="true" size={15} />
                  </>
                ) : null}
              </li>
            ))}
          </ol>
          <div className="hmu__return">
            <RefreshCw size={14} aria-hidden="true" />
            <span>Trả kết quả / trạng thái hoàn thành về LMS khi tích hợp cho phép</span>
          </div>
        </div>

        {/* Scenario B */}
        <div className="hmu__scenario">
          <div className="hmu__scenario-head">
            <Server size={18} aria-hidden="true" />
            <span>Kịch bản B — Chưa dùng LMS cho hoạt động này</span>
          </div>
          <p className="hmu__scenario-desc">
            Studio có thể vận hành độc lập cho hoạt động luyện tư duy lâm sàng:
          </p>
          <ul className="hmu__standalone">
            {standaloneFeatures.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <p className="hmu__scenario-note">
            Không thay thế LMS toàn trường — chỉ cung cấp môi trường học chuyên biệt cho hoạt động
            này.
          </p>
        </div>
      </div>

      {/* Alignment block */}
      <div className="hmu__align">
        <h3 className="hmu__align-title">Những nội dung cần thống nhất cùng Nhà trường</h3>
        <p className="hmu__align-desc">
          Đây là các nội dung hai bên cần thống nhất khi thiết kế phương án triển khai:
        </p>
        <ul className="hmu__align-list">
          {hmuValidate.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="hmu__accordion">
        <AccessibleAccordion
          items={[
            {
              title: accordions[3].title,
              content: accordions[3].body.map((p, i) => <p key={i}>{p}</p>),
            },
          ]}
        />
      </div>
    </SectionShell>
  )
}
