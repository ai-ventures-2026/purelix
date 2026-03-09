import { useState } from 'react'
import './Products.css'

/* ---- Product data ---- */
const categories = [
  {
    id: 'face',
    label: 'Face Care',
    tagline: 'Targeted formulas for your most visible skin.',
    products: [
      {
        id: 'vc-serum',
        name: 'Radiance Vitamin C Serum',
        tagline: 'Brightens, firms, fades dark spots',
        price: 48,
        rating: 4.9,
        reviews: 2841,
        desc: '15% stabilised Vitamin C with ferulic acid and bakuchiol. Clinically proven to reduce hyperpigmentation in 4 weeks.',
        tags: ['Brightening', 'Anti-Aging', 'All Skin Types'],
        gradient: 'linear-gradient(135deg, #d8f3dc 0%, #b7e4c7 100%)',
        glyph: '✦',
        badge: 'Bestseller',
      },
      {
        id: 'hydra-cream',
        name: 'Deep Hydra Cream',
        tagline: '72-hour moisture lock barrier repair',
        price: 54,
        rating: 4.8,
        reviews: 1923,
        desc: 'Sea buckthorn, ceramides, and hyaluronic acid triplex. Restores the skin barrier and locks in moisture for three full days.',
        tags: ['Hydrating', 'Barrier Repair', 'Dry Skin'],
        gradient: 'linear-gradient(135deg, #b7e4c7 0%, #74c69d 100%)',
        glyph: '◈',
        badge: 'New Formula',
      },
      {
        id: 'cleansing-gel',
        name: 'Pure Cleansing Gel',
        tagline: 'Deep clean without stripping moisture',
        price: 28,
        rating: 4.7,
        reviews: 1456,
        desc: 'Amino acid-based surfactants with aloe vera and green tea extract. Removes 99.9% of impurities while maintaining your skin\'s natural pH.',
        tags: ['Cleansing', 'Gentle', 'All Skin Types'],
        gradient: 'linear-gradient(135deg, #d8f3dc 0%, #95d5b2 100%)',
        glyph: '◉',
        badge: '',
      },
      {
        id: 'eye-balm',
        name: 'Revive Eye Balm',
        tagline: 'Depuffs, brightens, reduces dark circles',
        price: 36,
        rating: 4.8,
        reviews: 987,
        desc: 'Caffeine, blue tansy, and peptide complex. Reduces puffiness in 10 minutes and diminishes dark circles with consistent use.',
        tags: ['Eye Care', 'Anti-Puff', 'Sensitive'],
        gradient: 'linear-gradient(135deg, #95d5b2 0%, #52b788 100%)',
        glyph: '◇',
        badge: 'Top Rated',
      },
    ],
  },
  {
    id: 'body',
    label: 'Body Care',
    tagline: 'Nourish your skin from head to toe.',
    products: [
      {
        id: 'body-butter',
        name: 'Shea Body Butter',
        tagline: 'Rich, fast-absorbing total body nourishment',
        price: 38,
        rating: 4.9,
        reviews: 1654,
        desc: 'Unrefined shea, mango butter, and jojoba oil. Whipped to a lightweight consistency that absorbs instantly with zero grease.',
        tags: ['Moisturising', 'All Body', 'Fast Absorb'],
        gradient: 'linear-gradient(135deg, #d8f3dc 0%, #b7e4c7 100%)',
        glyph: '✦',
        badge: 'Bestseller',
      },
      {
        id: 'body-scrub',
        name: 'Green Tea Body Scrub',
        tagline: 'Exfoliate and brighten with antioxidants',
        price: 32,
        rating: 4.7,
        reviews: 893,
        desc: 'Sugar crystals, green tea extract, and vitamin E oil. Removes dead skin cells while antioxidants protect against environmental damage.',
        tags: ['Exfoliating', 'Brightening', 'Weekly Use'],
        gradient: 'linear-gradient(135deg, #b7e4c7 0%, #52b788 100%)',
        glyph: '◈',
        badge: '',
      },
      {
        id: 'hand-cream',
        name: 'Botanical Hand Cream',
        tagline: 'Intense repair for stressed hands',
        price: 22,
        rating: 4.8,
        reviews: 1102,
        desc: 'Calendula, chamomile, and beeswax complex. Repairs cracked, dry skin overnight. Ideal for frequent hand-washers and outdoor workers.',
        tags: ['Repairing', 'Hand Care', 'Intensive'],
        gradient: 'linear-gradient(135deg, #d8f3dc 0%, #74c69d 100%)',
        glyph: '◉',
        badge: 'New',
      },
    ],
  },
  {
    id: 'wellness',
    label: 'Wellness Supplements',
    tagline: 'Beauty that starts from within.',
    products: [
      {
        id: 'collagen',
        name: 'Marine Collagen Boost',
        tagline: 'Types I & III peptides + hyaluronic acid',
        price: 58,
        rating: 4.9,
        reviews: 2214,
        desc: 'Wild-caught marine collagen peptides with vitamin C cofactors. Clinically shown to improve skin elasticity by 23% in 8 weeks.',
        tags: ['Collagen', 'Anti-Aging', 'Daily'],
        gradient: 'linear-gradient(135deg, #d8f3dc 0%, #b7e4c7 100%)',
        glyph: '✦',
        badge: 'Bestseller',
      },
      {
        id: 'glow-blend',
        name: 'Inner Glow Blend',
        tagline: 'Adaptogens, vitamins + antioxidant herbs',
        price: 46,
        rating: 4.7,
        reviews: 1089,
        desc: 'Ashwagandha, astaxanthin, biotin, and turmeric. Supports stress resilience, radiant skin, and healthy hair and nails from the inside out.',
        tags: ['Adaptogens', 'Glow', 'Daily Wellness'],
        gradient: 'linear-gradient(135deg, #b7e4c7 0%, #95d5b2 100%)',
        glyph: '◈',
        badge: 'Top Rated',
      },
      {
        id: 'sleep-beauty',
        name: 'Sleep & Repair Formula',
        tagline: 'Nighttime recovery and skin renewal',
        price: 42,
        rating: 4.8,
        reviews: 745,
        desc: 'Magnesium glycinate, valerian root, and ceramide precursors. Promotes deep, restorative sleep while your body repairs and regenerates skin cells.',
        tags: ['Sleep', 'Recovery', 'Nightly'],
        gradient: 'linear-gradient(135deg, #95d5b2 0%, #52b788 100%)',
        glyph: '◇',
        badge: 'New',
      },
    ],
  },
]

/* ---- Micro-components ---- */
const StarRating = ({ rating }) => {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  return (
    <div className="prod-stars" aria-label={`${rating} stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`prod-star ${i < full ? 'filled' : i === full && half ? 'half' : 'empty'}`}
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

/* ---- Main Component ---- */
export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [cart, setCart] = useState([])
  const [toast, setToast] = useState(null)

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id)
      if (exists) return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
    setToast(`${product.name} added to cart`)
    setTimeout(() => setToast(null), 2500)
  }

  const visibleCategories = activeCategory === 'all'
    ? categories
    : categories.filter((c) => c.id === activeCategory)

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0)

  return (
    <div className="products-page">

      {/* ===== PAGE HERO ===== */}
      <section className="page-hero products-hero">
        <div className="container products-hero__inner">
          <div>
            <span className="badge">100% Natural</span>
            <h1 className="page-hero__title">Clean Beauty,<br />Every Category</h1>
            <p className="page-hero__sub">
              Every product in our range is formulated without compromise —
              transparent ingredients, traceable sourcing, and proven results.
            </p>
          </div>
          {totalItems > 0 && (
            <div className="products-cart-preview">
              <span className="products-cart-count">{totalItems}</span>
              <span className="products-cart-label">
                item{totalItems !== 1 ? 's' : ''} in cart
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ===== FILTER TABS ===== */}
      <div className="products-filter">
        <div className="container products-filter__inner">
          <button
            className={`filter-tab${activeCategory === 'all' ? ' active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Products
          </button>
          {categories.map(({ id, label }) => (
            <button
              key={id}
              className={`filter-tab${activeCategory === id ? ' active' : ''}`}
              onClick={() => setActiveCategory(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ===== PRODUCT CATEGORIES ===== */}
      <div className="products-content">
        {visibleCategories.map(({ id, label, tagline, products }) => (
          <section key={id} className="section product-category">
            <div className="container">
              <div className="product-category__header section-header">
                <h2 className="section-title">{label}</h2>
                <p className="section-subtitle">{tagline}</p>
                <div className="divider" />
              </div>
              <div className="product-category__grid">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} onAdd={addToCart} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ===== PROMISE STRIP ===== */}
      <section className="promise-strip">
        <div className="container promise-strip__inner">
          {[
            { icon: '🌿', text: '100% Natural Ingredients' },
            { icon: '🚚', text: 'Free shipping over $60' },
            { icon: '↩', text: '30-day returns' },
            { icon: '🌍', text: 'Carbon-neutral delivery' },
          ].map(({ icon, text }) => (
            <div key={text} className="promise-item">
              <span className="promise-icon">{icon}</span>
              <span className="promise-text">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TOAST ===== */}
      {toast && (
        <div className="cart-toast" role="status" aria-live="polite">
          <span className="cart-toast__check">✓</span>
          {toast}
        </div>
      )}

    </div>
  )
}

/* ---- Product Card ---- */
function ProductCard({ product, onAdd }) {
  const { name, tagline, price, rating, reviews, desc, tags, gradient, glyph, badge } = product
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="prod-card">
      {/* Visual */}
      <div className="prod-card__visual" style={{ background: gradient }}>
        <span className="prod-card__glyph" aria-hidden="true">{glyph}</span>
        {badge && <span className="prod-card__badge">{badge}</span>}
        <span className="prod-card__natural">100% natural</span>
      </div>

      {/* Body */}
      <div className="prod-card__body">
        {/* Tags */}
        <div className="prod-card__tags">
          {tags.map((t) => (
            <span key={t} className="prod-tag">{t}</span>
          ))}
        </div>

        {/* Info */}
        <h3 className="prod-card__name">{name}</h3>
        <p className="prod-card__tagline">{tagline}</p>

        {/* Rating */}
        <div className="prod-card__rating">
          <StarRating rating={rating} />
          <span className="prod-card__rating-num">{rating}</span>
          <span className="prod-card__rating-count">({reviews.toLocaleString()})</span>
        </div>

        {/* Expandable desc */}
        <div className={`prod-card__desc${expanded ? ' expanded' : ''}`}>
          <p>{desc}</p>
        </div>
        <button
          className="prod-card__toggle"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? 'Less info ↑' : 'More info ↓'}
        </button>

        {/* Footer */}
        <div className="prod-card__footer">
          <div>
            <span className="prod-card__price">${price}</span>
            <span className="prod-card__per"> / 30ml</span>
          </div>
          <button
            className="btn btn-primary prod-card__add"
            onClick={() => onAdd(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
