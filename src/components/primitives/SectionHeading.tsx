import type { ReactNode } from 'react'
import './SectionHeading.css'

interface SectionHeadingProps {
  eyebrow?: string
  headline?: string
  subheadline?: string
  headingId: string
  align?: 'left' | 'center'
  children?: ReactNode
}

export function SectionHeading({
  eyebrow,
  headline,
  subheadline,
  headingId,
  align = 'left',
  children,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      {headline ? (
        <h2 id={headingId} className="section-heading__title">
          {headline}
        </h2>
      ) : null}
      {subheadline ? <p className="section-heading__sub">{subheadline}</p> : null}
      {children}
    </div>
  )
}
