import type { ReactNode } from 'react'
import './DisclaimerNote.css'

interface DisclaimerNoteProps {
  children: ReactNode
}

export function DisclaimerNote({ children }: DisclaimerNoteProps) {
  return (
    <p className="disclaimer-note">
      <span aria-hidden="true" className="disclaimer-note__mark">
        ⓘ
      </span>
      <span>{children}</span>
    </p>
  )
}
