# SAVA Clinical Reasoning Studio — Product Website

Website mô tả sản phẩm **SAVA Clinical Reasoning Studio** (MEP-WEB-P3): một trang single-page kể chuyện sản phẩm (product storytelling), hướng tới lãnh đạo và giảng viên Đại học Y Hà Nội, dành cho người đọc chưa có bối cảnh dự án.

## Về dự án

Trang web giới thiệu một môi trường học tương tác giúp sinh viên y luyện **tư duy lâm sàng** qua các **ca bệnh mô phỏng**: sinh viên tự hỏi bệnh, tìm dữ kiện, xây dựng chẩn đoán phân biệt, giải thích lập luận, nhận phản hồi và luyện lại.

Nội dung (copy) lấy chính xác từ tài liệu đã duyệt **MEP-WEB-P2A — Website Copy v1.0**, dựa trên:
- **MEP-4C** — SAVA Clinical Reasoning Studio — Mô tả sản phẩm chi tiết (nguồn nội dung).
- **MEP-WEB-P1** — Website Brief & Information Architecture (nguồn cấu trúc 12 section).
- **MEP-WEB-P2B** — Visual System & Interaction Spec (nguồn thiết kế thị giác).

> ⚠️ Mọi UI mockup trên trang đều là **minh họa trải nghiệm sản phẩm**, không phải ảnh chụp phần mềm đã hoàn thiện. Ca khó thở chỉ là ví dụ minh họa, không phải nội dung đã được Đại học Y Hà Nội xác nhận.

## Công nghệ

- [Vite](https://vitejs.dev/) + [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- Modular CSS với design tokens (CSS variables) — theo spec P2B
- [Lucide](https://lucide.dev/) icons
- Animation thuần CSS, tôn trọng `prefers-reduced-motion`

## Chạy local

```bash
npm install
npm run dev        # dev server (http://localhost:5173)
```

## Build production

```bash
npm run build      # typecheck + vite build → ./dist
npm run preview    # xem bản build tại http://localhost:4173/Mo-ta-sp-DHY/
```

Lưu ý: `base` của Vite được cấu hình là `/Mo-ta-sp-DHY/` để hoạt động đúng trên GitHub Pages (project page).

## Deploy

Deploy bằng **GitHub Actions → GitHub Pages** (workflow `.github/workflows/deploy.yml`):

1. Push lên nhánh `main`.
2. Workflow build và upload `./dist`.
3. Cấu hình GitHub Pages dùng nguồn **GitHub Actions** (Settings → Pages → Source → "GitHub Actions").

## Public URL

Sau khi deploy thành công:

**https://kavie-cmyk.github.io/Mo-ta-sp-DHY/**

## Ghi chú nội dung

- Ngôn ngữ: tiếng Việt là chính; chỉ giữ các thuật ngữ kỹ thuật như AI, 3D, LMS, VR/XR, CT, MRI, ECG.
- Không bổ sung số liệu giả, không tạo yêu cầu HMU không có cơ sở, không ngụ ý hệ thống đã hoàn thiện.
- UI mockups đều mang nhãn minh họa.

Chi tiết quá trình build: [`docs/MEP-WEB-P3_BUILD_RECORD.md`](docs/MEP-WEB-P3_BUILD_RECORD.md).
