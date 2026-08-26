import { SectionShell } from './primitives/SectionShell'
import { SectionHeading } from './primitives/SectionHeading'
import { platformBlocks } from '../content/copy'
import { UserRound, GraduationCap, Library, Settings2 } from 'lucide-react'
import './Platform.css'

const icons = [UserRound, GraduationCap, Library, Settings2]

/**
 * P0-2 — Product architecture overview (4 blocks).
 * A viewer understands in ~10 seconds: student + faculty + content + admin/integration.
 */
export function Platform() {
  return (
    <SectionShell id="s03" labelledBy="s03-title">
      <SectionHeading
        headingId="s03-title"
        eyebrow="Một nền tảng, bốn khối"
        headline="Sản phẩm gồm những gì"
        subheadline="Clinical Reasoning Studio gồm không gian học của sinh viên, công cụ của giảng viên, kho nội dung và lớp quản trị – tích hợp."
      />

      <div className="platform__grid">
        {platformBlocks.map((block, i) => {
          const Icon = icons[i]
          return (
            <article key={block.index} className="platform__card">
              <div className="platform__card-head">
                <span className="platform__card-icon" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <span className="platform__card-index" aria-hidden="true">
                  {block.index}
                </span>
              </div>
              <h3 className="platform__card-title">{block.title}</h3>
              <ul className="platform__card-list">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
              <p className="platform__card-note">{block.note}</p>
            </article>
          )
        })}
      </div>
    </SectionShell>
  )
}
