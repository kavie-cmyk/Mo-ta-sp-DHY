import { SectionShell } from './primitives/SectionShell'
import { SectionHeading } from './primitives/SectionHeading'
import { governanceSteps, lecturerInsights } from '../content/copy'
import { ProcessStepper } from './primitives/ProcessStepper'
import { CalloutNote } from './primitives/CalloutNote'
import { InsightMock } from './mocks/MockFragments'
import { ShieldCheck, BarChart3 } from 'lucide-react'
import './Governance.css'

export function Governance() {
  return (
    <SectionShell id="s11" labelledBy="s11-title">
      <SectionHeading
        headingId="s11-title"
        eyebrow="Hai lớp giúp sản phẩm đáng tin trong môi trường học thuật"
        headline="Nội dung có người chịu trách nhiệm, số liệu có mục đích sư phạm"
        subheadline="Ca bệnh đi qua kiểm duyệt trước khi sử dụng; sau đó giảng viên có thể xem những điểm mà cả lớp thường gặp khó trong quá trình giải ca."
      >
        <div className="governance__body">
          <p>
            Trong giáo dục y khoa, một dữ kiện sai, một hình gắn nhãn sai hoặc một lời giải thiếu
            điều kiện có thể tạo hiểu nhầm. Vì vậy việc biên soạn, kiểm duyệt chuyên môn và phê
            duyệt học thuật là một phần của trải nghiệm sản phẩm.
          </p>
          <p>
            Sau khi ca được dùng trong lớp, hệ thống có thể tổng hợp các tín hiệu từ hoạt động học
            để giảng viên nhìn ra phần nào cần giải thích lại hoặc ca nào cần chỉnh sửa.
          </p>
        </div>
      </SectionHeading>

      <div className="governance__split">
        <div className="governance__panel">
          <div className="governance__panel-head">
            <ShieldCheck size={16} aria-hidden="true" />
            <span>Kiểm soát nội dung</span>
          </div>
          <ProcessStepper steps={governanceSteps} numbered={false} />
          <div className="governance__callout">
            <CalloutNote variant="info">
              AI có thể soạn bản nháp. Con người kiểm soát nội dung được xuất bản.
            </CalloutNote>
          </div>
        </div>

        <div className="governance__panel">
          <div className="governance__panel-head">
            <BarChart3 size={16} aria-hidden="true" />
            <span>Góc nhìn giảng viên</span>
          </div>
          <p className="governance__insight-hint">Dữ liệu minh họa — không phải chỉ số năng lực.</p>
          <ul className="governance__insights">
            {lecturerInsights.map((insight, i) => (
              <li key={i}>
                <InsightMock title={insight} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="governance__caption">
        Các chỉ số dùng để hiểu hoạt động học và cải thiện giảng dạy, không phải để tự động kết
        luận năng lực lâm sàng của một sinh viên.
      </p>
    </SectionShell>
  )
}
