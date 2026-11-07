// Hero background media for inner pages (2026-11-08), read by components/PageHeader.jsx by route.
// `image` = optimized image set in public/images/optimized (stock-* trade photos or hero-* photos from
// scripts/fetch-pexels.mjs). `video` = optional public/videos/<name>.mp4, shown on desktop only, after load.
// The homepage is intentionally not listed (it keeps its own hero).
export const HERO_MEDIA = {
  '/services': { image: 'hero-services', video: 'video-services' },
  '/services/web-design': { image: 'stock-webdesign' },
  '/services/local-seo': { image: 'stock-localseo', video: 'video-localseo' },
  // 2026-11-08 review: the "web design" video pick showed a card payment on a laptop, which fits integrations (payments) better.
  '/services/website-integrations': { image: 'stock-integrations', video: 'video-integrations' },
  '/services/care-plan': { image: 'stock-growth' },
  '/pricing': { image: 'hero-pricing' },
  '/portfolio': { image: 'hero-portfolio' },
  '/blog': { image: 'hero-blog' },
  '/about': { image: 'hero-about' },
  '/contact': { image: 'hero-contact' },
  '/niches': { image: 'hero-industries' },
  '/niches/plumber-website-design': { image: 'stock-plumber' },
  '/niches/hvac-website-design': { image: 'stock-hvac' },
  '/niches/roofing-website-design': { image: 'stock-roofing' },
  '/niches/tree-service-website-design': { image: 'stock-tree' },
  '/niches/web-design-for-handyman-businesses': { image: 'stock-handyman' },
  '/niches/landscaping-website-design': { image: 'stock-landscaping' },
  '/niches/auto-body-shop-website-design': { image: 'stock-autobody' },
  '/locations/los-angeles': { image: 'hero-los-angeles' },
  '/locations/chicago': { image: 'hero-chicago' },
  '/locations/alaska': { image: 'hero-alaska' },
  '/locations/anchorage': { image: 'hero-anchorage' },
  '/locations/fairbanks': { image: 'hero-fairbanks' },
  '/locations/juneau': { image: 'hero-juneau' },
  '/locations/denver': { image: 'hero-denver' },
  '/locations/spokane': { image: 'hero-spokane' },
  '/locations/phoenix': { image: 'hero-phoenix' },
  '/locations/brooklyn': { image: 'hero-brooklyn' },
};

// Images that have 480/720/960 versions plus 1600 (stock-* trade photos also have all four).
export const heroSrcSet = (name, ext) =>
  [480, 720, 960, 1600].map((w) => `/images/optimized/${name}-${w}.${ext} ${w}w`).join(', ');
