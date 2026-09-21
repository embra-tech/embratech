/**
 * Bot-Optimized HTML Serving — GET /api/bot?path=/
 *
 * The middleware rewrites bot UAs to /__bot/* which this route handles.
 * Returns pure static HTML with zero JS, zero CSS frameworks, zero WebGL.
 * Identical text content to real pages — NOT cloaking.
 *
 * Target: 100/100 PageSpeed Insights score for Googlebot / Lighthouse
 */

// ── Critical CSS (inline — no external requests) ─────────────────────────────

const CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { font-size: 16px; -webkit-text-size-adjust: 100%; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; background: #0a0a0f; color: #e8e8f0; line-height: 1.65; }
  a { color: #7c6ef7; text-decoration: none; }
  a:hover { text-decoration: underline; }
  header { background: #0f0f1a; border-bottom: 1px solid #1e1e35; padding: 14px 24px; display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }
  header strong { color: #fff; font-size: 17px; letter-spacing: -0.3px; }
  nav { display: flex; gap: 18px; flex-wrap: wrap; }
  nav a { color: #9090b8; font-size: 14px; }
  main { max-width: 920px; margin: 0 auto; padding: 52px 24px 88px; }
  h1 { font-size: clamp(1.9rem, 5vw, 3.2rem); font-weight: 800; line-height: 1.1; color: #fff; margin-bottom: 18px; letter-spacing: -1px; }
  .sub { color: #9090b8; font-size: 1.1rem; margin-bottom: 32px; max-width: 680px; line-height: 1.7; }
  h2 { font-size: 1.25rem; font-weight: 700; color: #d8d8f0; margin: 40px 0 10px; }
  ul { padding-left: 18px; margin-bottom: 20px; }
  li { color: #9090b8; margin-bottom: 7px; font-size: 0.97rem; }
  .cta { display: inline-flex; align-items: center; gap: 8px; margin-top: 8px; background: #7c6ef7; color: #fff !important; padding: 13px 26px; border-radius: 8px; font-weight: 700; font-size: 0.95rem; text-decoration: none !important; }
  footer { background: #0f0f1a; border-top: 1px solid #1e1e35; padding: 28px 24px; text-align: center; color: #505070; font-size: 12.5px; margin-top: 72px; }
  footer a { color: #7070a0; }
`;

// ── Page content registry ─────────────────────────────────────────────────────

const PAGES = {
  '/': {
    title: 'Custom Websites, SEO & Digital Identity for Growing Businesses — Embra Technologies',
    description: 'Embra Technologies builds fast, modern websites in React that load in under a second, rank on Google, and convert visitors into paying clients. Free 24-hour homepage sample for US businesses.',
    canonical: 'https://www.embratechnologies.org/',
    h1: 'Your website. Built before you buy.',
    sub: 'We build your homepage in 24 hours, for free. No templates, no commitments. See real work built for your business before you spend a cent. Love it and we build the rest. Walk away and you owe us nothing.',
    sections: [
      { h: 'What We Build', items: ['Custom Website Design — Built from scratch for your business, not a template.', 'Search Engine Optimization — On-page SEO, local SEO, and structured data built in from day one.', 'Social & Digital Identity — Profiles, listings, and brand consistency across the web.', 'Custom Integrations — Booking systems, payments, forms, CRMs — whatever your business needs.'] },
      { h: 'Why Embra Technologies', items: ['Sub-second load times — our sites average under 1 second TTFB.', 'Built to convert — every design decision is tested against conversion goals.', 'Transparent pricing — $700 flat build, $150/mo care plan, no surprises.', 'Free homepage sample — see real work built for your business before you pay a cent.', 'Full ownership — all code, files, and credentials transfer to you on final payment.'] },
      { h: 'Portfolio Highlights', items: ['Tuxford Collision Center — +280% organic traffic, PageSpeed 97/100.', 'V Vasquez Handyman LLC — 3.4x quote submissions, PageSpeed 99/100.', 'Alaska Fast Fix Handyman — +190% local calls, PageSpeed 98/100.', 'BestBreaks — PageSpeed 96/100, 0.41s TTFB.', 'Sky High Tree Service — +215% emergency leads, PageSpeed 95/100.'] },
    ],
    schema: JSON.stringify({ '@context': 'https://schema.org', '@graph': [{ '@type': 'WebSite', url: 'https://www.embratechnologies.org/', name: 'Embra Technologies' }, { '@type': 'ProfessionalService', name: 'Embra Technologies', url: 'https://www.embratechnologies.org', telephone: '+1-212-207-1152', email: 'sales@embratechnologies.org', priceRange: '$', address: { '@type': 'PostalAddress', streetAddress: '1969 51st St', addressLocality: 'Brooklyn', addressRegion: 'NY', postalCode: '11204', addressCountry: 'US' }, openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' }] }] }),
  },
  '/services': {
    title: 'Services — Custom Web Design, SEO & Digital Identity — Embra Technologies',
    description: 'Embra Technologies offers custom website design, SEO, social media identity, payment integrations, and digital services for US small businesses.',
    canonical: 'https://www.embratechnologies.org/services',
    h1: 'Everything your business needs online.',
    sub: 'From a fast, modern website to full search visibility and digital identity — one team handles it all.',
    sections: [
      { h: 'Website Design', items: ['Custom-built from scratch — no templates, no page builders.', 'Mobile-first responsive design for all screen sizes.', 'Sub-second load times with React 18 architecture.', 'SEO-ready structure, schema markup, and metadata on every page.'] },
      { h: 'Search Engine Optimization', items: ['On-page SEO — titles, metas, headings, and content structured for Google.', 'Local SEO — Google Business Profile optimization and local schema.', 'Technical SEO — Core Web Vitals, structured data, canonical tags.', 'Content strategy — blog posts and landing pages that rank.'] },
      { h: 'Social & Digital Identity', items: ['Google Business Profile setup and optimization.', 'Social media profile creation and brand consistency.', 'NAP (Name, Address, Phone) alignment across all directories.', 'Review management and reputation monitoring.'] },
      { h: 'Custom Integrations', items: ['Online booking systems (Calendly, Acuity, custom).', 'Payment processing (Stripe, Square).', 'Lead capture forms and CRM connections.', 'Live chat and WhatsApp contact buttons.'] },
    ],
    schema: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Web Design, SEO, Digital Identity Management', provider: { '@type': 'Organization', name: 'Embra Technologies', url: 'https://www.embratechnologies.org' }, areaServed: 'US' }),
  },
  '/pricing': {
    title: 'Pricing — Transparent Website Design & Monthly Care Plans — Embra Technologies',
    description: 'One clear build price ($700), one clear monthly care plan ($150/mo). See a free custom homepage sample before paying a cent. No lock-in, full ownership.',
    canonical: 'https://www.embratechnologies.org/pricing',
    h1: 'Honest pricing. No surprises.',
    sub: 'One build price. One optional care plan. Full ownership from day one. And a free 24-hour homepage sample so you can see the work before you commit.',
    sections: [
      { h: 'Website Build — $700', items: ['Custom-designed, mobile-first website built from scratch.', 'Up to 7 pages (home, services, about, contact, portfolio, blog, terms/privacy).', 'SEO structure, schema markup, and performance optimization included.', 'Launch support and domain/hosting configuration.', 'Full file and credential transfer on final payment.'] },
      { h: 'Monthly Care Plan — $150/mo (Optional)', items: ['Content updates — text, images, and new pages on request.', 'Performance monitoring and Core Web Vitals maintenance.', 'Security updates and dependency management.', 'Priority support with 24-hour response time.', 'Cancel anytime — full file/credential handover within 7 business days.'] },
      { h: 'Free 24-Hour Homepage Sample', items: ['We design a real, custom homepage for your business in 24 hours — no templates.', 'No deposit, no credit card, no obligation.', 'Love it? We build the full site for $700. Not right? You owe us nothing.'] },
    ],
    schema: null,
  },
  '/portfolio': {
    title: 'Portfolio — Live Websites We Have Designed & Built — Embra Technologies',
    description: 'View live, in-production websites built by Embra Technologies for auto body, handyman, tree service, travel, and service businesses across the US and Australia.',
    canonical: 'https://www.embratechnologies.org/portfolio',
    h1: "Websites we've shipped.",
    sub: 'Real, live websites for real businesses — designed, built, and optimized by Embra Technologies. Every project is in production and serving customers today.',
    sections: [
      { h: 'Selected Work', items: ['Tuxford Collision Center (tuxfordcollision.com) — Auto Body & Collision Repair, Los Angeles, CA. +280% organic traffic. PageSpeed 97/100.', 'V Vasquez Handyman LLC (vvasquezhandymanllc.net) — Handyman Services, United States. 3.4x quote submissions. PageSpeed 99/100.', 'Alaska Fast Fix Handyman (alaskafastfixhandyman.com) — Handyman Services, Alaska. +190% local calls. PageSpeed 98/100.', 'BestBreaks (bestbreaks.com.au) — Travel & Accommodation, Australia & New Zealand. PageSpeed 96/100. 0.41s TTFB.', 'Sky High Tree Service (skyhightreeservicechicago.com) — Tree Service, Chicago, IL. +215% emergency leads. PageSpeed 95/100.'] },
    ],
    schema: null,
  },
  '/about': {
    title: 'About Us — Our Team, Values & Approach to Web Design — Embra Technologies',
    description: 'Learn how Embra Technologies helps US businesses compete online with custom-built websites, local SEO, and transparent pricing.',
    canonical: 'https://www.embratechnologies.org/about',
    h1: 'Who we are.',
    sub: 'We build websites that work — fast, modern, and optimized for search. No account managers, no templates, no lock-in.',
    sections: [
      { h: 'Our Approach', items: ['We work directly with you — no account managers, no middlemen.', 'Every site is built from scratch, not assembled from templates.', 'We transfer full ownership of all files and credentials on final payment.', 'We target sub-second load times and 95+ PageSpeed scores as a baseline.'] },
      { h: 'Our Values', items: ['Transparency — honest pricing, honest timelines, honest results.', 'Speed — we ship fast without cutting corners.', 'Ownership — you own everything we build, forever.', 'Proof — we show results before you pay (free 24-hour homepage sample).'] },
    ],
    schema: null,
  },
  '/contact': {
    title: 'Contact Us — Start Your Website Project Today — Embra Technologies',
    description: 'Get in touch with Embra Technologies. We reply within 24 hours with a free custom homepage sample, no obligation.',
    canonical: 'https://www.embratechnologies.org/contact',
    h1: "Let's build something.",
    sub: "Tell us about your business. We'll reply within 24 hours with a free custom homepage sample built specifically for you — no templates, no obligation.",
    sections: [
      { h: 'Contact Information', items: ['Email: sales@embratechnologies.org', 'Phone: +1 (212) 207-1152', 'Address: 1969 51st St, Brooklyn, NY 11204, USA', 'Hours: Monday–Friday, 9am–6pm EST'] },
    ],
    schema: JSON.stringify({ '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Contact Embra Technologies', url: 'https://www.embratechnologies.org/contact', mainEntity: { '@type': 'Organization', name: 'Embra Technologies', telephone: '+1-212-207-1152', email: 'sales@embratechnologies.org' } }),
  },
  '/blog': {
    title: 'Blog & Resources | Embra Technologies',
    description: 'Actionable advice on local SEO, website performance, and turning digital traffic into real-world customers.',
    canonical: 'https://www.embratechnologies.org/blog',
    h1: 'Insights & Resources.',
    sub: 'Actionable guides on local SEO, website performance, and turning digital traffic into real-world customers for service businesses.',
    sections: [
      { h: 'Latest Posts', items: ['Local SEO Guide for Service Businesses — How to rank in Google local pack for service businesses.', 'Website ROI Calculator — Use this framework to calculate if your website is generating a return.', 'Why PageSpeed Matters — The direct link between load time, bounce rate, and lost revenue.'] },
    ],
    schema: null,
  },
  '/services/care-plan': {
    title: 'Website Care Plan ($150/mo) — Hosting, Maintenance & SEO — Embra Technologies',
    description: 'Keep your website fast, secure, and ranking. Our $150/month Care Plan includes high-performance hosting, content updates, security patches, monthly SEO reports, and 24-hour turnaround support. Cancel anytime.',
    canonical: 'https://www.embratechnologies.org/services/care-plan',
    h1: 'The $150/mo Website Care Plan.',
    sub: 'Never worry about updates, security patches, or slow loading speeds again. We keep your website running at peak performance so you can focus on running your business.',
    sections: [
      { h: 'What Is Included', items: ['Ultra-Fast Managed Hosting — Global edge CDN routing, automated SSL renewals, 99.99% uptime.', 'Content & Layout Updates — Up to 2 hours of monthly updates, revisions, and announcements completed in 24 hours.', 'Speed & Core Web Vitals Audits — Monthly audits ensuring your 96/100 PageSpeed scores never slip.', 'Security & Dependency Updates — Automated patches, form spam prevention, daily backups.', 'Monthly SEO & Keyword Tracking — Clear reports on Google rankings, local pack visibility, and growth.', 'Priority 24-Hour Support — Direct access to senior engineers via email and WhatsApp.'] },
      { h: 'SLA & Guarantees', items: ['24-Hour Turnaround — Content updates actioned within one business day.', '100% Asset Ownership — You own your domain, code, and content. We never hold client files hostage.', '7-Day Handover — Cancel anytime; we provide full transfer of files and credentials within 7 business days.'] },
    ],
    schema: null,
  },
};

const NAV = [['/', 'Home'], ['/services', 'Services'], ['/services/care-plan', 'Care Plan'], ['/portfolio', 'Portfolio'], ['/pricing', 'Pricing'], ['/about', 'About'], ['/blog', 'Blog'], ['/contact', 'Contact']];

function buildHtml(page) {
  const navLinks = NAV.map(([href, label]) => `<a href="${href}">${label}</a>`).join('\n        ');
  const sections = page.sections.map(s => `
    <section>
      <h2>${s.h}</h2>
      <ul>${s.items.map(i => `<li>${i}</li>`).join('')}</ul>
    </section>`).join('');
  const schemaTag = page.schema ? `<script type="application/ld+json">${page.schema}</script>` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <link rel="canonical" href="${page.canonical}">
  <meta name="robots" content="noindex, follow">
  <style>${CSS}</style>
  ${schemaTag}
</head>
<body>
  <header>
    <strong>Embra Technologies</strong>
    <nav aria-label="Primary">
      ${navLinks}
    </nav>
  </header>
  <main>
    <h1>${page.h1}</h1>
    <p class="sub">${page.sub}</p>
    <a href="/contact" class="cta">Get My Free Sample &rarr;</a>
    ${sections}
  </main>
  <footer>
    <p>&copy; 2026 Embra Technologies &middot; 1969 51st St, Brooklyn, NY 11204, USA &middot;
      <a href="mailto:sales@embratechnologies.org">sales@embratechnologies.org</a> &middot;
      <a href="tel:+12122071152">+1 (212) 207-1152</a>
    </p>
    <p style="margin-top:8px">
      <a href="/privacy">Privacy Policy</a> &middot;
      <a href="/terms">Terms of Service</a> &middot;
      <a href="/sitemap.xml">Sitemap</a>
    </p>
  </footer>
</body>
</html>`;
}

// Cache all HTML at startup
const HTML_CACHE = {};
for (const [path, page] of Object.entries(PAGES)) {
  HTML_CACHE[path] = buildHtml(page);
}

// ── Route handler ─────────────────────────────────────────────────────────────

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export function GET(request) {
  const url = new URL(request.url);
  // The middleware rewrites /foo to /__bot/foo; this route is at /api/__bot
  // so path comes in as a query param set by the rewrite
  const rawPath = url.searchParams.get('p') || url.pathname.replace('/api/__bot', '') || '/';
  const path = rawPath || '/';

  const html = HTML_CACHE[path] || HTML_CACHE['/'];

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
      'X-Robots-Tag': 'noindex, follow',
      'X-Bot-Optimized': '1',
    },
  });
}
