import { SectionShell } from './primitives/SectionShell'
import { SectionHeading } from './primitives/SectionHeading'
import { CalloutNote } from './primitives/CalloutNote'
import { modalityDecisions } from '../content/copy'
import { Box, ScanLine, Glasses, ArrowDown } from 'lucide-react'
import './Modality.css'

const modalityIcons = [Box, ScanLine, Glasses]

export function Modality() {
  return (
    <SectionShell id="s07" tone="dark" labelledBy="s07-title">
      <SectionHeading
        headingId="s07-title"
        eyebrow="Trực quan hóa đúng lúc, đúng mục tiêu"
        headline="3D chỉ xuất hiện khi nhìn trong không gian giúp hiểu tốt hơn"
        subheadline="Hình ảnh y khoa là dữ kiện của ca; 3D hỗ trợ cấu trúc và cơ chế; VR/XR chỉ được cân nhắc khi trải nghiệm hiện diện hoặc không gian tạo thêm giá trị học tập."
      >
        <div className="modality__body">
          <p>
            Một ca tim mạch có thể cần nhìn mối liên hệ giữa buồng tim, van tim và dòng máu. Một ca
            thần kinh có thể cần nối vị trí tổn thương với đường dẫn truyền. Ở những tình huống như
            vậy, 3D giúp sinh viên giải thích điều đang xảy ra thay vì chỉ xem mô hình cho đẹp.
          </p>
          <p>
            X-quang, CT, MRI, siêu âm, ECG hoặc ảnh giải phẫu bệnh được xem như dữ kiện cần được
            diễn giải trong ca. VR/XR là lựa chọn mở rộng, không phải điều kiện để sử dụng sản phẩm
            trên web.
          </p>
        </div>
      </SectionHeading>

      <div className="modality__panel">
        <p className="modality__question">
          Mục tiêu học cần người học hiểu điều gì?
        </p>

        <div className="modality__cards">
          {modalityDecisions.map((d, i) => {
            const Icon = modalityIcons[i]
            return (
              <div key={i} className="modality__card">
                <div className="modality__card-icon" aria-hidden="true">
                  <Icon size={20} />
                </div>
                <p className="modality__card-if">
                  <span className="modality__card-tag">Nếu cần…</span>
                  {d.if}
                </p>
                <ArrowDown className="modality__arrow" aria-hidden="true" size={16} />
                <p className="modality__card-then">
                  <span className="modality__card-tag">Dùng…</span>
                  {d.then}
                </p>
              </div>
            )
          })}
        </div>

        <div className="modality__guardrail">
          <CalloutNote variant="info">Không phải ca nào cũng cần 3D hoặc VR.</CalloutNote>
        </div>
      </div>

      <p className="modality__caption">
        Công nghệ trực quan chỉ được đưa vào khi nó giúp sinh viên làm rõ một câu hỏi học tập cụ
        thể.
      </p>
    </SectionShell>
  )
}
