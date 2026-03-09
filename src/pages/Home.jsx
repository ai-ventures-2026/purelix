import { Link } from 'react-router-dom'
import './Home.css'

/* ---- SVG Icons ---- */
const IconLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
)

const IconFlask = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 3h6l1 9H8L9 3z"/>
    <path d="M6.7 15.8C5.6 17.4 5 18.6 5 20a7 7 0 0 0 14 0c0-1.4-.6-2.6-1.7-4.2L15 12H9l-2.3 3.8z"/>
    <line x1="12" y1="3" x2="12" y2="12"/>
  </svg>
)

const IconRecycle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/>
    <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/>
    <path d="m14 16-3 3 3 3"/>
    <path d="M8.293 13.596 7.196 9.5 3.1 10.598"/>
    <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"/>
    <path d="m13.378 9.633 4.096 1.098 1.097-4.096"/>
  </svg>
)

const IconHeart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{width:'16px',height:'16px'}}>
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

/* ---- Data ---- */
const pillars = [
  {
    icon: <IconLeaf />,
    title: 'Clean Formula',
    desc: 'Zero harmful chemicals. Every ingredient is carefully vetted against 1,300+ banned substances.',
  },
  {
    icon: <IconRecycle />,
    title: 'Sustainably Sourced',
    desc: 'We partner with certified ethical farms to ensure environmental care from seed to shelf.',
  },
  {
    icon: <IconHeart />,
    title: 'Cruelty-Free',
    desc: "Never tested on animals. Certified by Leaping Bunny and PETA\u2019s Beauty Without Bunnies.",
  },
  {
    icon: <IconFlask />,
    title: 'Science-Backed',
    desc: 'Formulated by dermatologists and biochemists who believe nature and science belong together.',
  },
]

const bestsellers = [
  {
    name: 'Radiance Vitamin C Serum',
    tagline: 'Brightening & anti-aging',
    price: '$48',
    highlight: 'Bestseller',
    gradient: 'linear-gradient(135deg, #d8f3dc 0%, #b7e4c7 100%)',
    icon: '✦',
  },
  {
    name: 'Deep Hydra Cream',
    tagline: '72-hour moisture lock',
    price: '$54',
    highlight: 'New Formula',
    gradient: 'linear-gradient(135deg, #b7e4c7 0%, #74c69d 100%)',
    icon: '◈',
  },
  {
    name: 'Calm & Restore Serum',
    tagline: 'Sensitive skin relief',
    price: '$42',
    highlight: 'Top Rated',
    gradient: 'linear-gradient(135deg, #d8f3dc 0%, #95d5b2 100%)',
    icon: '◉',
  },
]

const ingredients = [
  {
    name: 'Bakuchiol',
    origin: 'Psoralea corylifolia plant',
    benefit: 'A natural retinol alternative that reduces fine lines without irritation. Clinically proven to be as effective as retinol for skin renewal.',
    color: '#2d6a4f',
  },
  {
    name: 'Sea Buckthorn',
    origin: 'Himalayan coastal shrub',
    benefit: 'Rich in omega-7, vitamins C & E. Deeply nourishes, protects against oxidative stress, and restores the skin barrier naturally.',
    color: '#1b4332',
  },
  {
    name: 'Blue Tansy',
    origin: 'Moroccan wildflower',
    benefit: 'Contains azulene, a potent anti-inflammatory compound that visibly calms redness and reactive skin within 28 days of use.',
    color: '#52b788',
  },
]

const reviews = [
  {
    name: 'Sophia M.',
    location: 'Portland, OR',
    rating: 5,
    text: 'I have been using the Vitamin C Serum for three months and my skin has genuinely never looked better. The texture is luxurious and it layers perfectly under SPF.',
    product: 'Radiance Vitamin C Serum',
  },
  {
    name: 'James T.',
    location: 'Austin, TX',
    rating: 5,
    text: 'Finally a moisturizer that doesn\'t break me out. The Deep Hydra Cream is lightweight but my skin stays hydrated all day. I converted my whole family.',
    product: 'Deep Hydra Cream',
  },
  {
    name: 'Amara K.',
    location: 'Brooklyn, NY',
    rating: 5,
    text: 'The Calm & Restore Serum is a game-changer for my rosacea-prone skin. Visible difference in redness after two weeks. I trust every ingredient on the list.',
    product: 'Calm & Restore Serum',
  },
]

/* ---- Stars ---- */
function Stars({ count = 5 }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="star"><IconStar /></span>
      ))}
    </div>
  )
}

/* ---- Component ---- */
export default function Home() {
  return (
    <div className="home">

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__bg-leaves" aria-hidden="true">
          <span className="leaf leaf-1" />
          <span className="leaf leaf-2" />
          <span className="leaf leaf-3" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="badge">Certified Clean Beauty</span>
            <h1 className="hero__headline">
              Pure Ingredients.<br />
              <em>Real Results.</em>
            </h1>
            <p className="hero__sub">
              We believe what goes on your body matters as much as what goes in it.
              Every Purelix formula is transparent, traceable, and truly effective.
            </p>
            <div className="hero__actions">
              <Link to="/products" className="btn btn-primary btn-lg">
                Explore Products <IconArrow />
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg">
                Our Story
              </Link>
            </div>
            <div className="hero__trust">
              <span>🌿 100% Natural</span>
              <span>🧬 Dermatologist Tested</span>
              <span>♻️ Sustainable Packaging</span>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__bottle hero__bottle--main">
              <div className="bottle-shape">
                <div className="bottle-cap" />
                <div className="bottle-neck" />
                <div className="bottle-body">
                  <span className="bottle-label">PURELIX</span>
                  <span className="bottle-sub">SERUM</span>
                </div>
              </div>
            </div>
            <div className="hero__bottle hero__bottle--secondary">
              <div className="bottle-shape bottle-shape--sm">
                <div className="bottle-cap bottle-cap--sm" />
                <div className="bottle-body bottle-body--sm">
                  <span className="bottle-label">PURELIX</span>
                </div>
              </div>
            </div>
            <div className="hero__orb hero__orb--1" />
            <div className="hero__orb hero__orb--2" />
          </div>
        </div>

        <div className="hero__scroll-hint" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section className="stats-strip">
        <div className="container stats-strip__inner">
          {[
            { num: '500K+', label: 'Happy customers' },
            { num: '47', label: 'Active natural ingredients' },
            { num: '0', label: 'Harmful chemicals' },
            { num: '100%', label: 'Cruelty-free certified' },
          ].map(({ num, label }) => (
            <div key={label} className="stat-item">
              <span className="stat-num">{num}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHAT WE BELIEVE ===== */}
      <section className="section beliefs">
        <div className="container">
          <div className="section-header centered">
            <span className="badge">Our Principles</span>
            <h2 className="section-title">What We Believe</h2>
            <p className="section-subtitle">
              These four commitments guide every decision we make — from sourcing to shelf.
            </p>
            <div className="divider centered" />
          </div>
          <div className="pillars-grid">
            {pillars.map(({ icon, title, desc }) => (
              <div key={title} className="pillar-card">
                <div className="pillar-icon">{icon}</div>
                <h3 className="pillar-title">{title}</h3>
                <p className="pillar-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BESTSELLERS ===== */}
      <section className="section bestsellers">
        <div className="container">
          <div className="section-header">
            <span className="badge">Customer Favorites</span>
            <h2 className="section-title">Our Bestsellers</h2>
            <p className="section-subtitle">
              The products our community comes back to again and again.
            </p>
            <div className="divider" />
          </div>
          <div className="products-grid">
            {bestsellers.map(({ name, tagline, price, highlight, gradient, icon }) => (
              <div key={name} className="product-card">
                <div className="product-card__visual" style={{ background: gradient }}>
                  <span className="product-card__icon" aria-hidden="true">{icon}</span>
                  <span className="product-card__highlight">{highlight}</span>
                </div>
                <div className="product-card__body">
                  <span className="product-card__natural-badge">100% Natural</span>
                  <h3 className="product-card__name">{name}</h3>
                  <p className="product-card__tagline">{tagline}</p>
                  <div className="product-card__footer">
                    <span className="product-card__price">{price}</span>
                    <button className="btn btn-primary product-card__btn">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bestsellers__cta">
            <Link to="/products" className="btn btn-outline btn-lg">
              View All Products <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== INGREDIENT SPOTLIGHT ===== */}
      <section className="section ingredients">
        <div className="container">
          <div className="section-header centered">
            <span className="badge">Transparency First</span>
            <h2 className="section-title">Ingredient Spotlight</h2>
            <p className="section-subtitle">
              We believe you deserve to know exactly what's in your products — and why it works.
            </p>
            <div className="divider centered" />
          </div>
          <div className="ingredients-grid">
            {ingredients.map(({ name, origin, benefit, color }) => (
              <div key={name} className="ingredient-card">
                <div className="ingredient-card__orb" style={{ background: color }} aria-hidden="true" />
                <div className="ingredient-card__content">
                  <span className="ingredient-card__origin">{origin}</span>
                  <h3 className="ingredient-card__name">{name}</h3>
                  <p className="ingredient-card__benefit">{benefit}</p>
                  <Link to="/about" className="ingredient-card__link">
                    Learn more <IconArrow />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="section reviews">
        <div className="container">
          <div className="section-header centered">
            <span className="badge">Real People, Real Results</span>
            <h2 className="section-title">What Our Community Says</h2>
            <p className="section-subtitle">
              Over 500,000 customers trust Purelix with their skin. Here's what some of them have to say.
            </p>
            <div className="divider centered" />
          </div>
          <div className="reviews-grid">
            {reviews.map(({ name, location, rating, text, product }) => (
              <div key={name} className="review-card">
                <Stars count={rating} />
                <blockquote className="review-card__text">"{text}"</blockquote>
                <div className="review-card__footer">
                  <div className="review-card__author">
                    <div className="review-card__avatar" aria-hidden="true">
                      {name.charAt(0)}
                    </div>
                    <div>
                      <p className="review-card__name">{name}</p>
                      <p className="review-card__location">{location}</p>
                    </div>
                  </div>
                  <span className="review-card__product">{product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FREE SAMPLE CTA ===== */}
      <section className="sample-cta">
        <div className="container sample-cta__inner">
          <div className="sample-cta__leaves" aria-hidden="true">
            <span className="cta-leaf cta-leaf-1" />
            <span className="cta-leaf cta-leaf-2" />
          </div>
          <div className="sample-cta__content">
            <span className="badge" style={{ background: 'rgba(216,243,220,0.15)', color: '#d8f3dc', borderColor: 'rgba(116,198,157,0.3)' }}>
              Limited Time Offer
            </span>
            <h2 className="sample-cta__title">Try Purelix for Free</h2>
            <p className="sample-cta__sub">
              Request your complimentary 7-day trial kit — our three bestsellers in travel sizes,
              delivered to your door. No commitment, just pure results.
            </p>
            <form
              className="sample-cta__form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                aria-label="Email for free sample"
                className="sample-cta__input"
                required
              />
              <button type="submit" className="btn btn-lg" style={{ background: 'var(--white)', color: 'var(--green-dark)', fontWeight: 700 }}>
                Claim Free Sample
              </button>
            </form>
            <p className="sample-cta__fine">No credit card required. Just pay $4.95 shipping. Offer valid while supplies last.</p>
          </div>
        </div>
      </section>

    </div>
  )
}
