# MEP-WEB-P3 BUILD RECORD

SAVA Clinical Reasoning Studio — Product Storytelling Website

**Date:** 2026-08-19
**Lane:** MEP-WEB-P3 (Full Frontend Build + GitHub Pages)

---

## BUILD STATUS

**COMPLETE** — production build passed, deployed to GitHub Pages via GitHub Actions, public URL verified.

---

## SOURCE INPUTS

All four source documents were provided as **local exported copies (.docx)** supplied by the user and read in full. Drive connector was NOT used for content (Google Docs editor is canvas-based and not reliably scrapeable in this environment).

| Source | File (Downloads) | Form |
|---|---|---|
| MEP-4C — SAVA Clinical Reasoning Studio, Mô tả sản phẩm chi tiết v1.0 (19gSdO1PUXYWXGJhlxJCzxReJ9VEGwOVEo4TEQD4DLh8) | `MEP-4C_SAVA_Clinical_Reasoning_Studio_Mo_ta_San_pham_Chi_tiet_2026-08-19_v1.0.docx` | Local exported copy |
| MEP-WEB-P1 — Website Brief & Information Architecture v1.0 (1nknjFietjF3UCNAlcnXGGnXVtz7h7CEox689aWXz_8k) | `MEP-WEB-P1_Website_Brief_and_Information_Architecture_2026-08-19_v1.0.docx` | Local exported copy |
| MEP-WEB-P2A — Website Copy v1.0 (1fSuzt3gaXlNF88JOHyIqBjcroejHNVrDJ2oe_cibtu4) | `MEP-WEB-P2A_Website_Copy_2026-08-19_v1.0.docx` | Local exported copy |
| MEP-WEB-P2B — Visual System & Interaction Spec v1.0 (1bb7SiDkQd1Qh1qVsWO3qoPVp6IHd80GQV-71K4Azg5Y) | `MEP-WEB-P2B_Visual_System_and_Interaction_Spec_2026-08-19_v1.0.docx` | Local exported copy |

Extracted text mirrors are kept locally at `docs_src/` (git-ignored) for reference; they are NOT committed as site content.

---

## STACK

- Vite 6
- React 18
- TypeScript 5.6
- Modular CSS + custom design tokens (CSS variables) — chosen over Tailwind for precise P2B token control on diagram/product-mock UI
- Lucide icons
- CSS-first animations (respects `prefers-reduced-motion`)

## DESIGN SYSTEM

- Color tokens per P2B §6.1 (warm canvas #F6F5F1, accent #1D7A78, evidence #2F6B4F, validation #9A6A18, dark anchors #101820 / #17232D)
- Single accent; no rainbow AI gradients; no Cofounder palette
- Typography: Inter-first Vietnamese-safe stack with system fallback; fluid clamp sizing
- Radius: 8 / 14 / 20; border 1px #D9DEDE; light card shadows

---

## SECTION IMPLEMENTATION

| Section | ID | Status |
|---|---|---|
| S01 Hero | `#s01` | PASS |
| S02 Vấn đề | `#s02` | PASS |
| S03 Sinh viên | `#s03` | PASS |
| S04 Ca minh họa: Khó thở cấp | `#s04` | PASS |
| S05 Giảng viên | `#s05` | PASS |
| S06 AI | `#s06` | PASS |
| S07 3D / Hình ảnh / VR-XR | `#s07` | PASS |
| S08 Khác gì công cụ hiện có | `#s08` | PASS |
| S09 Bên trong ca bệnh tương tác | `#s09` | PASS |
| S10 Phản hồi → học bổ trợ → luyện lại | `#s10` | PASS |
| S11 Kiểm duyệt + phân tích cho giảng viên | `#s11` | PASS |
| S12 Tích hợp LMS + khả năng phù hợp HMU | `#s12` | PASS |

---

## VISUAL IMPLEMENTATION

### P0 (9) — ALL BUILT
- **V01** Hero Product Canvas — `Hero.tsx` — 3-tier canvas (case bar / evidence+differential+conversation grid / feedback), persistent "Minh họa trải nghiệm sản phẩm" badge; mobile stacks fragments.
- **V03** Student Learning Loop — `StudentJourney.tsx` — 9-step process; desktop horizontal grid, mobile vertical stepper.
- **V04** Acute Dyspnea Story — `Story.tsx` — 2-col sticky narrative (desktop), non-sticky stacked cards with per-step mock fragments (mobile); 8 steps per P2A.
- **V05** Lecturer Flow + Authoring — `Lecturer.tsx` — 8-step flow + authoring UI mock with review status chips.
- **V06** Three AI Roles — `AIRoles.tsx` — 3 role cards + boundary lines + callouts.
- **V07** Modality Decision Panel — `Modality.tsx` — 3 decision cards (3D / imaging / optional VR-XR).
- **V08** Comparison Matrix — `Comparison.tsx` — semantic table (desktop/tablet), labeled cards (mobile).
- **V10** Feedback / Remediation / Retry Loop — `FeedbackLoop.tsx` — 6-node loop + center statement; remediation accordion.
- **V11** Governance + Lecturer Analytics — `Governance.tsx` — split governance flow + insights mock (no fake KPI).

### P1 (4) — ALL BUILT
- **V02** Knowledge-to-Reasoning Contrast — `Problem.tsx`
- **V09** Anatomy of Interactive Case — `Anatomy.tsx` (hub center + 6 grouped cards)
- **V12** LMS Integration — `LMSHMU.tsx` (flow + return path + caveat)
- **V13** HMU Relevance — `LMSHMU.tsx` (known vs needs-direct-validation two-column panel)

### P2 — none locked.

**Deferred / modified:** none of the P0/P1 visuals deferred; all implemented per spec. Decorative SVG connectors kept minimal and `aria-hidden`; no fabricated authoritative medical imagery — placeholders labeled "Minh họa giao diện — không dùng cho chẩn đoán".

---

## ACCESSIBILITY

- One logical `h1`; semantic headings H1→H2→H3.
- Native `<nav>`, `<button>`, `<a>`, `<table>` (with `th scope`), `<ol>`/`<ul>` semantics.
- Sticky nav keyboard-accessible; mobile menu toggle with `aria-expanded`/`aria-controls`; Esc closes.
- Accordions are accessible buttons with `aria-expanded` + `role="region"`/`aria-labelledby`.
- Visible `:focus-visible` outline (accent) + `:focus` background on nav links.
- Skip link to main content.
- Decorative SVG connectors `aria-hidden`; meaningful labels in HTML.
- Contrast verified: primary 15.0:1, secondary 5.23:1, inverse 16.8:1, accent on white 5.11:1 on warm 4.69:1 (accent used for short uppercase labels/chips).
- No-JS baseline: all content present in DOM; JS only enhances active-step/sticky/accordion/nav-highlight.
- `prefers-reduced-motion` respected (reveal transitions off).

## RESPONSIVE QA

Verified at 375 / 430 / 768 / 1024 / 1280 / 1440 px (via Playwright layout checks, not just window resize):

- **Desktop (1280/1440):** full hero canvas 3-col; story sticky panel on; table; hub cards; no horizontal overflow.
- **Tablet (768):** hero 3-col; story sticky OFF (tablet portrait per P2B); comparison table on; anatomy 2-col.
- **Tablet landscape/laptop (1024):** story sticky ON; nav desktop; all grids adapt.
- **Mobile (375/430):** hero stacked; story non-sticky stacked cards with inline mocks; comparison → labeled cards; anatomy → single column; governance/hmu stack; nav hamburger menu; **no horizontal overflow at any breakpoint**.

## BUILD COMMAND RESULTS

- `npm install` → OK (72 packages; esbuild postinstall approved)
- `npm run build` (tsc -b && vite build) → **PASS**
  - `dist/index.html` 0.77 kB
  - `dist/assets/index-*.css` 36.29 kB (gzip 5.97 kB)
  - `dist/assets/index-*.js` 211.40 kB (gzip 63.12 kB)
- No lint step configured (plain modular CSS + TS; no ESLint config required by stack).

---

## DEPLOYMENT

- Workflow: `.github/workflows/deploy.yml` (GitHub Actions → GitHub Pages)
- Trigger: push to `main`
- Branch: `main`
- Commit SHA: `37240285ea006eceaed05f15ce7ff06619276423`
- Deployment state: **success** (GitHub Pages deployment environment, status `success` at 2026-08-19 14:55:21 UTC)
- Pages source: GitHub Actions (`build_type: workflow` confirmed via API) — no manual repo-setting change required

## PUBLIC URL

https://kavie-cmyk.github.io/Mo-ta-sp-DHY/

## PUBLIC URL VERIFICATION

**YES** — verified in browser (2026-08-19):
- HTTP 200; title/H1 correct.
- JS (`/Mo-ta-sp-DHY/assets/index-*.js`) and CSS (`/Mo-ta-sp-DHY/assets/index-*.css`) both resolve 200.
- All 12 sections render; no horizontal overflow; no console errors.
- Anchor navigation works: nav click to `#s05` lands at top offset 84px; direct deep-link load `#s12` lands correctly.
- No broken `/assets/...` paths; Vite `base: /Mo-ta-sp-DHY/` correct.

---

## KNOWN LIMITATIONS

- Sticky story panel enabled at ≥1024px viewport width (P2B allows tablet-landscape sticky; tablet portrait uses stacked).
- Hero `#1D7A78` accent on warm `#F6F5F1` is 4.69:1 — used only for short uppercase eyebrow labels (still ≥4.5 for normal text; large text exempt). Kept as spec color.
- No external medical assets; placeholders are abstract schematics by design (P2B asset policy).
- Fonts: Inter via system fallback stack (no remote font dependency → no FOUT/blocking).

## FINAL HANDOFF

Website built, QA'd locally, pushed to `main` (commit `3724028`), deployed via GitHub Actions, public URL verified. Continuity record committed. Ready for independent MEP-WEB-P4 public-site QA.
