import { useState, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import './AccessibleAccordion.css'

interface AccordionItem {
  title: string
  content: ReactNode
}

interface AccessibleAccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
}

export function AccessibleAccordion({ items, allowMultiple = false }: AccessibleAccordionProps) {
  const [open, setOpen] = useState<number[]>([])

  const toggle = (i: number) => {
    setOpen((prev) => {
      if (prev.includes(i)) return prev.filter((x) => x !== i)
      if (allowMultiple) return [...prev, i]
      return [i]
    })
  }

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = open.includes(i)
        return (
          <div key={i} className="accordion__item">
            <h3 className="accordion__heading">
              <button
                type="button"
                className="accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={`acc-panel-${i}`}
                id={`acc-button-${i}`}
                onClick={() => toggle(i)}
              >
                <span className="accordion__title">{item.title}</span>
                <ChevronDown
                  className={`accordion__chevron ${isOpen ? 'accordion__chevron--open' : ''}`}
                  aria-hidden="true"
                  size={18}
                />
              </button>
            </h3>
            <div
              id={`acc-panel-${i}`}
              role="region"
              aria-labelledby={`acc-button-${i}`}
              hidden={!isOpen}
              className="accordion__panel"
            >
              <div className="accordion__content">{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
