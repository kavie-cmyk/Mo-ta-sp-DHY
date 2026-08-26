import { governanceSteps, lecturerInsights } from '../content/copy'
import { ProcessStepper } from './primitives/ProcessStepper'
import { CalloutNote } from './primitives/CalloutNote'
import { InsightMock } from './mocks/MockFragments'
import { ShieldCheck, BarChart3 } from 'lucide-react'
import './Governance.css'

/**
 * Governance + lecturer insights — sub-block of S05.
 */
export function Governance() {
  return (
    <div className="governance__wrap">
      <h3 className="governance__subhead">Nội dung được kiểm soát, lớp học được theo dõi</h3>
      <p className="governance__desc">
        Ca bệnh đi qua biên soạn, kiểm duyệt chuyên môn và phê duyệt học thuật trước khi dùng.
        Sau đó giảng viên có thể xem những điểm mà cả lớp thường gặp khó trong quá trình giải ca.
      </p>

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
          <p className="governance__insight-hint">Dữ liệu minh họa.</p>
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
        Các chỉ số phản ánh hoạt động học trong Studio để cải thiện giảng dạy, không tự kết luận
        năng lực lâm sàng của sinh viên.
      </p>
    </div>
  )
}
