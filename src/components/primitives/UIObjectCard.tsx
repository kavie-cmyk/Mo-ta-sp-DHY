import type { ReactNode } from 'react'
import './UIObjectCard.css'

interface UIObjectCardProps {
  children: ReactNode
  title?: string
  icon?: ReactNode
  tone?: 'default' | 'muted' | 'accent' | 'evidence'
  className?: string
}

/**
 * A card that looks like a software object (case, evidence, hypothesis, ...)
 * rather than a marketing feature card.
 */
export function UIObjectCard({
  children,
  title,
  icon,
  tone = 'default',
  className = '',
}: UIObjectCardProps) {
  return (
    <div className={`ui-card ui-card--${tone} ${className}`}>
      {title ? (
        <div className="ui-card__head">
          {icon ? (
            <span className="ui-card__icon" aria-hidden="true">
              {icon}
            </span>
          ) : null}
          <span className="ui-card__title">{title}</span>
        </div>
      ) : null}
      <div className="ui-card__body">{children}</div>
    </div>
  )
}
