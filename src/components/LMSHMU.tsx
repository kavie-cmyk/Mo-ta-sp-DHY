import { SectionShell } from './primitives/SectionShell'
import { SectionHeading } from './primitives/SectionHeading'
import { lmsIntegrationFlow, hmuKnown, hmuValidate } from '../content/copy'
import { CalloutNote } from './primitives/CalloutNote'
import { AccessibleAccordion } from './primitives/AccessibleAccordion'
import { accordions } from '../content/copy'
import { ArrowDown, ArrowRight, BookOpen, Building2, RefreshCw } from 'lucide-react'
import './LMSHMU.css'

export function LMSHMU() {
  return (
    <SectionShell id="s12" tone="muted" labelledBy="s12-title">
      <SectionHeading
        headingId="s12-title"
        eyebrow="Đặt sản phẩm vào hệ thống đào tạo đang có"
        headline="Có thể hoạt động bên cạnh LMS hiện hữu của nhà trường"
        subheadline="SAVA Clinical Reasoning Studio được định hướng như một môi trường luyện tư duy lâm sàng chuyên biệt; khả năng tích hợp cụ thể phụ thuộc hệ thống thực tế của từng trường."
      >
        <div className="lmshmu__body">
          <p>
            Khi LMS cho phép, sinh viên có thể mở một ca từ khóa học hoặc bài tập hiện có. Studio
            nhận những thông tin cần thiết về người dùng và lớp học, sau đó có thể trả lại trạng
            thái hoàn thành hoặc kết quả tóm tắt. Sản phẩm không cần bắt đầu bằng việc thay thế
            LMS.
          </p>
          <p>
            Dựa trên thông tin công khai hiện có, Đại học Y Hà Nội đang vận hành LMS và có hoạt
            động liên quan đến đào tạo số, học liệu số và ứng dụng công nghệ trong giảng dạy. Điều
            đó cho thấy đây là một hướng có thể đáng để trao đổi thêm, nhưng chưa đủ để suy ra môn
            học, nhóm sinh viên hoặc yêu cầu tích hợp cụ thể của nhà trường.
          </p>
        </div>
      </SectionHeading>

      {/* V12 — LMS integration flow */}
      <div className="lmshmu__flow">
        <ol className="lmshmu__flow-list">
          {lmsIntegrationFlow.map((block, i) => (
            <li key={i} className="lmshmu__flow-item">
              <span className="lmshmu__flow-icon" aria-hidden="true">
                {i === 0 ? <Building2 size={18} /> : i === 2 ? <BookOpen size={18} /> : <ArrowRight size={18} />}
              </span>
              <span className="lmshmu__flow-label">{block.title}</span>
              {i < lmsIntegrationFlow.length - 1 ? (
                <ArrowDown className="lmshmu__flow-down" aria-hidden="true" size={16} />
              ) : null}
            </li>
          ))}
        </ol>
        <div className="lmshmu__return">
          <RefreshCw size={15} aria-hidden="true" />
          <span>Trả trạng thái hoàn thành / kết quả tóm tắt về LMS (khi hệ thống cho phép)</span>
        </div>
        <div className="lmshmu__note">
          <CalloutNote variant="warning">
            Khả năng tích hợp cụ thể phụ thuộc hệ thống LMS thực tế của nhà trường.
          </CalloutNote>
        </div>
      </div>

      {/* V13 — HMU known vs validate */}
      <div className="lmshmu__hmu">
        <h3 className="lmshmu__hmu-title">Khả năng phù hợp với Đại học Y Hà Nội</h3>
        <div className="lmshmu__hmu-grid">
          <div className="lmshmu__hmu-col">
            <p className="lmshmu__hmu-col-title">
              <span className="lmshmu__hmu-mark lmshmu__hmu-mark--known" aria-hidden="true" />
              Thông tin công khai hiện có
            </p>
            <ul className="lmshmu__hmu-list">
              {hmuKnown.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="lmshmu__hmu-col lmshmu__hmu-col--validate">
            <p className="lmshmu__hmu-col-title">
              <span className="lmshmu__hmu-mark lmshmu__hmu-mark--validate" aria-hidden="true" />
              Nội dung cần trao đổi trực tiếp
            </p>
            <ul className="lmshmu__hmu-list">
              {hmuValidate.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="lmshmu__hmu-conclusion">
          Sản phẩm có khả năng phù hợp với bối cảnh đào tạo số hiện tại và đáng để xác thực thêm —
          chưa phải là yêu cầu đã được nhà trường xác nhận.
        </p>
      </div>

      <div className="lmshmu__accordion">
        <AccessibleAccordion
          items={[
            {
              title: accordions[3].title,
              content: accordions[3].body.map((p, i) => <p key={i}>{p}</p>),
            },
            {
              title: accordions[4].title,
              content: accordions[4].body.map((p, i) => <p key={i}>{p}</p>),
            },
          ]}
        />
      </div>

      <p className="lmshmu__caption">
        Khối “đã biết” và “cần trao đổi” nên được trình bày tách biệt để website không biến giả
        định thành yêu cầu của nhà trường.
      </p>
    </SectionShell>
  )
}
