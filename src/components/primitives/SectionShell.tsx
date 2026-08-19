import type { ReactNode } from 'react'
import './SectionShell.css'

interface SectionShellProps {
  id: string
  children: ReactNode
  className?: string
  tone?: 'default' | 'dark' | 'muted'
  labelledBy?: string
}

export function SectionShell({
  id,
  children,
  className = '',
  tone = 'default',
  labelledBy,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`section-shell section-shell--${tone} ${className}`}
      aria-labelledby={labelledBy}
    >
      <div className="section-shell__inner">{children}</div>
    </section>
  )
}
