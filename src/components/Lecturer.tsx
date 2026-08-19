import { SectionShell } from './primitives/SectionShell'
import { SectionHeading } from './primitives/SectionHeading'
import { lecturerFlow } from '../content/copy'
import { ProcessStepper } from './primitives/ProcessStepper'
import { ProductMockFrame } from './primitives/ProductMockFrame'
import { StatusChip } from './primitives/StatusChip'
import { CalloutNote } from './primitives/CalloutNote'
import './Lecturer.css'

export function Lecturer() {
  return (
    <SectionShell id="s05" labelledBy="s05-title">
      <SectionHeading
        headingId="s05-title"
        eyebrow="Từ mục tiêu học tập đến một ca có thể đưa vào lớp"
        headline="Giảng viên giữ quyền kiểm soát nội dung và cách dạy"
        subheadline="AI có thể hỗ trợ soạn bản nháp, nhưng nội dung y khoa chỉ được đưa vào sử dụng sau khi con người kiểm tra và phê duyệt."
      >
        <div className="lecturer__body">
          <p>
            Một giảng viên có thể bắt đầu bằng câu hỏi: “Sau bài này, sinh viên cần biết lập luận
            điều gì?” Từ đó, giảng viên xác định tình huống bệnh nhân, dữ kiện sẽ xuất hiện, điểm
            cần sinh viên giải thích và cách phản hồi phù hợp.
          </p>
          <p>
            Khi ca được duyệt và giao cho lớp, giảng viên có thể xem những điểm sinh viên thường
            bỏ sót hoặc cần nhiều hỗ trợ. Thông tin này giúp quyết định nên giảng lại nội dung nào
            hoặc điều chỉnh ca ra sao.
          </p>
        </div>
      </SectionHeading>

      <div className="lecturer__flow">
        <ProcessStepper steps={lecturerFlow} />
      </div>

      <div className="lecturer__mock">
        <ProductMockFrame label="Công cụ biên soạn — bản nháp" badge="Minh họa giao diện">
          <div className="lecturer__mock-grid">
            <div className="lecturer__form">
              <p className="lecturer__form-title">Mục tiêu học tập</p>
              <div className="lecturer__field">
                <span className="lecturer__field-label">Loại tư duy cần luyện</span>
                <span className="lecturer__field-value">Lập luận chẩn đoán trong ca khó thở</span>
              </div>
              <div className="lecturer__field">
                <span className="lecturer__field-label">Tài liệu tham chiếu</span>
                <span className="lecturer__field-value">Phác đồ + tài liệu đã chấp thuận</span>
              </div>
              <div className="lecturer__field">
                <span className="lecturer__field-label">Dữ kiện sẽ xuất hiện</span>
                <span className="lecturer__field-value">Triệu chứng · thăm khám · xét nghiệm</span>
              </div>
              <p className="lecturer__form-hint">AI có thể gợi ý bản nháp — giảng viên xem và sửa.</p>
            </div>
            <div className="lecturer__review">
              <p className="lecturer__form-title">Trạng thái ca</p>
              <div className="lecturer__review-list">
                <StatusChip tone="accent">Biên soạn — bản nháp</StatusChip>
                <StatusChip>Chờ kiểm duyệt chuyên môn</StatusChip>
                <StatusChip tone="validation">Chờ phê duyệt học thuật</StatusChip>
                <StatusChip tone="evidence">Đã duyệt — sẵn sàng giao lớp</StatusChip>
              </div>
              <p className="lecturer__form-hint">
                Nội dung y khoa chỉ được dùng sau khi con người kiểm tra và phê duyệt.
              </p>
            </div>
          </div>
        </ProductMockFrame>
      </div>

      <div className="lecturer__callout">
        <CalloutNote variant="info">
          AI hỗ trợ bản nháp; nội dung y khoa vẫn cần người có trách nhiệm kiểm duyệt và phê duyệt.
        </CalloutNote>
      </div>

      <p className="lecturer__caption">
        AI rút ngắn phần soạn nháp; quyền quyết định nội dung được dùng trong giảng dạy vẫn thuộc
        quy trình học thuật của con người.
      </p>
    </SectionShell>
  )
}
