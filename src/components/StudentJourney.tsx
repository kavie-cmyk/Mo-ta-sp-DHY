import { SectionShell } from './primitives/SectionShell'
import { SectionHeading } from './primitives/SectionHeading'
import { studentFlow } from '../content/copy'
import { ProcessStepper } from './primitives/ProcessStepper'
import { RotateCcw } from 'lucide-react'
import { Story } from './Story'
import './StudentJourney.css'

const EMPH = [3, 4, 6, 8] // Chẩn đoán phân biệt, Giải thích, Phản hồi, Làm lại

/**
 * S04 — Student experience: learning loop + interactive story.
 */
export function StudentJourney() {
  return (
    <SectionShell id="s04" labelledBy="s04-title">
      <SectionHeading
        headingId="s04-title"
        eyebrow="Một ca bệnh, nhiều quyết định nhỏ"
        headline="Sinh viên học bằng cách tự khám phá và tự lập luận"
        subheadline="Ca bệnh mở dần theo hành động của người học — mỗi bước thu thập dữ kiện và điều chỉnh giả thuyết đều có ý nghĩa."
      >
        <div className="journey__body">
          <p>
            Sinh viên vào ca chỉ nhận thông tin mở đầu và mục tiêu học; chẩn đoán không được tiết
            lộ. Người học chủ động hỏi bệnh, chọn nội dung thăm khám và xét nghiệm, rồi xây dựng
            chẩn đoán phân biệt và giải thích lập luận trước khi nhận phản hồi.
          </p>
        </div>
      </SectionHeading>

      <div className="journey__loop">
        <div className="journey__loop-head" aria-hidden="true">
          <RotateCcw size={14} />
          <span>Vòng học sinh viên</span>
        </div>
        <div className="journey__stepper">
          <ProcessStepper steps={studentFlow} emphasized={EMPH} />
        </div>
        <p className="journey__loopback" aria-hidden="true">
          Làm lại → quay về lập luận & quyết định
        </p>
      </div>

      {/* Interactive acute dyspnea story (click-driven) */}
      <Story />
    </SectionShell>
  )
}
