import { Link } from 'react-router-dom'
import './Footer.css'

const LeafSmall = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 2C10 2 4 6 4 12a6 6 0 0 0 12 0c0-6-6-10-6-10z" fill="#74c69d" opacity="0.3" />
    <path d="M10 2C10 2 4 6 4 12a6 6 0 0 0 12 0c0-6-6-10-6-10z" stroke="#74c69d" strokeWidth="1.4" fill="none" />
    <path d="M10 2 L10 17" stroke="#74c69d" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

const footerLinks = {
  Company: [
    { label: 'Our Story', to: '/about' },
    { label: 'Products', to: '/products' },
    { label: 'Ingredients', to: '/about' },
    { label: 'Sustainability', to: '/about' },
  ],
  Support: [
    { label: 'Contact Us', to: '/contact' },
    { label: 'FAQ', to: '/contact' },
    { label: 'Shipping Policy', to: '/contact' },
    { label: 'Returns', to: '/contact' },
  ],
}

const certifications = ['USDA Organic', 'Cruelty-Free', 'Vegan', 'B Corp']

export default function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter strip */}
      <div className="footer__newsletter">
        <div className="container footer__newsletter-inner">
          <div className="footer__newsletter-text">
            <h3>Join the Purelix community</h3>
            <p>Clean beauty tips, new arrivals, and exclusive offers — straight to your inbox.</p>
          </div>
          <form
            className="footer__newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              aria-label="Email address"
              className="footer__newsletter-input"
              required
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer__main">
        <div className="container footer__grid">
          {/* Brand column */}
          <div className="footer__brand-col">
            <Link to="/" className="footer__logo">
              <LeafSmall />
              <span>Purelix</span>
            </Link>
            <p className="footer__tagline">
              Pure ingredients. Real results. We believe clean beauty should never
              compromise on effectiveness or ethics.
            </p>

            {/* Certifications */}
            <div className="footer__certs">
              {certifications.map((cert) => (
                <span key={cert} className="footer__cert-badge">
                  {cert}
                </span>
              ))}
            </div>

            {/* Social */}
            <div className="footer__social">
              {['Instagram', 'Facebook', 'Pinterest', 'TikTok'].map((s) => (
                <a key={s} href="#" aria-label={s} className="footer__social-link">
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="footer__links-col">
              <h4 className="footer__links-heading">{heading}</h4>
              <ul className="footer__links-list">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="footer__link">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="footer__contact-col">
            <h4 className="footer__links-heading">Get in Touch</h4>
            <address className="footer__address">
              <p>123 Botanical Lane</p>
              <p>Portland, OR 97201</p>
              <a href="mailto:hello@purelix.com" className="footer__link">
                hello@purelix.com
              </a>
              <a href="tel:+15031234567" className="footer__link">
                +1 (503) 123-4567
              </a>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Purelix, Inc. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Privacy Policy</a>
            <a href="#" className="footer__bottom-link">Terms of Service</a>
            <a href="#" className="footer__bottom-link">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
