import { useState } from 'react'
import './Contact.css'

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.59 1.3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const IconMapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)

const IconChevron = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: '0.25s ease' }}
  >
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)

const faqs = [
  {
    q: 'Are all Purelix products truly 100% natural?',
    a: 'Yes. Every ingredient in every Purelix formula is of natural origin. We do not use synthetic fragrances, parabens, sulfates, phthalates, or any of the 1,300+ substances banned by the EU. You can view the full INCI list for any product on its individual product page.',
  },
  {
    q: 'How long does shipping take?',
    a: 'Standard shipping within the US takes 3–5 business days. Express 2-day shipping is available at checkout. International orders typically arrive in 7–14 business days depending on the destination country. All orders over $60 ship free within the US.',
  },
  {
    q: 'What is your return policy?',
    a: 'We offer a 30-day satisfaction guarantee. If you are not completely happy with your purchase for any reason, contact us within 30 days of delivery and we will arrange a full refund or replacement — no questions asked. We believe you should love what goes on your skin.',
  },
  {
    q: 'Are your products tested on animals?',
    a: 'Absolutely not. Purelix is certified Cruelty-Free by both Leaping Bunny and PETA\'s Beauty Without Bunnies program. We also ensure that none of our ingredient suppliers conduct animal testing. We are 100% vegan across our entire product range.',
  },
  {
    q: 'Can I use Purelix products if I have sensitive skin?',
    a: 'Most Purelix products are formulated to be suitable for sensitive skin. Products designed specifically for sensitive skin are clearly marked. We recommend patch testing any new product for 24–48 hours before full use. If you have a known skin condition, consult your dermatologist.',
  },
  {
    q: 'How do I know which products are right for me?',
    a: 'You can use our Skin Quiz (coming soon) for personalised recommendations, or contact our team of trained skin specialists via email or live chat. We\'re happy to guide you to the right routine based on your skin type, concerns, and goals.',
  },
  {
    q: 'Do you offer samples before I commit to a full size?',
    a: 'Yes! We offer a free 7-day trial kit containing travel sizes of our three bestsellers. You only pay $4.95 for shipping. Visit our homepage to claim yours while stocks last. It\'s the best way to discover what works for your skin.',
  },
  {
    q: 'What is your packaging made from?',
    a: 'We use glass, aluminium, and ocean-bound recycled plastic. All packaging is either refillable, recyclable, or compostable. We\'re working towards 100% plastic-free packaging by the end of 2026. Our refill program offers 15% off when you return your empty containers.',
  },
]

const contactMethods = [
  {
    icon: <IconMail />,
    label: 'Email Us',
    value: 'hello@purelix.com',
    note: 'We reply within 24 hours',
  },
  {
    icon: <IconPhone />,
    label: 'Call Us',
    value: '+1 (503) 123-4567',
    note: 'Mon–Fri, 9am–6pm PT',
  },
  {
    icon: <IconMapPin />,
    label: 'Visit Us',
    value: '123 Botanical Lane, Portland OR',
    note: 'By appointment only',
  },
  {
    icon: <IconClock />,
    label: 'Live Chat',
    value: 'Available on the site',
    note: 'Avg response: 3 minutes',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button
        className="faq-question"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className="faq-chevron"><IconChevron open={open} /></span>
      </button>
      <div className="faq-answer" aria-hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.subject) e.subject = 'Please select a subject'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  return (
    <div className="contact">

      {/* ===== PAGE HERO ===== */}
      <section className="page-hero contact-hero">
        <div className="container page-hero__inner">
          <span className="badge">We're Here to Help</span>
          <h1 className="page-hero__title">Get in Touch</h1>
          <p className="page-hero__sub">
            Questions about ingredients, your order, or your skin? Our team
            of clean beauty specialists is always happy to help.
          </p>
        </div>
      </section>

      {/* ===== CONTACT METHODS ===== */}
      <section className="section-sm contact-methods-section">
        <div className="container contact-methods">
          {contactMethods.map(({ icon, label, value, note }) => (
            <div key={label} className="contact-method">
              <div className="contact-method__icon">{icon}</div>
              <div>
                <h3 className="contact-method__label">{label}</h3>
                <p className="contact-method__value">{value}</p>
                <p className="contact-method__note">{note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section className="section contact-form-section">
        <div className="container contact-layout">

          {/* Form */}
          <div className="contact-form-col">
            <div className="section-header">
              <span className="badge">Send a Message</span>
              <h2 className="section-title">We'd Love to Hear from You</h2>
              <p className="section-subtitle">
                Whether it's a product question, feedback, or a wholesale enquiry — drop us a note.
              </p>
              <div className="divider" />
            </div>

            {submitted ? (
              <div className="form-success">
                <div className="form-success__icon" aria-hidden="true">✓</div>
                <h3>Message received!</h3>
                <p>Thanks, {form.name}. We'll get back to you at {form.email} within 24 hours.</p>
                <button
                  className="btn btn-outline"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                {/* Row: name + email */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`form-input${errors.name ? ' error' : ''}`}
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-input${errors.email ? ' error' : ''}`}
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    className={`form-input form-select${errors.subject ? ' error' : ''}`}
                    value={form.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a topic...</option>
                    <option value="product">Product Question</option>
                    <option value="order">Order / Shipping</option>
                    <option value="return">Returns & Refunds</option>
                    <option value="skin">Skin Advice</option>
                    <option value="wholesale">Wholesale Enquiry</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <span className="form-error">{errors.subject}</span>}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className={`form-input form-textarea${errors.message ? ' error' : ''}`}
                    placeholder="Tell us how we can help..."
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                  <span className="form-char-count">{form.message.length} chars</span>
                </div>

                {/* Consent */}
                <label className="form-checkbox">
                  <input type="checkbox" required />
                  <span>I agree to the Purelix <a href="#" className="form-link">Privacy Policy</a> and consent to being contacted regarding my enquiry.</span>
                </label>

                <button type="submit" className="btn btn-primary btn-lg form-submit">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Sidebar info */}
          <div className="contact-sidebar">
            <div className="contact-sidebar__card">
              <h3>Before You Write</h3>
              <p>You might find a quick answer in our FAQ section below. We've covered our most common questions there.</p>
            </div>

            <div className="contact-sidebar__card">
              <h3>Order Support</h3>
              <p>For the fastest help with an order, have your order number ready. You'll find it in your confirmation email.</p>
            </div>

            <div className="contact-sidebar__card">
              <h3>Skin Consultations</h3>
              <p>Book a free 15-minute video call with one of our trained skin specialists. Available Monday–Friday.</p>
              <button className="btn btn-outline" style={{ marginTop: '12px' }}>
                Book a Call
              </button>
            </div>

            <div className="contact-sidebar__social">
              <h4>Follow Us</h4>
              <div className="sidebar-social-links">
                {['Instagram', 'Facebook', 'Pinterest', 'TikTok'].map((s) => (
                  <a key={s} href="#" className="sidebar-social-link">
                    <span className="sidebar-social-initial">{s[0]}</span>
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header centered">
            <span className="badge">Quick Answers</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you want to know about our products, ingredients, and policies.
            </p>
            <div className="divider centered" />
          </div>
          <div className="faq-list">
            {faqs.map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
