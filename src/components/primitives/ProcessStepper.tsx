import './ProcessStepper.css'
import type { FlowStep } from '../../content/copy'

interface ProcessStepperProps {
  steps: FlowStep[]
  emphasized?: number[]
  className?: string
  numbered?: boolean
}

/**
 * Generic vertical/horizontal process stepper. Ordered list is the canonical
 * source; connectors are decorative.
 */
export function ProcessStepper({
  steps,
  emphasized = [],
  className = '',
  numbered = true,
}: ProcessStepperProps) {
  return (
    <ol className={`stepper ${className}`}>
      {steps.map((s, i) => {
        const isEmph = emphasized.includes(i)
        return (
          <li key={i} className={`stepper__item ${isEmph ? 'stepper__item--emph' : ''}`}>
            <span className="stepper__node" aria-hidden="true">
              {numbered ? String(i + 1).padStart(2, '0') : ''}
            </span>
            <div className="stepper__text">
              <span className="stepper__title">{s.title}</span>
              {s.detail ? <span className="stepper__detail">{s.detail}</span> : null}
            </div>
          </li>
        )
      })}
    </ol>
  )
}
