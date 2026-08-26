import { site } from '../content/copy'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img
            className="footer__logo"
            src="/Mo-ta-sp-DHY/sava-logo-white.png"
            alt="SAVA"
            width={132}
            height={33}
          />
          <div>
            <p className="footer__name">{site.productName}</p>
            <p className="footer__tagline">{site.tagline}</p>
          </div>
        </div>
        <div className="footer__closing">
          <p>{site.closing.line1}</p>
        </div>
        <p className="footer__micro">{site.footerMicrocopy}</p>
      </div>
    </footer>
  )
}
