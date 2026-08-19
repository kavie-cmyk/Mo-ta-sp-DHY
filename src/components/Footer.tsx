import { site } from '../content/copy'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__mark" aria-hidden="true">
            S
          </span>
          <div>
            <p className="footer__name">{site.productName}</p>
            <p className="footer__tagline">{site.tagline}</p>
          </div>
        </div>
        <div className="footer__closing">
          <p>{site.closing.line1}</p>
          <p>{site.closing.line2}</p>
        </div>
        <p className="footer__micro">{site.footerMicrocopy}</p>
      </div>
    </footer>
  )
}
