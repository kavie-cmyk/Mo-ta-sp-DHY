import { SectionShell } from './primitives/SectionShell'
import { SectionHeading } from './primitives/SectionHeading'
import { learningLoopSteps, remediationExamples } from '../content/copy'
import { AccessibleAccordion } from './primitives/AccessibleAccordion'
import { accordions } from '../content/copy'
import { ArrowRight, ArrowDown, RotateCcw } from 'lucide-react'
import './FeedbackLoop.css'

export function FeedbackLoop() {
  return (
    <SectionShell id="s10" tone="dark" labelledBy="s10-title">
      <SectionHeading
        headingId="s10-title"
        eyebrow="Phản hồi phải dẫn đến một hành động học tiếp theo"
        headline="Chỉ ra phần còn yếu rồi cho sinh viên thử lại"
        subheadline="Hệ thống không dừng ở “đúng” hay “sai”; phản hồi được nối với một nội dung củng cố phù hợp và một cơ hội luyện lại."
      >
        <div className="loop__body">
          <p>
            Sau khi sinh viên đã thực hiện một bước lập luận, hệ thống ghi nhận hành động có thể
            quan sát được và đối chiếu với bộ tiêu chí đã được phê duyệt. Phản hồi có thể chỉ ra dữ
            kiện bị bỏ sót, cách diễn giải chưa phù hợp, chẩn đoán phân biệt quá hẹp hoặc một cơ
            chế chưa được hiểu rõ.
          </p>
          <p>
            Phần còn yếu sau đó được nối với bài tập, hình ảnh, giải thích, mô hình 3D hoặc một ca
            ngắn phù hợp. Sinh viên luyện lại để biến phản hồi thành thực hành mới.
          </p>
        </div>
      </SectionHeading>

      <div className="loop__diagram">
        <ol className="loop__steps">
          {learningLoopSteps.map((s, i) => (
            <li key={i} className="loop__step">
              <span className="loop__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="loop__label">{s.title}</span>
              {i < learningLoopSteps.length - 1 ? (
                <ArrowRight className="loop__arrow-h" aria-hidden="true" size={16} />
              ) : null}
              {i < learningLoopSteps.length - 1 ? (
                <ArrowDown className="loop__arrow-v" aria-hidden="true" size={16} />
              ) : null}
            </li>
          ))}
        </ol>
        <div className="loop__core">
          <RotateCcw size={16} aria-hidden="true" />
          <span>Phản hồi chỉ có giá trị khi dẫn đến lần thử tiếp theo.</span>
        </div>
      </div>

      <p className="loop__caption">
        Vòng học này chỉ phản ánh quá trình thực hành trong sản phẩm; nó không tự động chứng nhận
        năng lực hành nghề hoặc mức sẵn sàng với bệnh nhân thật.
      </p>

      <div className="loop__accordion">
        <AccessibleAccordion
          items={[
            {
              title: accordions[1].title,
              content: accordions[1].body.map((p, i) => <p key={i}>{p}</p>),
            },
            {
              title: 'Xem các dạng học bổ trợ theo phần còn yếu',
              content: (
                <ul className="loop__remediation">
                  {remediationExamples.map((r, i) => (
                    <li key={i}>
                      <strong>{r.issue}</strong> — {r.action}
                    </li>
                  ))}
                </ul>
              ),
            },
          ]}
        />
      </div>
    </SectionShell>
  )
}
