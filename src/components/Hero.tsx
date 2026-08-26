import { SectionShell } from './primitives/SectionShell'
import { ProductMockFrame } from './primitives/ProductMockFrame'
import {
  PatientConversationMock,
  EvidenceBoardMock,
  DifferentialMock,
  FeedbackMock,
} from './mocks/MockFragments'
import { ArrowRight, ArrowDown } from 'lucide-react'
import './Hero.css'

/**
 * S01 Hero — reduced text (~55%), simplified visual into a clear
 * interaction flow: Bệnh nhân → Dữ kiện → Chẩn đoán phân biệt → Phản hồi.
 */
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
          <p className="hero__eyebrow">Nền tảng luyện tư duy lâm sàng cho sinh viên y</p>
          <h1 id="hero-title" className="hero__headline">
            Luyện tư duy lâm sàng qua ca bệnh tương tác
          </h1>
          <p className="hero__sub">
            Sinh viên hỏi bệnh, khám phá dữ kiện, xây dựng chẩn đoán phân biệt và giải thích quyết
            định — trước khi nhận phản hồi và luyện lại.
          </p>
          <p className="hero__hint">
            Sinh viên dùng để học. Giảng viên dùng để biên soạn và quản lý ca học.
          </p>
        </div>

        <div className="hero__canvas-wrap">
          <ProductMockFrame
            label="Một ca bệnh trong Studio"
            badge="Minh họa trải nghiệm sản phẩm"
            dark
          >
            <div className="hero-canvas">
              <div className="hero-canvas__flow">
                <div className="hero-canvas__col">
                  <PatientConversationMock />
                </div>
                <ArrowRight className="hero-canvas__arrow-h" aria-hidden="true" size={18} />
                <ArrowDown className="hero-canvas__arrow-v" aria-hidden="true" size={18} />
                <div className="hero-canvas__col">
                  <EvidenceBoardMock />
                </div>
                <ArrowRight className="hero-canvas__arrow-h" aria-hidden="true" size={18} />
                <ArrowDown className="hero-canvas__arrow-v" aria-hidden="true" size={18} />
                <div className="hero-canvas__col">
                  <DifferentialMock />
                </div>
              </div>
              <div className="hero-canvas__feedback">
                <FeedbackMock />
              </div>
            </div>
          </ProductMockFrame>
          <p className="hero__caption">
            Sinh viên chủ động khám phá ca và lập luận; AI, hình ảnh y khoa và 3D xuất hiện đúng
            lúc để hỗ trợ việc học.
          </p>
        </div>
      </div>
    </SectionShell>
  )
}
