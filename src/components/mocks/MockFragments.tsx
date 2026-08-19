import type { ReactNode } from 'react'
import { MessageCircle, ClipboardList, Stethoscope, FlaskConical, Box, PenLine, CheckCircle2, Lightbulb, RefreshCw, HeartPulse, Scan, Brain } from 'lucide-react'
import './MockFragments.css'

/* ------------------------------------------------------------------ */
/* Reusable micro-pieces inside product mocks                          */
/* ------------------------------------------------------------------ */

export function MockChip({ children }: { children: ReactNode }) {
  return <span className="mf-chip">{children}</span>
}

export function MockRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="mf-row">
      <span className="mf-row__label">{label}</span>
      <span className="mf-row__value">{value}</span>
    </div>
  )
}

/* Case intro card */
export function CaseIntroMock() {
  return (
    <div className="mf-block" aria-label="Mô tả ca bệnh">
      <div className="mf-block__head">
        <span className="mf-kicker">Ca bệnh đang học</span>
      </div>
      <p className="mf-title">Người bệnh khó thở cấp</p>
      <p className="mf-text">
        Bệnh nhân nữ, 54 tuổi, đến khám vì khó thở tăng dần trong 2 ngày.
      </p>
      <div className="mf-meta">
        <MockChip>Mục tiêu học tập</MockChip>
        <MockChip>Chưa tiết lộ chẩn đoán</MockChip>
      </div>
    </div>
  )
}

/* Patient AI conversation */
export function PatientConversationMock() {
  return (
    <div className="mf-block" aria-label="Hội thoại với bệnh nhân AI">
      <div className="mf-block__head">
        <MessageCircle size={14} aria-hidden="true" />
        <span>Hỏi bệnh nhân</span>
      </div>
      <div className="mf-chat">
        <div className="mf-bubble mf-bubble--patient">
          Chào cô, hôm nay cô thấy khó thở thế nào ạ?
        </div>
        <div className="mf-bubble mf-bubble--ai">
          Tôi thấy khó thở nhiều hơn, nhất là khi nằm xuống. Đêm tôi phải ngồi dậy mới dễ chịu.
        </div>
        <div className="mf-bubble mf-bubble--ai">
          (Bệnh nhân chỉ trả lời từ dữ kiện đã biên soạn cho ca.)
        </div>
      </div>
      <MockChip>Dữ kiện mới +1</MockChip>
    </div>
  )
}

/* Evidence / investigation options */
export function InvestigationMock() {
  return (
    <div className="mf-block" aria-label="Thăm khám và xét nghiệm">
      <div className="mf-block__head">
        <Stethoscope size={14} aria-hidden="true" />
        <span>Thăm khám / Xét nghiệm</span>
      </div>
      <div className="mf-list">
        <MockRow label="Thăm khám" value="Nghe phổi, phù chi, tĩnh mạch cổ" />
        <MockRow label="Xét nghiệm" value="Khí máu động mạch, NT-proBNP" />
        <MockRow label="Hình ảnh" value="X-quang ngực" />
      </div>
      <div className="mf-meta">
        <MockChip>Dữ kiện xuất hiện theo lựa chọn</MockChip>
      </div>
    </div>
  )
}

/* Evidence board */
export function EvidenceBoardMock() {
  return (
    <div className="mf-block" aria-label="Bảng dữ kiện ca bệnh">
      <div className="mf-block__head">
        <ClipboardList size={14} aria-hidden="true" />
        <span>Bảng dữ kiện ca bệnh</span>
      </div>
      <div className="mf-evidence-list">
        <MockChip>Khó thở khi nằm</MockChip>
        <MockChip>Phù hai chi dưới</MockChip>
        <MockChip>NT-proBNP tăng</MockChip>
      </div>
      <p className="mf-note">Ghim / nhóm / ghi chú dữ kiện và liên kết với giả thuyết.</p>
    </div>
  )
}

/* Differential diagnosis */
export function DifferentialMock() {
  return (
    <div className="mf-block" aria-label="Chẩn đoán phân biệt">
      <div className="mf-block__head">
        <Brain size={14} aria-hidden="true" />
        <span>Chẩn đoán phân biệt</span>
      </div>
      <div className="mf-hyp">
        <div className="mf-hyp__row">
          <span className="mf-hyp__name">Suy tim</span>
          <span className="mf-hyp__rank">#1</span>
        </div>
        <div className="mf-hyp__ev">
          <span className="mf-ev mf-ev--support">Ủng hộ: phù, khó thở khi nằm</span>
          <span className="mf-ev mf-ev--against">Phản đối: —</span>
        </div>
      </div>
      <div className="mf-hyp">
        <div className="mf-hyp__row">
          <span className="mf-hyp__name">Đợt cấp COPD</span>
          <span className="mf-hyp__rank">#2</span>
        </div>
        <div className="mf-hyp__ev">
          <span className="mf-ev mf-ev--support">Ủng hộ: khó thở tăng dần</span>
          <span className="mf-ev mf-ev--against">Phản đối: cần thêm dữ kiện</span>
        </div>
      </div>
      <MockChip>Xếp hạng giả thuyết</MockChip>
    </div>
  )
}

/* Imaging / 3D placeholder (abstract, not authoritative) */
export function ImagingMock() {
  return (
    <div className="mf-block" aria-label="Hình ảnh y khoa minh họa">
      <div className="mf-block__head">
        <Scan size={14} aria-hidden="true" />
        <span>Dữ kiện hình ảnh</span>
      </div>
      <div className="mf-scan" role="img" aria-label="Sơ đồ minh họa khoang ngực — hình minh họa, không dùng cho chẩn đoán">
        <svg viewBox="0 0 120 80" aria-hidden="true" className="mf-scan__svg">
          <rect x="8" y="12" width="104" height="56" rx="26" fill="#E4F2F1" stroke="#1D7A78" strokeWidth="1.5" />
          <path d="M60 20 L60 60 M40 28 Q60 40 80 28" fill="none" stroke="#1D7A78" strokeWidth="1.5" />
          <circle cx="60" cy="44" r="7" fill="#fff" stroke="#1D7A78" strokeWidth="1.5" />
        </svg>
        <span className="mf-scan__note">Minh họa giao diện — không dùng cho chẩn đoán</span>
      </div>
    </div>
  )
}

/* Reasoning / decision */
export function ReasoningMock() {
  return (
    <div className="mf-block" aria-label="Lập luận và quyết định">
      <div className="mf-block__head">
        <PenLine size={14} aria-hidden="true" />
        <span>Lập luận của bạn</span>
      </div>
      <div className="mf-reasoning">
        <p className="mf-text">
          Dữ kiện nào đang quan trọng nhất và vì sao? Hãy nêu lý do cho quyết định của bạn.
        </p>
        <div className="mf-input" aria-hidden="true">
          Khó thở khi nằm + phù + NT-proBNP tăng → hướng đến suy tim…
        </div>
      </div>
      <MockChip>Quyết định</MockChip>
    </div>
  )
}

/* Feedback card */
export function FeedbackMock() {
  return (
    <div className="mf-block mf-block--feedback" aria-label="Phản hồi">
      <div className="mf-block__head">
        <CheckCircle2 size={14} aria-hidden="true" />
        <span>Phản hồi sau khi đã thử</span>
      </div>
      <ul className="mf-feedback-list">
        <li>Đã dùng tốt dữ kiện phù chi và khó thở khi nằm.</li>
        <li>Còn thiếu: chưa diễn giải đầy đủ kết quả NT-proBNP.</li>
        <li>Gợi ý học bổ trợ: đọc hình X-quang ngực.</li>
      </ul>
      <div className="mf-meta">
        <MockChip>Học bổ trợ</MockChip>
        <MockChip>Làm lại</MockChip>
      </div>
    </div>
  )
}

/* 3D placeholder */
export function Model3DMock() {
  return (
    <div className="mf-block" aria-label="Mô hình 3D minh họa">
      <div className="mf-block__head">
        <Box size={14} aria-hidden="true" />
        <span>Mô hình 3D</span>
      </div>
      <div className="mf-3d" role="img" aria-label="Sơ đồ minh họa 3D khoang ngực">
        <svg viewBox="0 0 120 80" aria-hidden="true">
          <ellipse cx="60" cy="40" rx="34" ry="30" fill="#E4F2F1" stroke="#1D7A78" strokeWidth="1.5" />
          <path d="M60 10 L60 70" stroke="#1D7A78" strokeWidth="1" opacity="0.4" />
          <circle cx="48" cy="38" r="9" fill="#fff" stroke="#1D7A78" strokeWidth="1.5" />
          <circle cx="72" cy="38" r="9" fill="#fff" stroke="#1D7A78" strokeWidth="1.5" />
        </svg>
        <span className="mf-scan__note">Minh họa giao diện — không dùng cho chẩn đoán</span>
      </div>
    </div>
  )
}

/* Remediation / retry */
export function RetryMock() {
  return (
    <div className="mf-block" aria-label="Học bổ trợ và luyện lại">
      <div className="mf-block__head">
        <RefreshCw size={14} aria-hidden="true" />
        <span>Học bổ trợ / Làm lại</span>
      </div>
      <p className="mf-text">
        Nhận nội dung củng cố đúng phần còn yếu, rồi thử lại điểm lập luận hoặc một tình huống tương đương.
      </p>
      <div className="mf-meta">
        <MockChip>Bài ngắn: nhận diện dữ kiện</MockChip>
        <MockChip>Làm lại</MockChip>
      </div>
    </div>
  )
}

/* Small lecturer insights mock */
export function InsightMock({ title }: { title: string }) {
  return (
    <div className="mf-insight">
      <Lightbulb size={14} aria-hidden="true" />
      <span>{title}</span>
    </div>
  )
}

export function VitalMock() {
  return (
    <div className="mf-vitals" aria-hidden="true">
      <HeartPulse size={14} />
      <span>Nhịp thở 24 · SpO2 88%</span>
    </div>
  )
}

export function EmptyIcon() {
  return <FlaskConical size={14} aria-hidden="true" />
}
