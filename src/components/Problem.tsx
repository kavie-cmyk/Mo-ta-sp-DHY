import { SectionShell } from './primitives/SectionShell'
import { SectionHeading } from './primitives/SectionHeading'
import { ArrowRight, ArrowDown } from 'lucide-react'
import './Problem.css'

const conventional = ['Bài giảng', 'Câu hỏi', 'Đáp án']
const studioFlow = ['Tình huống', 'Dữ kiện', 'Lập luận', 'Quyết định', 'Phản hồi', 'Luyện lại']

function MiniFlow({ steps, muted = false }: { steps: string[]; muted?: boolean }) {
  return (
    <ol className={`mini-flow ${muted ? 'mini-flow--muted' : ''}`}>
      {steps.map((s, i) => (
        <li key={i} className="mini-flow__item">
          <span className="mini-flow__node">{s}</span>
          {i < steps.length - 1 ? (
            <>
              <ArrowRight className="mini-flow__arrow-h" aria-hidden="true" size={16} />
              <ArrowDown className="mini-flow__arrow-v" aria-hidden="true" size={16} />
            </>
          ) : null}
        </li>
      ))}
    </ol>
  )
}

export function Problem() {
  return (
    <SectionShell id="s02" labelledBy="s02-title">
      <SectionHeading
        headingId="s02-title"
        eyebrow="Từ biết kiến thức đến biết sử dụng kiến thức"
        headline="Biết kiến thức chưa đồng nghĩa với biết lập luận trong ca bệnh"
        subheadline="Khi dữ kiện xuất hiện chưa đầy đủ, sinh viên phải quyết định nên hỏi gì, tìm gì, hiểu kết quả ra sao và khi nào cần thay đổi giả thuyết."
      >
        <div className="problem__body">
          <p>
            Bài giảng, sách điện tử, video, ngân hàng câu hỏi, atlas 3D và LMS đều có vai trò quan
            trọng trong đào tạo. Tuy nhiên, một câu trả lời đúng chưa cho biết sinh viên đã đi đến
            kết luận bằng cách nào.
          </p>
          <p>
            SAVA Clinical Reasoning Studio bổ sung một lớp luyện tập nơi quá trình đó trở nên nhìn
            thấy được: người học phải thu thập dữ kiện, cập nhật chẩn đoán phân biệt, giải thích
            lập luận và thử lại sau phản hồi.
          </p>
        </div>
      </SectionHeading>

      <div className="problem__contrast">
        <div className="problem__panel">
          <p className="problem__panel-label">Tiếp nhận kiến thức</p>
          <p className="problem__panel-title">Cách học nội dung</p>
          <MiniFlow steps={conventional} muted />
        </div>
        <div className="problem__panel problem__panel--accent">
          <p className="problem__panel-label">Sử dụng kiến thức trong tình huống</p>
          <p className="problem__panel-title">Luyện tư duy lâm sàng</p>
          <MiniFlow steps={studioFlow} />
        </div>
      </div>

      <p className="problem__caption">
        Sản phẩm không thay thế các hình thức học hiện có; nó bổ sung phần luyện sử dụng kiến thức
        trong một tình huống lâm sàng có diễn tiến.
      </p>
    </SectionShell>
  )
}
