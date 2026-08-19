import { SectionShell } from './primitives/SectionShell'
import { SectionHeading } from './primitives/SectionHeading'
import { studentFlow } from '../content/copy'
import { ProcessStepper } from './primitives/ProcessStepper'
import { RotateCcw } from 'lucide-react'
import './StudentJourney.css'

const EMPH = [3, 4, 6, 8] // Chẩn đoán phân biệt, Giải thích, Phản hồi, Làm lại

export function StudentJourney() {
  return (
    <SectionShell id="s03" tone="muted" labelledBy="s03-title">
      <SectionHeading
        headingId="s03-title"
        eyebrow="Một ca bệnh, nhiều quyết định nhỏ"
        headline="Sinh viên học bằng cách tự khám phá và tự lập luận"
        subheadline="Ca bệnh mở dần theo hành động của người học, để mỗi bước thu thập dữ kiện và điều chỉnh giả thuyết đều có ý nghĩa."
      >
        <div className="journey__body">
          <p>
            Sau khi vào ca, sinh viên chỉ nhận thông tin mở đầu và mục tiêu học. Chẩn đoán không
            được tiết lộ. Người học hỏi bệnh nhân AI, lựa chọn nội dung thăm khám hoặc xét nghiệm
            cần xem, rồi sắp xếp dữ kiện đã tìm thấy.
          </p>
          <p>
            Khi đã có đủ thông tin, sinh viên xây dựng chẩn đoán phân biệt, giải thích vì sao một
            dữ kiện ủng hộ hoặc phản đối từng khả năng và đưa ra quyết định theo yêu cầu của bài.
            Phản hồi chỉ xuất hiện sau khi sinh viên đã thể hiện nỗ lực của mình.
          </p>
        </div>
      </SectionHeading>

      <div className="journey__loop">
        <div className="journey__loop-head" aria-hidden="true">
          <RotateCcw size={14} />
          <span>Vòng học sinh viên</span>
        </div>
        {/* Desktop: horizontal/zigzag process; Mobile: vertical stepper (CSS handles) */}
        <div className="journey__stepper">
          <ProcessStepper steps={studentFlow} emphasized={EMPH} />
        </div>
        <p className="journey__loopback" aria-hidden="true">
          Làm lại → quay về lập luận & quyết định
        </p>
      </div>

      <p className="journey__caption">
        Một vòng học hoàn chỉnh không dừng ở lời giải; sinh viên được đưa trở lại hoạt động thực
        hành sau khi nhận phản hồi.
      </p>
    </SectionShell>
  )
}
