# Embra Technologies — Next.js + GSAP + Lenis + Three.js

A full rebuild of the Embra Technologies landing page with:

- **Next.js 14 (App Router)** — componentized sections, `next/font` typography
- **Three.js** — hero WebGL scene: dual wireframe icosahedra, additive core, glow sprite, 3 tilted rings and ~850 particles streaming into the center void, with mouse parallax
- **GSAP + ScrollTrigger** — 3.2s hero intro (orb first, then staggered word reveal), scroll-triggered section reveals, growing analytics bars and counters
- **Lenis** — buttery smooth scrolling, synced to the GSAP ticker
- **Blueprint Genesis (01/05)** — the SVG stroke-draw animation lives in the *Custom Website Design & Development* service card, auto-plays on scroll-in and has a replay button
- **5 royal palettes** — Cosmic Spectrum switcher (persisted to localStorage), recolors both CSS and the WebGL scene

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
app/
  layout.jsx        fonts, metadata, providers
  page.jsx          section composition
  globals.css       design tokens (5 themes) + all styles
components/
  ScrollManager.jsx Lenis + global reveal triggers
  ThemeProvider.jsx theme context (CSS vars + WebGL sync)
  Navbar.jsx        glass navbar, auto-hide, mobile menu
  Hero.jsx          Three.js intro + text reveal
  three/HeroScene.js the WebGL scene factory
  Showcase.jsx      growing bar chart + metric counters
  Marquee.jsx       infinite tech ribbon
  Services.jsx      4 bento cards incl. Blueprint Genesis
  Process.jsx / WhyUs.jsx / Testimonials.jsx / Faq.jsx
  Cta.jsx / Footer.jsx / FabNav.jsx / ThemeSwitcher.jsx
```
