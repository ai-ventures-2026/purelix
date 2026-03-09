import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const LeafIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path
      d="M14 3C14 3 5 8 5 16a9 9 0 0 0 18 0c0-8-9-13-9-13z"
      fill="#2d6a4f"
      opacity="0.15"
    />
    <path
      d="M14 3C14 3 5 8 5 16a9 9 0 0 0 18 0c0-8-9-13-9-13z"
      stroke="#2d6a4f"
      strokeWidth="1.6"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M14 3 L14 23"
      stroke="#2d6a4f"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M14 10 Q10 13 9 17"
      stroke="#74c69d"
      strokeWidth="1.2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M14 13 Q18 16 18 20"
      stroke="#74c69d"
      strokeWidth="1.2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Our Story' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when route changes
  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="Purelix home">
          <LeafIcon />
          <span className="navbar__brand">Purelix</span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `navbar__link${isActive ? ' navbar__link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="navbar__actions">
          <Link to="/products" className="btn btn-primary navbar__cta">
            Shop Now
          </Link>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger${menuOpen ? ' is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `navbar__drawer-link${isActive ? ' navbar__drawer-link--active' : ''}`
              }
              onClick={handleNavClick}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/products" className="btn btn-primary navbar__drawer-cta" onClick={handleNavClick}>
            Shop Now
          </Link>
        </nav>
      </div>
    </header>
  )
}
