# Purelix – Clean Beauty & Wellness

A complete React + Vite + React Router website for Purelix, a clean health and skincare brand focused on natural ingredients.

## Tech Stack

- **React 18** – UI library
- **Vite 5** – Build tool and dev server
- **React Router DOM v6** – Client-side routing

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, pillars, bestsellers, ingredient spotlight, reviews, free sample CTA |
| `/about` | About | Brand story timeline, manifesto, certifications, environmental commitment |
| `/products` | Products | Face Care (4), Body Care (3), Wellness Supplements (3) with interactive cart |
| `/contact` | Contact | Contact form with validation, contact methods, FAQ accordion |

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Sticky responsive navbar with hamburger menu
│   ├── Navbar.css
│   ├── Footer.jsx      # Newsletter, links, certifications, social
│   └── Footer.css
├── pages/
│   ├── Home.jsx        # Landing page
│   ├── Home.css
│   ├── About.jsx       # Brand story
│   ├── About.css
│   ├── Products.jsx    # Product catalogue with filter tabs
│   ├── Products.css
│   ├── Contact.jsx     # Contact form + FAQ
│   └── Contact.css
├── App.jsx             # Route configuration
├── App.css
├── index.css           # Global styles, CSS variables, utilities
└── main.jsx            # Entry point
```

## Brand Colours

| Name | Hex |
|------|-----|
| Forest Green | `#2d6a4f` |
| Dark Green | `#1b4332` |
| Medium Green | `#74c69d` |
| Mint / Light Green | `#d8f3dc` |
| White | `#ffffff` |

## Features

- No external image dependencies — all visuals are pure CSS
- Fully responsive at 1200px, 960px, 768px, 640px, and 560px breakpoints
- Accessible: semantic HTML, ARIA labels, focus states, keyboard navigable
- Interactive product cards with expand/collapse descriptions
- Filterable product catalogue by category
- Working contact form with client-side validation
- Accordion FAQ section
- Sticky navbar with scroll-aware styling and mobile drawer
- Newsletter subscription forms
- Free sample CTA with email capture
