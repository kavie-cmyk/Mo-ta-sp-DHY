import { SectionShell } from './primitives/SectionShell'
import { SectionHeading } from './primitives/SectionHeading'
import { comparison } from '../content/copy'
import './Comparison.css'

export function Comparison() {
  return (
    <SectionShell id="s08" tone="muted" labelledBy="s08-title">
      <SectionHeading
        headingId="s08-title"
        eyebrow="Khác ở cách tổ chức trải nghiệm học"
        headline="Không thay thế các công cụ quen thuộc — bổ sung phần lập luận trong ca bệnh"
        subheadline="Nhiều công cụ đã làm rất tốt từng phần riêng lẻ. Clinical Reasoning Studio kết nối các phần đó quanh quá trình sinh viên tìm dữ kiện, lập luận, nhận phản hồi và luyện lại."
      >
        <div className="comparison__body">
          <p>
            Điểm khác biệt không nằm ở việc SAVA “có AI” hoặc “có 3D”. Giá trị được đề xuất nằm ở
            việc những thành phần này cùng phục vụ một ca bệnh tương tác có mục tiêu học, dữ kiện,
            lập luận và phản hồi rõ ràng.
          </p>
        </div>
      </SectionHeading>

      {/* Desktop / tablet: semantic table */}
      <div className="comparison__table-wrap">
        <table className="comparison__table">
          <caption className="sr-only">
            So sánh các công cụ quen thuộc với phần mà SAVA Clinical Reasoning Studio bổ sung.
          </caption>
          <thead>
            <tr>
              <th scope="col">Công cụ quen thuộc</th>
              <th scope="col">Thường tập trung vào</th>
              <th scope="col">Studio bổ sung gì</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row, i) => (
              <tr key={i}>
                <th scope="row" className="comparison__tool">
                  {row.tool}
                </th>
                <td className="comparison__focus">{row.focus}</td>
                <td className="comparison__add">{row.add}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: labeled cards */}
      <div className="comparison__cards">
        {comparison.map((row, i) => (
          <article key={i} className="comparison__card">
            <h3 className="comparison__card-tool">{row.tool}</h3>
            <p className="comparison__card-block">
              <span className="comparison__card-label">Thường tập trung vào</span>
              <span>{row.focus}</span>
            </p>
            <p className="comparison__card-block">
              <span className="comparison__card-label comparison__card-label--add">
                Studio bổ sung gì
              </span>
              <span>{row.add}</span>
            </p>
          </article>
        ))}
      </div>

      <p className="comparison__caption">
        Bảng so sánh mô tả trọng tâm sử dụng phổ biến của từng loại công cụ, không nhằm đánh giá
        một sản phẩm hoặc nhà cung cấp cụ thể.
      </p>
    </SectionShell>
  )
}
