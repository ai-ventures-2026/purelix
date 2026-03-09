import { Link } from 'react-router-dom'
import './About.css'

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const IconAward = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
)

const IconGlobe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

const IconFlask = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 3h6l1 9H8L9 3z"/>
    <path d="M6.7 15.8C5.6 17.4 5 18.6 5 20a7 7 0 0 0 14 0c0-1.4-.6-2.6-1.7-4.2L15 12H9l-2.3 3.8z"/>
    <line x1="12" y1="3" x2="12" y2="12"/>
  </svg>
)

const timeline = [
  {
    year: '2018',
    title: 'Born in a Kitchen',
    desc: 'Founder Elena Marsh, frustrated by toxic ingredients in mainstream skincare, began experimenting with pure botanical formulations at her kitchen table in Portland.',
  },
  {
    year: '2019',
    title: 'First 100 Customers',
    desc: 'Elena\'s handcrafted Vitamin C Serum found its first fans through local farmers markets and word-of-mouth. Each batch was made in small quantities with meticulous care.',
  },
  {
    year: '2020',
    title: 'Lab Partnership',
    desc: 'Partnering with a certified GMP lab, Purelix scaled production while maintaining its commitment to clean, traceable formulations. Every ingredient is still selected by hand.',
  },
  {
    year: '2022',
    title: 'B Corp Certification',
    desc: 'Purelix achieved B Corporation status — joining a global community of businesses committed to using profit as a force for good. Environmental and social accountability enshrined.',
  },
  {
    year: '2024',
    title: '500K Customers',
    desc: 'Half a million people now trust Purelix as their daily skincare routine. We remain true to our founding principle: your skin deserves only the purest ingredients.',
  },
]

const manifesto = [
  'We will never use ingredients we cannot explain or pronounce.',
  'We publish every formula in full — no hidden "fragrance" blends.',
  'We will always choose the sustainable option, even when it costs more.',
  'We hold ourselves accountable to third-party certifications, not self-labelling.',
  'We formulate for efficacy first. Natural should mean better, not just cleaner.',
  'We share our failures as openly as our successes.',
]

const certifications = [
  { name: 'USDA Organic', body: 'USDA National Organic Program', icon: <IconAward /> },
  { name: 'Leaping Bunny', body: 'Cruelty Free International', icon: <IconAward /> },
  { name: 'B Corp Certified', body: 'B Lab Global', icon: <IconAward /> },
  { name: 'EWG Verified', body: 'Environmental Working Group', icon: <IconAward /> },
  { name: 'NSF/ANSI 305', body: 'NSF International', icon: <IconAward /> },
  { name: '1% for the Planet', body: '1% for the Planet', icon: <IconGlobe /> },
]

const envCommitments = [
  { title: 'Carbon Neutral Shipping', desc: 'Every shipment is offset through verified carbon credits via our partner, Pachama.' },
  { title: 'Refillable Packaging', desc: 'Our aluminium bottles and glass jars are designed to be refilled. Ship back your empties for a 15% discount.' },
  { title: 'Zero-Waste Production', desc: 'Our manufacturing facility diverts 98% of waste from landfill. We\'re targeting 100% by 2026.' },
  { title: 'Regenerative Farms', desc: 'We partner with 12 certified regenerative farms across 6 countries for our key botanical ingredients.' },
  { title: 'Ocean-Bound Plastic', desc: 'Where we cannot use glass or aluminium, we use ocean-bound recycled plastic to help clean coastlines.' },
  { title: 'Tree Planting', desc: 'Every purchase plants one tree through the Eden Reforestation Projects. 1.2 million trees and counting.' },
]

export default function About() {
  return (
    <div className="about">

      {/* ===== PAGE HERO ===== */}
      <section className="page-hero about-hero">
        <div className="container page-hero__inner">
          <span className="badge">Our Story</span>
          <h1 className="page-hero__title">We Started with a<br />Simple Question</h1>
          <p className="page-hero__sub">
            Why should we have to choose between products that are good for us
            and products that actually work? Purelix was built on the belief
            that you never should.
          </p>
        </div>
        <div className="about-hero__orb" aria-hidden="true" />
      </section>

      {/* ===== OUR STORY / TIMELINE ===== */}
      <section className="section story">
        <div className="container">
          <div className="section-header">
            <span className="badge">The Journey</span>
            <h2 className="section-title">From Kitchen to Community</h2>
            <p className="section-subtitle">
              A timeline of our most meaningful milestones — each one shaped by
              the people who trust us with their skin.
            </p>
            <div className="divider" />
          </div>
          <div className="timeline">
            {timeline.map(({ year, title, desc }, i) => (
              <div key={year} className={`timeline-item${i % 2 === 0 ? ' timeline-item--left' : ' timeline-item--right'}`}>
                <div className="timeline-year">{year}</div>
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-card">
                  <h3 className="timeline-card__title">{title}</h3>
                  <p className="timeline-card__desc">{desc}</p>
                </div>
              </div>
            ))}
            <div className="timeline-line" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ===== MANIFESTO ===== */}
      <section className="section manifesto">
        <div className="manifesto__bg" aria-hidden="true" />
        <div className="container manifesto__inner">
          <div className="manifesto__text">
            <span className="badge" style={{ background: 'rgba(216,243,220,0.15)', color: '#d8f3dc', borderColor: 'rgba(116,198,157,0.25)' }}>
              Clean Beauty Manifesto
            </span>
            <h2 className="manifesto__title">What We Stand For</h2>
            <p className="manifesto__sub">
              These are not marketing promises. They are the commitments our
              entire team is held to — from the lab to the boardroom.
            </p>
          </div>
          <ul className="manifesto__list">
            {manifesto.map((item, i) => (
              <li key={i} className="manifesto__item">
                <span className="manifesto__check"><IconCheck /></span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== LAB & CERTIFICATIONS ===== */}
      <section className="section certifications">
        <div className="container">
          <div className="section-header centered">
            <span className="badge">Third-Party Verified</span>
            <h2 className="section-title">Lab & Certifications</h2>
            <p className="section-subtitle">
              We don't ask you to take our word for it. Every claim we make is
              verified by independent bodies with rigorous standards.
            </p>
            <div className="divider centered" />
          </div>

          <div className="lab-banner">
            <div className="lab-banner__icon-col" aria-hidden="true">
              <span className="lab-icon"><IconFlask /></span>
            </div>
            <div className="lab-banner__text">
              <h3>GMP-Certified Manufacturing</h3>
              <p>
                All Purelix products are manufactured in a US FDA-registered,
                GMP-certified facility. Every batch undergoes third-party testing
                for potency, purity, and microbial safety before it ever reaches
                your door. Our CoA (Certificate of Analysis) is available for
                every SKU on request.
              </p>
            </div>
          </div>

          <div className="certs-grid">
            {certifications.map(({ name, body, icon }) => (
              <div key={name} className="cert-card">
                <div className="cert-card__icon">{icon}</div>
                <div>
                  <h4 className="cert-card__name">{name}</h4>
                  <p className="cert-card__body">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ENVIRONMENTAL COMMITMENT ===== */}
      <section className="section env-commitment">
        <div className="container">
          <div className="section-header">
            <span className="badge">Planet First</span>
            <h2 className="section-title">Our Environmental Commitment</h2>
            <p className="section-subtitle">
              Beauty should leave the world better than it found it.
              Here is exactly how we work to make that true.
            </p>
            <div className="divider" />
          </div>

          <div className="env-grid">
            {envCommitments.map(({ title, desc }) => (
              <div key={title} className="env-card">
                <div className="env-card__dot" aria-hidden="true" />
                <h3 className="env-card__title">{title}</h3>
                <p className="env-card__desc">{desc}</p>
              </div>
            ))}
          </div>

          <div className="env-impact">
            <div className="env-impact__item">
              <span className="env-impact__num">1.2M</span>
              <span className="env-impact__label">Trees planted</span>
            </div>
            <div className="env-impact__item">
              <span className="env-impact__num">98%</span>
              <span className="env-impact__label">Waste diverted from landfill</span>
            </div>
            <div className="env-impact__item">
              <span className="env-impact__num">12</span>
              <span className="env-impact__label">Regenerative farm partners</span>
            </div>
            <div className="env-impact__item">
              <span className="env-impact__num">100%</span>
              <span className="env-impact__label">Carbon-neutral shipping</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEAM CTA ===== */}
      <section className="section team-cta">
        <div className="container team-cta__inner">
          <div>
            <h2 className="team-cta__title">Ready to experience the Purelix difference?</h2>
            <p className="team-cta__sub">Start with a free sample kit and feel what clean beauty really means.</p>
          </div>
          <div className="team-cta__actions">
            <Link to="/products" className="btn btn-primary btn-lg">
              Shop Products
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
