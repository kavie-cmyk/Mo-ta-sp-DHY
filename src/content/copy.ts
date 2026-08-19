/**
 * MEP-WEB-P2A — Website Copy (v1.0) → content data.
 *
 * This file is the single source of copy for the website. It mirrors the
 * approved P2A copy. Keep wording intact; only tiny web-format tweaks allowed.
 */

export const site = {
  productName: 'SAVA Clinical Reasoning Studio',
  tagline: 'Môi trường học tương tác giúp sinh viên y luyện tư duy lâm sàng qua ca bệnh mô phỏng.',
  closing: {
    line1: 'Đề xuất này là cơ sở để cùng nhà trường trao đổi về môn học, nhóm sinh viên và tình huống đào tạo phù hợp nhất.',
    line2: 'Bước trao đổi tiếp theo nên bắt đầu từ một câu hỏi cụ thể: sinh viên cần được luyện loại tư duy nào, trong môn học và bối cảnh nào?',
  },
  footerMicrocopy:
    'Mô tả sản phẩm — nội dung minh họa cần được xác nhận theo bối cảnh triển khai thực tế.',
}

export interface SectionCopy {
  id: string
  navLabel: string
  eyebrow: string
  headline: string
  subheadline?: string
  body: string[]
  visualCaption?: string
  disclaimer?: string
  callout?: string
}

export const sections: SectionCopy[] = [
  {
    id: 's01',
    navLabel: 'Tổng quan',
    eyebrow: site.productName,
    headline: 'Luyện tư duy lâm sàng qua ca bệnh tương tác',
    subheadline:
      'Sinh viên tự hỏi bệnh, tìm dữ kiện, xây dựng chẩn đoán phân biệt và đưa ra lập luận trước khi nhận phản hồi và luyện lại.',
    body: [
      'SAVA Clinical Reasoning Studio là môi trường học tương tác giúp sinh viên y luyện tư duy lâm sàng (clinical reasoning) qua các ca bệnh mô phỏng. Thay vì đọc sẵn toàn bộ thông tin rồi chọn đáp án, sinh viên phải chủ động khám phá ca, cân nhắc dữ kiện và giải thích quyết định của mình.',
      'AI, hình ảnh y khoa và 3D được đưa vào đúng lúc để hỗ trợ việc học. Trọng tâm vẫn là quá trình sinh viên tự suy nghĩ, nhận ra phần còn yếu và có cơ hội luyện lại.',
    ],
    visualCaption:
      'Một ca bệnh được trình bày như một không gian làm việc: sinh viên vừa tương tác với bệnh nhân, vừa thu thập dữ kiện, hình thành giả thuyết và nhận phản hồi theo quá trình đã thực hiện.',
  },
  {
    id: 's02',
    navLabel: 'Vấn đề',
    eyebrow: 'Từ biết kiến thức đến biết sử dụng kiến thức',
    headline: 'Biết kiến thức chưa đồng nghĩa với biết lập luận trong ca bệnh',
    subheadline:
      'Khi dữ kiện xuất hiện chưa đầy đủ, sinh viên phải quyết định nên hỏi gì, tìm gì, hiểu kết quả ra sao và khi nào cần thay đổi giả thuyết.',
    body: [
      'Bài giảng, sách điện tử, video, ngân hàng câu hỏi, atlas 3D và LMS đều có vai trò quan trọng trong đào tạo. Tuy nhiên, một câu trả lời đúng chưa cho biết sinh viên đã đi đến kết luận bằng cách nào.',
      'SAVA Clinical Reasoning Studio bổ sung một lớp luyện tập nơi quá trình đó trở nên nhìn thấy được: người học phải thu thập dữ kiện, cập nhật chẩn đoán phân biệt, giải thích lập luận và thử lại sau phản hồi.',
    ],
    visualCaption:
      'Sản phẩm không thay thế các hình thức học hiện có; nó bổ sung phần luyện sử dụng kiến thức trong một tình huống lâm sàng có diễn tiến.',
  },
  {
    id: 's03',
    navLabel: 'Sinh viên',
    eyebrow: 'Một ca bệnh, nhiều quyết định nhỏ',
    headline: 'Sinh viên học bằng cách tự khám phá và tự lập luận',
    subheadline:
      'Ca bệnh mở dần theo hành động của người học, để mỗi bước thu thập dữ kiện và điều chỉnh giả thuyết đều có ý nghĩa.',
    body: [
      'Sau khi vào ca, sinh viên chỉ nhận thông tin mở đầu và mục tiêu học. Chẩn đoán không được tiết lộ. Người học hỏi bệnh nhân AI, lựa chọn nội dung thăm khám hoặc xét nghiệm cần xem, rồi sắp xếp dữ kiện đã tìm thấy.',
      'Khi đã có đủ thông tin, sinh viên xây dựng chẩn đoán phân biệt, giải thích vì sao một dữ kiện ủng hộ hoặc phản đối từng khả năng và đưa ra quyết định theo yêu cầu của bài. Phản hồi chỉ xuất hiện sau khi sinh viên đã thể hiện nỗ lực của mình.',
    ],
    visualCaption:
      'Một vòng học hoàn chỉnh không dừng ở lời giải; sinh viên được đưa trở lại hoạt động thực hành sau khi nhận phản hồi.',
  },
  {
    id: 's04',
    navLabel: 'Ca minh họa',
    eyebrow: 'Nhìn sản phẩm vận hành qua một tình huống',
    headline: 'Từ câu hỏi đầu tiên đến lần luyện lại',
    subheadline:
      'Một câu chuyện ngắn cho thấy ca bệnh, AI, dữ kiện, 3D và phản hồi phối hợp với nhau như thế nào trong trải nghiệm của sinh viên.',
    body: [
      'Hãy hình dung một sinh viên mở ca về một người bệnh đến khám vì khó thở. Em chỉ thấy thông tin ban đầu và mục tiêu học tập. Mọi dữ kiện tiếp theo phải được khám phá theo hành động của chính người học.',
    ],
    disclaimer:
      'Ca khó thở chỉ dùng để minh họa cách sản phẩm vận hành; không phải nội dung đã được Đại học Y Hà Nội xác nhận.',
    visualCaption:
      'Các màn hình trong câu chuyện là mockup minh họa trải nghiệm, không phải ảnh chụp một sản phẩm đã hoàn thiện.',
  },
  {
    id: 's05',
    navLabel: 'Giảng viên',
    eyebrow: 'Từ mục tiêu học tập đến một ca có thể đưa vào lớp',
    headline: 'Giảng viên giữ quyền kiểm soát nội dung và cách dạy',
    subheadline:
      'AI có thể hỗ trợ soạn bản nháp, nhưng nội dung y khoa chỉ được đưa vào sử dụng sau khi con người kiểm tra và phê duyệt.',
    body: [
      'Một giảng viên có thể bắt đầu bằng câu hỏi: “Sau bài này, sinh viên cần biết lập luận điều gì?” Từ đó, giảng viên xác định tình huống bệnh nhân, dữ kiện sẽ xuất hiện, điểm cần sinh viên giải thích và cách phản hồi phù hợp.',
      'Khi ca được duyệt và giao cho lớp, giảng viên có thể xem những điểm sinh viên thường bỏ sót hoặc cần nhiều hỗ trợ. Thông tin này giúp quyết định nên giảng lại nội dung nào hoặc điều chỉnh ca ra sao.',
    ],
    visualCaption:
      'AI rút ngắn phần soạn nháp; quyền quyết định nội dung được dùng trong giảng dạy vẫn thuộc quy trình học thuật của con người.',
  },
  {
    id: 's06',
    navLabel: 'AI',
    eyebrow: 'Ba vai trò dễ hiểu',
    headline: 'AI hỗ trợ quá trình học, không làm bài thay sinh viên',
    subheadline:
      'AI xuất hiện với vai trò rõ ràng: bệnh nhân mô phỏng, trợ giảng sau nỗ lực của người học và công cụ hỗ trợ giảng viên.',
    body: [
      'AI không được đặt ở vị trí đưa lời giải ngay khi sinh viên chưa tự thử. Ở những điểm cần tư duy độc lập, sinh viên phải hỏi, chọn dữ kiện, nêu giả thuyết hoặc giải thích trước; sau đó hệ thống mới tăng mức hỗ trợ khi phù hợp.',
    ],
    callout: 'Sinh viên nghĩ trước. AI hỗ trợ sau.',
    visualCaption:
      'Tách rõ ba vai trò giúp người học biết mình đang nói chuyện với bệnh nhân, nhận trợ giúp học tập hay sử dụng công cụ dành cho giảng viên.',
  },
  {
    id: 's07',
    navLabel: 'AI & 3D',
    eyebrow: 'Trực quan hóa đúng lúc, đúng mục tiêu',
    headline: '3D chỉ xuất hiện khi nhìn trong không gian giúp hiểu tốt hơn',
    subheadline:
      'Hình ảnh y khoa là dữ kiện của ca; 3D hỗ trợ cấu trúc và cơ chế; VR/XR chỉ được cân nhắc khi trải nghiệm hiện diện hoặc không gian tạo thêm giá trị học tập.',
    body: [
      'Một ca tim mạch có thể cần nhìn mối liên hệ giữa buồng tim, van tim và dòng máu. Một ca thần kinh có thể cần nối vị trí tổn thương với đường dẫn truyền. Ở những tình huống như vậy, 3D giúp sinh viên giải thích điều đang xảy ra thay vì chỉ xem mô hình cho đẹp.',
      'X-quang, CT, MRI, siêu âm, ECG hoặc ảnh giải phẫu bệnh được xem như dữ kiện cần được diễn giải trong ca. VR/XR là lựa chọn mở rộng, không phải điều kiện để sử dụng sản phẩm trên web.',
    ],
    callout: 'Không phải ca nào cũng cần 3D hoặc VR.',
    visualCaption:
      'Công nghệ trực quan chỉ được đưa vào khi nó giúp sinh viên làm rõ một câu hỏi học tập cụ thể.',
  },
  {
    id: 's08',
    navLabel: 'Khác biệt',
    eyebrow: 'Khác ở cách tổ chức trải nghiệm học',
    headline: 'Không thay thế các công cụ quen thuộc — bổ sung phần lập luận trong ca bệnh',
    subheadline:
      'Nhiều công cụ đã làm rất tốt từng phần riêng lẻ. Clinical Reasoning Studio kết nối các phần đó quanh quá trình sinh viên tìm dữ kiện, lập luận, nhận phản hồi và luyện lại.',
    body: [
      'Điểm khác biệt không nằm ở việc SAVA “có AI” hoặc “có 3D”. Giá trị được đề xuất nằm ở việc những thành phần này cùng phục vụ một ca bệnh tương tác có mục tiêu học, dữ kiện, lập luận và phản hồi rõ ràng.',
    ],
    visualCaption:
      'Bảng so sánh mô tả trọng tâm sử dụng phổ biến của từng loại công cụ, không nhằm đánh giá một sản phẩm hoặc nhà cung cấp cụ thể.',
  },
  {
    id: 's09',
    navLabel: 'Cách hoạt động',
    eyebrow: 'Đơn vị trung tâm của sản phẩm',
    headline: 'Mỗi ca bệnh là một bài thực hành có cấu trúc',
    subheadline:
      'Một ca không chỉ là bệnh sử kèm câu hỏi; nó nối mục tiêu học, dữ kiện, điểm cần lập luận, phản hồi và nội dung củng cố thành cùng một trải nghiệm.',
    body: [
      'Có thể hình dung ca bệnh tương tác như một “khung bài thực hành” được giảng viên cấu hình trước. Sinh viên chỉ nhìn thấy những thông tin phù hợp với diễn tiến của ca và hành động mình đã thực hiện.',
      'Nhờ cấu trúc này, hệ thống có thể biết sinh viên đã tìm dữ kiện nào, đã thay đổi giả thuyết ra sao và nên phản hồi ở điểm nào mà không cần biến trải nghiệm thành một chuỗi câu hỏi trắc nghiệm.',
    ],
    visualCaption:
      'Các thành phần xoay quanh cùng một ca bệnh để người học không phải chuyển giữa nhiều công cụ rời rạc.',
  },
  {
    id: 's10',
    navLabel: 'Cách hoạt động',
    eyebrow: 'Phản hồi phải dẫn đến một hành động học tiếp theo',
    headline: 'Chỉ ra phần còn yếu rồi cho sinh viên thử lại',
    subheadline:
      'Hệ thống không dừng ở “đúng” hay “sai”; phản hồi được nối với một nội dung củng cố phù hợp và một cơ hội luyện lại.',
    body: [
      'Sau khi sinh viên đã thực hiện một bước lập luận, hệ thống ghi nhận hành động có thể quan sát được và đối chiếu với bộ tiêu chí đã được phê duyệt. Phản hồi có thể chỉ ra dữ kiện bị bỏ sót, cách diễn giải chưa phù hợp, chẩn đoán phân biệt quá hẹp hoặc một cơ chế chưa được hiểu rõ.',
      'Phần còn yếu sau đó được nối với bài tập, hình ảnh, giải thích, mô hình 3D hoặc một ca ngắn phù hợp. Sinh viên luyện lại để biến phản hồi thành thực hành mới.',
    ],
    visualCaption:
      'Vòng học này chỉ phản ánh quá trình thực hành trong sản phẩm; nó không tự động chứng nhận năng lực hành nghề hoặc mức sẵn sàng với bệnh nhân thật.',
  },
  {
    id: 's11',
    navLabel: 'Giảng viên',
    eyebrow: 'Hai lớp giúp sản phẩm đáng tin trong môi trường học thuật',
    headline: 'Nội dung có người chịu trách nhiệm, số liệu có mục đích sư phạm',
    subheadline:
      'Ca bệnh đi qua kiểm duyệt trước khi sử dụng; sau đó giảng viên có thể xem những điểm mà cả lớp thường gặp khó trong quá trình giải ca.',
    body: [
      'Trong giáo dục y khoa, một dữ kiện sai, một hình gắn nhãn sai hoặc một lời giải thiếu điều kiện có thể tạo hiểu nhầm. Vì vậy việc biên soạn, kiểm duyệt chuyên môn và phê duyệt học thuật là một phần của trải nghiệm sản phẩm.',
      'Sau khi ca được dùng trong lớp, hệ thống có thể tổng hợp các tín hiệu từ hoạt động học để giảng viên nhìn ra phần nào cần giải thích lại hoặc ca nào cần chỉnh sửa.',
    ],
    visualCaption:
      'Các chỉ số dùng để hiểu hoạt động học và cải thiện giảng dạy, không phải để tự động kết luận năng lực lâm sàng của một sinh viên.',
  },
  {
    id: 's12',
    navLabel: 'HMU',
    eyebrow: 'Đặt sản phẩm vào hệ thống đào tạo đang có',
    headline: 'Có thể hoạt động bên cạnh LMS hiện hữu của nhà trường',
    subheadline:
      'SAVA Clinical Reasoning Studio được định hướng như một môi trường luyện tư duy lâm sàng chuyên biệt; khả năng tích hợp cụ thể phụ thuộc hệ thống thực tế của từng trường.',
    body: [
      'Khi LMS cho phép, sinh viên có thể mở một ca từ khóa học hoặc bài tập hiện có. Studio nhận những thông tin cần thiết về người dùng và lớp học, sau đó có thể trả lại trạng thái hoàn thành hoặc kết quả tóm tắt. Sản phẩm không cần bắt đầu bằng việc thay thế LMS.',
      'Dựa trên thông tin công khai hiện có, Đại học Y Hà Nội đang vận hành LMS và có hoạt động liên quan đến đào tạo số, học liệu số và ứng dụng công nghệ trong giảng dạy. Điều đó cho thấy đây là một hướng có thể đáng để trao đổi thêm, nhưng chưa đủ để suy ra môn học, nhóm sinh viên hoặc yêu cầu tích hợp cụ thể của nhà trường.',
    ],
    visualCaption:
      'Khối “đã biết” và “cần trao đổi” nên được trình bày tách biệt để website không biến giả định thành yêu cầu của nhà trường.',
  },
]

export interface FlowStep {
  title: string
  detail: string
}

export const studentFlow: FlowStep[] = [
  { title: 'Ca bệnh', detail: 'Nhận tình huống và mục tiêu học, chưa thấy lời giải.' },
  { title: 'Hỏi bệnh', detail: 'Chủ động khai thác thông tin từ bệnh nhân AI.' },
  { title: 'Thu thập dữ kiện', detail: 'Chọn thăm khám, xét nghiệm hoặc hình ảnh cần xem.' },
  { title: 'Chẩn đoán phân biệt', detail: 'Tạo, xếp hạng và cập nhật các khả năng đang cân nhắc.' },
  { title: 'Giải thích', detail: 'Liên kết dữ kiện với giả thuyết và nêu lý do.' },
  { title: 'Quyết định', detail: 'Đưa ra lựa chọn phù hợp với mục tiêu của ca học.' },
  { title: 'Phản hồi', detail: 'Xem phần đã làm tốt, phần còn thiếu và lý do.' },
  { title: 'Học bổ trợ', detail: 'Tập trung vào đúng nội dung còn yếu.' },
  { title: 'Làm lại', detail: 'Thử lại điểm lập luận hoặc một tình huống tương đương.' },
]

export const lecturerFlow: FlowStep[] = [
  { title: 'Mục tiêu học tập', detail: 'Xác định điều sinh viên cần luyện.' },
  { title: 'Biên soạn ca', detail: 'Tạo bệnh nhân, dữ kiện, câu hỏi và cách phản hồi.' },
  { title: 'AI hỗ trợ bản nháp', detail: 'Gợi ý nội dung để giảng viên xem và sửa.' },
  { title: 'Kiểm duyệt chuyên môn', detail: 'Kiểm tra tính đúng đắn của nội dung y khoa.' },
  { title: 'Phê duyệt học thuật', detail: 'Xác nhận mục tiêu, cách đánh giá và quyền sử dụng.' },
  { title: 'Giao cho lớp', detail: 'Chọn nhóm sinh viên và đưa ca vào hoạt động học.' },
  { title: 'Xem lớp gặp khó ở đâu', detail: 'Quan sát dữ kiện bị bỏ qua, điểm hay xin gợi ý và phần học bổ trợ.' },
  { title: 'Điều chỉnh nội dung', detail: 'Cập nhật ca hoặc cách giảng khi có cơ sở.' },
]

export const aiRoles = [
  {
    title: 'Bệnh nhân AI',
    body: 'Tạo cuộc hỏi bệnh tự nhiên hơn, nhưng chỉ sử dụng dữ kiện đã được biên soạn cho ca. Nếu thông tin không tồn tại, hệ thống không tự sáng tạo thêm chi tiết lâm sàng.',
    boundary: 'Chỉ trả lời trong phạm vi dữ kiện ca đã biên soạn.',
  },
  {
    title: 'Trợ giảng AI có kiểm soát nguồn',
    body: 'Có thể đưa gợi ý nhẹ, câu hỏi gợi mở hoặc giải thích dựa trên nguồn được chấp thuận sau khi sinh viên đã tự thử.',
    boundary: 'Gợi ý sau khi sinh viên đã tự thử.',
  },
  {
    title: 'AI hỗ trợ giảng viên',
    body: 'Hỗ trợ tạo bản nháp nội dung và tóm tắt những xu hướng đã có trong số liệu lớp. AI không tự phê duyệt hoặc xuất bản nội dung y khoa.',
    boundary: 'Hỗ trợ bản nháp; không tự phê duyệt.',
  },
]

export const modalityDecisions = [
  {
    if: 'Cần hiểu cấu trúc hoặc cơ chế',
    then: '3D',
    note: 'Cấu trúc, cơ chế trong không gian.',
  },
  {
    if: 'Cần diễn giải dữ kiện chẩn đoán',
    then: 'X-quang / CT / MRI / ECG / hình ảnh y khoa',
    note: 'Dữ kiện cần được đọc và diễn giải trong ca.',
  },
  {
    if: 'Cần tương tác hiện diện hoặc không gian ở mức cao hơn',
    then: 'VR/XR tùy chọn',
    note: 'Lựa chọn mở rộng, không bắt buộc.',
  },
]

export const comparison = [
  {
    tool: 'Chatbot AI',
    focus: 'Hỏi đáp và giải thích kiến thức',
    add: 'AI phản ứng theo ca bệnh và lập luận sinh viên đã thể hiện; không đưa lời giải ngay ở những điểm cần tự suy nghĩ.',
  },
  {
    tool: 'Atlas 3D',
    focus: 'Khám phá cấu trúc giải phẫu',
    add: 'Đưa 3D vào một vấn đề lâm sàng cụ thể và gắn nó với dữ kiện hoặc câu hỏi cần giải thích.',
  },
  {
    tool: 'LMS',
    focus: 'Quản lý khóa học, người dùng, bài tập và tiến độ',
    add: 'Cung cấp hoạt động luyện tư duy lâm sàng; có thể được mở từ LMS hiện hữu.',
  },
  {
    tool: 'Bệnh nhân ảo',
    focus: 'Hỏi bệnh và tương tác với bệnh nhân mô phỏng',
    add: 'Nối phần hỏi bệnh với Bảng dữ kiện, chẩn đoán phân biệt, hình ảnh/3D, phản hồi và luyện lại.',
  },
  {
    tool: 'Ngân hàng câu hỏi',
    focus: 'Câu hỏi, đáp án và giải thích',
    add: 'Bắt đầu từ một tình huống để sinh viên tự tìm dữ kiện và cập nhật lập luận trước khi có kết luận.',
  },
]

export const caseAnatomyGroups = [
  {
    title: 'Mục tiêu & đối tượng',
    chips: ['Mục tiêu học', 'Đối tượng sinh viên'],
  },
  {
    title: 'Bệnh nhân & dữ kiện',
    chips: ['Bệnh nhân', 'Dữ kiện', 'Bảng dữ kiện ca bệnh'],
  },
  {
    title: 'Thăm khám / xét nghiệm / hình ảnh / 3D',
    chips: ['Thăm khám', 'Xét nghiệm', 'Hình ảnh y khoa', '3D'],
  },
  {
    title: 'Điểm lập luận & quyết định',
    chips: ['Điểm yêu cầu lập luận', 'Chẩn đoán phân biệt', 'Quyết định'],
  },
  {
    title: 'Tiêu chí phản hồi & học bổ trợ',
    chips: ['Tiêu chí phản hồi', 'Học bổ trợ', 'Làm lại'],
  },
  {
    title: 'Nguồn / phiên bản / kiểm duyệt',
    chips: ['Nguồn tham chiếu', 'Phiên bản', 'Kiểm duyệt'],
  },
]

export const learningLoopSteps = [
  { title: 'Sinh viên hành động' },
  { title: 'Hệ thống ghi nhận' },
  { title: 'Đối chiếu tiêu chí đã duyệt' },
  { title: 'Phản hồi' },
  { title: 'Học bổ trợ đúng phần yếu' },
  { title: 'Làm lại' },
]

export const remediationExamples = [
  { issue: 'Bỏ sót dữ kiện', action: 'Bài ngắn yêu cầu nhận diện dữ kiện.' },
  { issue: 'Diễn giải sai hình ảnh', action: 'Bài đọc hình kèm giải thích.' },
  { issue: 'Chẩn đoán phân biệt quá hẹp', action: 'Ca ngắn buộc cân nhắc thêm khả năng.' },
  { issue: 'Chưa hiểu cơ chế', action: 'Sơ đồ, hoạt ảnh hoặc 3D ngắn.' },
  { issue: 'Chọn xét nghiệm chưa hợp lý', action: 'Tình huống tập trung vào lựa chọn và lý do.' },
]

export const governanceSteps = [
  { title: 'Biên soạn', detail: 'Tạo ca và gắn nguồn tham chiếu.' },
  { title: 'Kiểm duyệt chuyên môn', detail: 'Kiểm tra tính đúng đắn của nội dung y khoa.' },
  { title: 'Phê duyệt học thuật', detail: 'Xác nhận mục tiêu học và quyền đưa vào sử dụng.' },
  { title: 'Đưa vào sử dụng', detail: 'Giao ca đã duyệt cho sinh viên.' },
]

export const lecturerInsights = [
  'Dữ kiện thường bị bỏ qua',
  'Điểm sinh viên hay xin gợi ý',
  'Phần chẩn đoán phân biệt thường thiếu',
  'Hình ảnh hoặc dấu hiệu thường bị diễn giải chưa đúng',
  'Nội dung học bổ trợ được sử dụng',
  'Thay đổi sau lần luyện lại',
  'Điểm trong ca thường gây khó khăn',
]

export const lmsIntegrationFlow = [
  { title: 'LMS của trường' },
  { title: 'Khóa học / Lớp / Bài tập' },
  { title: 'SAVA Clinical Reasoning Studio' },
  { title: 'Hoạt động học: ca bệnh / AI / dữ kiện / 3D / phản hồi' },
  { title: 'Hoàn thành / Kết quả tóm tắt' },
]

export const hmuKnown = [
  'Nhà trường đang vận hành LMS.',
  'Có hoạt động liên quan đến đào tạo số và học liệu số.',
  'Có bối cảnh phù hợp để trao đổi về một ứng dụng học y chuyên biệt có khả năng tích hợp.',
]

export const hmuValidate = [
  'Môn học, chủ đề và mục tiêu học tập ưu tiên.',
  'Nhóm sinh viên và cách sản phẩm sẽ được sử dụng.',
  'Khả năng tích hợp với LMS hiện tại.',
  'Yêu cầu đăng nhập, thiết bị và khả năng truy cập.',
  'Quy trình biên soạn, kiểm duyệt và phê duyệt nội dung.',
  'Quyền sử dụng ca bệnh, hình ảnh và tài liệu.',
  'Yêu cầu bảo mật, lưu trữ và xử lý dữ liệu.',
  'Các chỉ số nhà trường cho là phù hợp để đánh giá hoạt động học.',
]

export const accordions = [
  {
    title: 'Xem chi tiết cách một ca được cấu tạo',
    body: [
      'Một ca có thể quy định dữ kiện nào được mở ở từng thời điểm, điều gì xảy ra khi sinh viên chọn một thăm khám hoặc xét nghiệm, và khi nào cần dừng lại để yêu cầu người học đưa ra lập luận. Ca cũng gắn với bộ tiêu chí phản hồi, tài liệu tham chiếu và các nội dung học bổ trợ đã được chuẩn bị trước.',
      'Khi nội dung y khoa hoặc tiêu chí phản hồi thay đổi đáng kể, phiên bản mới cần được kiểm duyệt lại để biết rõ sinh viên đã làm bài với nội dung nào.',
    ],
  },
  {
    title: 'Xem ví dụ các dạng học bổ trợ',
    body: [
      'Nội dung củng cố được chọn theo phần còn yếu quan sát được trong ca. Mục tiêu không phải đưa thêm một “bài đọc chung”, mà tạo một hoạt động đủ ngắn và đủ cụ thể để sinh viên có thể sửa lỗi rồi thử lại ngay.',
    ],
  },
  {
    title: 'Giảng viên có thể theo dõi những gì?',
    body: [
      'Bảng theo dõi nên ưu tiên câu hỏi sư phạm: sinh viên hay bỏ qua dữ kiện nào, cần hỗ trợ ở đâu, điểm nào của ca gây nhầm lẫn và sau học bổ trợ có thay đổi gì trong chính hoạt động học. Không dùng các nhãn hoặc điểm số ngụ ý “đủ năng lực hành nghề” nếu không có cơ sở đánh giá phù hợp.',
    ],
  },
  {
    title: 'Có thể mở rộng sang những lĩnh vực nào?',
    body: [
      'Cùng một cách tổ chức ca bệnh có thể được cấu hình cho các lĩnh vực như tim mạch, thần kinh, chẩn đoán hình ảnh, giao tiếp lâm sàng hoặc luyện trình tự nhận thức trước khi vào phòng kỹ năng. Đây là khả năng mở rộng của sản phẩm, không phải danh sách môn học đã được HMU lựa chọn.',
    ],
  },
  {
    title: 'Những gì cần xác nhận thêm với Đại học Y Hà Nội?',
    body: [
      'Trước khi biến mô tả sản phẩm thành đề xuất cụ thể cho một môn học hoặc đơn vị, cần xác nhận trực tiếp nhu cầu học tập, nhóm sinh viên, quy trình nội dung, hạ tầng LMS, yêu cầu dữ liệu và tiêu chí đánh giá. Ca khó thở/hô hấp chỉ là ví dụ minh họa trong mô tả sản phẩm.',
    ],
  },
]
