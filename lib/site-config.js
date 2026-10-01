/**
 * lib/site-config.js
 * Single source of truth for all brand, legal, and contact information.
 * Used by: footer, contact page, structured data (JSON-LD), metadata, schema.
 *
 * ⚠️  Fields marked TODO_OWNER must be supplied by the site owner before
 *     they can appear in public-facing copy or schema markup.
 */

const siteConfig = {
  // ── Brand ──────────────────────────────────────────────────────
  brandName: 'Embra',
  legalName: 'Embra Technologies',
  tagline: 'Custom Websites for Home Service Businesses',
  description:
    'Custom-built websites, local SEO, and digital identity for home service businesses — handymen, tree services, auto body shops, plumbers, roofers, HVAC, and landscapers.',
  foundingYear: 2024,

  // ── URLs ───────────────────────────────────────────────────────
  siteUrl: 'https://www.embratechnologies.org',
  logo: '/images/logo.png',        // relative to public/ — used only in JSON-LD (Organization/publisher logo); was '/logo.svg', which does not exist
  ogImage: '/opengraph-image.jpg',  // 1200×630

  // ── Contact ────────────────────────────────────────────────────
  email: 'sales@embratechnologies.org',
  phone: '+1-212-207-1152',
  phoneDisplay: '+1 (212) 207-1152',

  // ── Address (optional — shown in footer & schema when present) ─
  address: {
    street: '1969 51st St',
    city: 'Brooklyn',
    state: 'NY',
    zip: '11204',
    country: 'US',
    countryName: 'United States',
  },

  // ── Hours ──────────────────────────────────────────────────────
  hours: 'Mo-Fr 09:00-18:00',        // schema-compatible
  hoursDisplay: 'Mon–Fri, 9 am – 6 pm EST',

  // ── Social / sameAs (used in Organization schema) ──────────────
  social: {
    linkedin: 'https://linkedin.com/company/embratechnologies',
    twitter: 'https://twitter.com/embratech',
    // TODO_OWNER: add GitHub, Facebook, Instagram, YouTube if applicable
  },

  // ── Service areas ──────────────────────────────────────────────
  serviceAreas: [
    { name: 'Brooklyn, NY', slug: 'brooklyn' },
    { name: 'Los Angeles, CA', slug: 'los-angeles' },
    { name: 'Chicago, IL', slug: 'chicago' },
    { name: 'Alaska', slug: 'alaska' },
  ],

  // ── Proof flags — set to true ONLY when owner supplies evidence ─
  proof: {
    rank1Google: false,       // "Rank #1 Google" claim
    leads14850: false,        // "14,850+ leads" claim
    traffic280: false,        // "+280% traffic" claim
    pagespeed99: true,        // Verifiable via public PageSpeed report
  },

  // ── Author (blog) ─────────────────────────────────────────────
  author: {
    name: 'Md Bilaal Rahman Ali',
    role: 'Founder & Lead Developer',
    slug: 'bilaal-rahman-ali',
    bio: 'TODO_OWNER',        // Short author bio (2-3 sentences) — provide when ready
    image: null,              // Path to author headshot or null
    twitter: null,            // @handle for twitter:creator
  },
};

export default siteConfig;
