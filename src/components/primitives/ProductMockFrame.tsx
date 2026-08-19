import type { ReactNode } from 'react'
import './ProductMockFrame.css'

interface ProductMockFrameProps {
  children: ReactNode
  label?: string
  badge?: string
  dark?: boolean
  className?: string
  active?: boolean
}

/**
 * A window-like frame that holds product UI mock fragments.
 * Used in V01 hero canvas and V04 story mocks.
 */
export function ProductMockFrame({
  children,
  label,
  badge,
  dark = false,
  className = '',
  active = true,
}: ProductMockFrameProps) {
  return (
    <div
      className={`mock-frame ${dark ? 'mock-frame--dark' : ''} ${
        active ? 'mock-frame--active' : 'mock-frame--muted'
      } ${className}`}
    >
      <div className="mock-frame__bar">
        <span className="mock-frame__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        {label ? <span className="mock-frame__label">{label}</span> : null}
        {badge ? <span className="mock-frame__badge">{badge}</span> : null}
      </div>
      <div className="mock-frame__content">{children}</div>
    </div>
  )
}
