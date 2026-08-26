import { comparison } from '../content/copy'
import './Comparison.css'

/**
 * Sub-block within S06 AI & 3D — comparison with familiar tools.
 */
export function Comparison() {
  return (
    <div className="comparison__wrap">
      <h3 className="comparison__subhead">Khác gì các công cụ quen thuộc?</h3>
      <p className="comparison__intro">
        Chatbot, atlas 3D, LMS, bệnh nhân ảo và ngân hàng câu hỏi làm tốt từng phần riêng lẻ.
        Studio kết nối các phần đó quanh một ca bệnh có mục tiêu, dữ kiện, lập luận và phản hồi rõ
        ràng.
      </p>

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
    </div>
  )
}
