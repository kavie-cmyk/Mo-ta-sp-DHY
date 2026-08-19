import { SectionShell } from './primitives/SectionShell'
import { ProductMockFrame } from './primitives/ProductMockFrame'
import {
  PatientConversationMock,
  EvidenceBoardMock,
  DifferentialMock,
  ImagingMock,
  FeedbackMock,
} from './mocks/MockFragments'
import './Hero.css'

export function Hero() {
  return (
    <SectionShell id="s01" tone="dark" labelledBy="hero-title">
      <div className="hero">
        <div className="hero__text">
          <img
            className="hero__logo"
            src="/Mo-ta-sp-DHY/sava-logo-white.png"
            alt="SAVA"
            width={150}
            height={38}
          />
          <p className="hero__eyebrow">SAVA Clinical Reasoning Studio</p>
          <h1 id="hero-title" className="hero__headline">
            Luyện tư duy lâm sàng qua ca bệnh tương tác
          </h1>
          <p className="hero__sub">
            Sinh viên tự hỏi bệnh, tìm dữ kiện, xây dựng chẩn đoán phân biệt và đưa ra lập luận
            trước khi nhận phản hồi và luyện lại.
          </p>
          <div className="hero__body">
            <p>
              SAVA Clinical Reasoning Studio là môi trường học tương tác giúp sinh viên y luyện tư
              duy lâm sàng (clinical reasoning) qua các ca bệnh mô phỏng. Thay vì đọc sẵn toàn bộ
              thông tin rồi chọn đáp án, sinh viên phải chủ động khám phá ca, cân nhắc dữ kiện và
              giải thích quyết định của mình.
            </p>
            <p>
              AI, hình ảnh y khoa và 3D được đưa vào đúng lúc để hỗ trợ việc học. Trọng tâm vẫn là
              quá trình sinh viên tự suy nghĩ, nhận ra phần còn yếu và có cơ hội luyện lại.
            </p>
          </div>
        </div>

        <div className="hero__canvas-wrap">
          <ProductMockFrame
            label="SAVA Clinical Reasoning Studio"
            badge="Minh họa trải nghiệm sản phẩm"
            dark
          >
            <div className="hero-canvas">
              <div className="hero-canvas__casebar">
                <span className="hero-canvas__case-title">Ca bệnh đang học — Người bệnh khó thở cấp</span>
                <span className="hero-canvas__case-state">Chưa tiết lộ chẩn đoán</span>
              </div>
              <div className="hero-canvas__grid">
                <div className="hero-canvas__col hero-canvas__col--convo">
                  <PatientConversationMock />
                </div>
                <div className="hero-canvas__col hero-canvas__col--evidence">
                  <EvidenceBoardMock />
                  <ImagingMock />
                </div>
                <div className="hero-canvas__col hero-canvas__col--ddx">
                  <DifferentialMock />
                </div>
              </div>
              <div className="hero-canvas__feedback">
                <FeedbackMock />
              </div>
            </div>
          </ProductMockFrame>
          <p className="hero__caption">
            Một ca bệnh được trình bày như một không gian làm việc: sinh viên vừa tương tác với bệnh
            nhân, vừa thu thập dữ kiện, hình thành giả thuyết và nhận phản hồi theo quá trình đã
            thực hiện.
          </p>
        </div>
      </div>
    </SectionShell>
  )
}
