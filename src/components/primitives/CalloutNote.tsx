import type { ReactNode } from 'react'
import { Info, TriangleAlert } from 'lucide-react'
import './CalloutNote.css'

interface CalloutNoteProps {
  children: ReactNode
  variant?: 'info' | 'warning' | 'evidence'
}

export function CalloutNote({ children, variant = 'info' }: CalloutNoteProps) {
  const Icon = variant === 'warning' ? TriangleAlert : Info
  return (
    <div className={`callout callout--${variant}`} role="note">
      <Icon className="callout__icon" aria-hidden="true" size={18} />
      <div className="callout__text">{children}</div>
    </div>
  )
}
