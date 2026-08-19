import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Nav.css'

const NAV_ITEMS = [
  { label: 'Tổng quan', href: '#s01' },
  { label: 'Sinh viên', href: '#s03' },
  { label: 'Giảng viên', href: '#s05' },
  { label: 'AI & 3D', href: '#s06' },
  { label: 'Cách hoạt động', href: '#s09' },
  { label: 'Khác biệt', href: '#s08' },
  { label: 'HMU', href: '#s12' },
]

const SECTION_IDS = ['s01', 's03', 's05', 's06', 's09', 's08', 's12']

export function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('s01')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="nav">
      <a className="skip-link" href="#s01">
        Bỏ qua điều hướng
      </a>
      <div className="nav__inner">
        <a href="#s01" className="nav__brand" aria-label="SAVA Clinical Reasoning Studio — về đầu trang">
          <span className="nav__brand-mark" aria-hidden="true">
            S
          </span>
          <span className="nav__brand-text">SAVA Clinical Reasoning Studio</span>
        </a>

        <nav className="nav__desktop" aria-label="Điều hướng chính">
          <ul className="nav__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`nav__link ${active === item.href.slice(1) ? 'nav__link--active' : ''}`}
                  aria-current={active === item.href.slice(1) ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      {open ? (
        <nav id="mobile-menu" className="nav__mobile" aria-label="Điều hướng di động">
          <ul className="nav__mobile-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
