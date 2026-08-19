import type { ReactNode } from 'react'
import './StatusChip.css'

interface StatusChipProps {
  children: ReactNode
  tone?: 'default' | 'accent' | 'evidence' | 'validation' | 'dark'
}

export function StatusChip({ children, tone = 'default' }: StatusChipProps) {
  return (
    <span className={`status-chip status-chip--${tone}`}>
      <span className="status-chip__dot" aria-hidden="true" />
      <span>{children}</span>
    </span>
  )
}
