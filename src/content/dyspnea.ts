/**
 * S04 — Acute Dyspnea story steps (8 steps) per P2A/P2B.
 * Each step maps narrative to a mock UI fragment shown in the sticky panel (desktop)
 * or inline (mobile).
 */
export interface StoryStep {
  step: string
  label: string
  narrative: string
  mock: {
    title: string
    kind: 'case' | 'conversation' | 'evidence' | 'board' | 'hypotheses' | 'imaging' | 'reasoning' | 'feedback'
  }
}

export const dyspneaSteps: StoryStep[] = [
  {
    step: '01',
    label: 'Bắt đầu ca',
    narrative:
      'Sinh viên đọc mô tả ban đầu và biết mình cần giải quyết một vấn đề lâm sàng, nhưng chưa thấy chẩn đoán.',
    mock: { title: 'Ca bệnh / Mục tiêu học tập / Bắt đầu', kind: 'case' },
  },
  {
    step: '02',
    label: 'Hỏi bệnh nhân',
    narrative:
      'Sinh viên đặt câu hỏi về triệu chứng, tiền sử và các thông tin liên quan. Bệnh nhân AI chỉ trả lời từ dữ kiện đã được biên soạn cho ca.',
    mock: { title: 'Bệnh nhân AI / Cuộc hội thoại / Dữ kiện mới', kind: 'conversation' },
  },
  {
    step: '03',
    label: 'Tìm thêm dữ kiện',
    narrative:
      'Sinh viên lựa chọn nội dung thăm khám, xét nghiệm hoặc hình ảnh cần xem. Thông tin xuất hiện dần theo lựa chọn đó.',
    mock: { title: 'Thăm khám / Xét nghiệm / Hình ảnh y khoa', kind: 'evidence' },
  },
  {
    step: '04',
    label: 'Sắp xếp điều đã biết',
    narrative:
      'Các thông tin đã tìm thấy được đưa vào Bảng dữ kiện ca bệnh để sinh viên ghi chú, nhóm và liên kết với các giả thuyết.',
    mock: { title: 'Bảng dữ kiện ca bệnh / Ghim dữ kiện / Ghi chú', kind: 'board' },
  },
  {
    step: '05',
    label: 'Lập chẩn đoán phân biệt',
    narrative:
      'Sinh viên tạo một số giả thuyết, xếp hạng và chỉ ra dữ kiện nào đang ủng hộ hoặc làm giảm khả năng của từng giả thuyết.',
    mock: { title: 'Chẩn đoán phân biệt / Dữ kiện ủng hộ / Dữ kiện phản đối', kind: 'hypotheses' },
  },
  {
    step: '06',
    label: 'Hiểu cơ chế khi cần',
    narrative:
      'Nếu mục tiêu học cần quan sát quan hệ không gian hoặc cơ chế, hệ thống mở một mô hình 3D hoặc hình ảnh y khoa phù hợp để sinh viên tiếp tục giải thích.',
    mock: { title: 'Mô hình 3D / Hình ảnh / Câu hỏi giải thích', kind: 'imaging' },
  },
  {
    step: '07',
    label: 'Đưa ra lập luận và nhận phản hồi',
    narrative:
      'Sinh viên nêu lý do cho quyết định của mình. Hệ thống đối chiếu với bộ tiêu chí đã duyệt để phản hồi về dữ kiện, cách diễn giải và phần còn thiếu.',
    mock: { title: 'Lập luận / Quyết định / Phản hồi theo tiêu chí', kind: 'reasoning' },
  },
  {
    step: '08',
    label: 'Học lại đúng phần yếu',
    narrative:
      'Sinh viên nhận một nội dung củng cố phù hợp rồi làm lại điểm còn yếu hoặc một tình huống tương đương.',
    mock: { title: 'Học bổ trợ / Làm lại / Xem lại ca', kind: 'feedback' },
  },
]
