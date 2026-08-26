import { SectionShell } from './primitives/SectionShell'
import { SectionHeading } from './primitives/SectionHeading'
import { CalloutNote } from './primitives/CalloutNote'
import { aiRoles } from '../content/copy'
import { MessageCircle, Lightbulb, PenSquare, ShieldCheck } from 'lucide-react'
import { Modality } from './Modality'
import { Comparison } from './Comparison'
import './AIRoles.css'

const icons = [MessageCircle, Lightbulb, PenSquare]

export function AIRoles() {
  return (
    <SectionShell id="s06" tone="default" labelledBy="s06-title">
      <SectionHeading
        headingId="s06-title"
        eyebrow="AI, hình ảnh y khoa và 3D"
        headline="AI hỗ trợ quá trình học, không làm bài thay sinh viên"
        subheadline="AI xuất hiện với vai trò rõ ràng: bệnh nhân mô phỏng, trợ giảng sau nỗ lực của người học và công cụ hỗ trợ giảng viên."
      >
        <div className="airoles__body">
          <p>
            Sinh viên nghĩ trước — hỏi, chọn dữ kiện, nêu giả thuyết và giải thích. Sau đó AI mới
            tăng mức hỗ trợ khi phù hợp.
          </p>
        </div>
      </SectionHeading>

      <div className="airoles__diagram">
        <p className="airoles__hub" aria-hidden="true">
          AI trong Studio
        </p>
        <div className="airoles__grid">
          {aiRoles.map((role, i) => {
            const Icon = icons[i]
            return (
              <article key={i} className="airoles__card">
                <div className="airoles__card-head">
                  <span className="airoles__card-icon" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <h3 className="airoles__card-title">{role.title}</h3>
                </div>
                <p className="airoles__card-body">{role.body}</p>
                <p className="airoles__card-boundary">
                  <ShieldCheck size={13} aria-hidden="true" />
                  <span>
                    <span className="airoles__card-boundary-label">Giới hạn: </span>
                    {role.boundary}
                  </span>
                </p>
              </article>
            )
          })}
        </div>
      </div>

      <div className="airoles__callout">
        <CalloutNote variant="info">
          AI hỗ trợ quá trình học; không thay sinh viên đưa ra lập luận và không tự phê duyệt nội
          dung y khoa.
        </CalloutNote>
      </div>

      {/* 3D / imaging / VR-XR + comparison (sub-blocks of the AI & 3D block) */}
      <Modality />
      <Comparison />
    </SectionShell>
  )
}
