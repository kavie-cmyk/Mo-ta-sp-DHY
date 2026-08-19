import { SectionShell } from './primitives/SectionShell'
import { SectionHeading } from './primitives/SectionHeading'
import { caseAnatomyGroups } from '../content/copy'
import { AccessibleAccordion } from './primitives/AccessibleAccordion'
import { accordions } from '../content/copy'
import './Anatomy.css'

export function Anatomy() {
  return (
    <SectionShell id="s09" labelledBy="s09-title">
      <SectionHeading
        headingId="s09-title"
        eyebrow="Đơn vị trung tâm của sản phẩm"
        headline="Mỗi ca bệnh là một bài thực hành có cấu trúc"
        subheadline="Một ca không chỉ là bệnh sử kèm câu hỏi; nó nối mục tiêu học, dữ kiện, điểm cần lập luận, phản hồi và nội dung củng cố thành cùng một trải nghiệm."
      >
        <div className="anatomy__body">
          <p>
            Có thể hình dung ca bệnh tương tác như một “khung bài thực hành” được giảng viên cấu
            hình trước. Sinh viên chỉ nhìn thấy những thông tin phù hợp với diễn tiến của ca và
            hành động mình đã thực hiện.
          </p>
          <p>
            Nhờ cấu trúc này, hệ thống có thể biết sinh viên đã tìm dữ kiện nào, đã thay đổi giả
            thuyết ra sao và nên phản hồi ở điểm nào mà không cần biến trải nghiệm thành một chuỗi
            câu hỏi trắc nghiệm.
          </p>
        </div>
      </SectionHeading>

      <div className="anatomy__diagram">
        <div className="anatomy__center" aria-hidden="true">
          CA BỆNH TƯƠNG TÁC
        </div>
        <div className="anatomy__grid">
          {caseAnatomyGroups.map((g, i) => (
            <div key={i} className="anatomy__group">
              <h3 className="anatomy__group-title">{g.title}</h3>
              <ul className="anatomy__chips">
                {g.chips.map((c, j) => (
                  <li key={j}>{c}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="anatomy__caption">
        Các thành phần xoay quanh cùng một ca bệnh để người học không phải chuyển giữa nhiều công
        cụ rời rạc.
      </p>

      <div className="anatomy__accordion">
        <AccessibleAccordion items={accordions.map((a) => ({ title: a.title, content: a.body.map((p, i) => <p key={i}>{p}</p>) }))} />
      </div>
    </SectionShell>
  )
}
