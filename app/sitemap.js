import siteConfig from '../lib/site-config';
import { BLOG_POSTS } from '../lib/blogData';

export default function sitemap() {
  const baseUrl = siteConfig.siteUrl;

  // Use real dates to prevent Google crawl penalty for lastmod spoofing
  const staticLastMod = '2026-09-30'; // Last date of major content overhaul
  const phase1Date = '2026-10-01';    // Phase 1 new pages
  const oct13 = '2026-10-13';         // Phase 1 fixes, pricing/refund wording, location wording, PND case study
  // 2026-10-20: real change dates from the release log, so Google re-reads updated pages sooner.
  const oct18 = '2026-10-18';         // 8721c96: homepage links, service-page headings and introductions
  const oct19 = '2026-10-19';         // 5cf96f5 tree page; f543429 / f7b6d18 case studies, portfolio, homepage cards, DesignRush link
  const oct20 = '2026-10-20';         // city and About wording
  const oct21 = '2026-10-24';         // (published 2026-10-24) Local SEO + handyman rewrites, industry-page guide links and claims, privacy policy, homepage FAQ
  const changedOct21 = ['tree-service-website-design', 'web-design-for-handyman-businesses', 'auto-body-shop-website-design', 'landscaping-website-design', 'hvac-website-design'];
  const oct25 = '2026-10-25';         // top-35 query round: auto body page, city pages (blog dates come from blogData)
  const oct26 = '2026-10-26';         // review of the external audit: care plan, integrations, pricing, about, homepage, LA and Chicago
  // 2026-11-24: ranking-risk audit (contradictions, unverifiable claims) + Search Console top-30 content round.
  const nov24 = '2026-11-24';

  // 2026-11-20: /services, /niches, /services/web-design, /pricing and /about gained the "Recent Client Projects" section.
  const corePages = [
    { url: baseUrl,                                    lastModified: nov24,  changeFrequency: 'weekly',   priority: 1.0 },
    { url: `${baseUrl}/services`,                      lastModified: '2026-11-20',         changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${baseUrl}/services/care-plan`,            lastModified: nov24,         changeFrequency: 'monthly',  priority: 0.85 },
    { url: `${baseUrl}/niches`,                        lastModified: '2026-11-20',    changeFrequency: 'monthly',  priority: 0.85 },
    { url: `${baseUrl}/services/web-design`,           lastModified: '2026-11-20',         changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${baseUrl}/services/local-seo`,            lastModified: '2026-11-06',  changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${baseUrl}/services/website-integrations`, lastModified: oct26,         changeFrequency: 'monthly',  priority: 0.85 },
    { url: `${baseUrl}/pricing`,                       lastModified: nov24,         changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${baseUrl}/portfolio`,                     lastModified: nov24,  changeFrequency: 'monthly',  priority: 0.85 },
    { url: `${baseUrl}/blog`,                          lastModified: nov24,         changeFrequency: 'weekly',   priority: 0.8 },
    { url: `${baseUrl}/contact`,                       lastModified: oct13,         changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${baseUrl}/about`,                         lastModified: nov24,         changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/privacy`,                       lastModified: oct21,         changeFrequency: 'yearly',   priority: 0.3 },
    { url: `${baseUrl}/terms`,                         lastModified: oct13,         changeFrequency: 'yearly',   priority: 0.3 },
  ];

  const locationPages = [
    { url: `${baseUrl}/locations/brooklyn`,            lastModified: nov24,  changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${baseUrl}/locations/los-angeles`,         lastModified: nov24,  changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/locations/chicago`,             lastModified: nov24,  changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/locations/alaska`,              lastModified: nov24,  changeFrequency: 'monthly',  priority: 0.7 },
    // 2026-11-02: city guides built from Search Console city queries (lib/cityGuides.js); deepened and live 2026-11-06
    { url: `${baseUrl}/locations/anchorage`,           lastModified: '2026-11-20',  changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/locations/fairbanks`,           lastModified: '2026-11-20',  changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/locations/juneau`,              lastModified: nov24,  changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/locations/denver`,              lastModified: '2026-11-20',  changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/locations/spokane`,             lastModified: nov24,  changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/locations/phoenix`,             lastModified: '2026-11-20',  changeFrequency: 'monthly',  priority: 0.7 },
    // /locations/gulf-coast is noindex, excluded from sitemap intentionally
  ];

  const nichePages = [
    'web-design-for-handyman-businesses',
    'tree-service-website-design',
    'auto-body-shop-website-design',
    'landscaping-website-design',
    'plumber-website-design',
    'hvac-website-design',
    'roofing-website-design',
  ].map(slug => ({
    url: `${baseUrl}/niches/${slug}`,
    // 2026-11-11: near-page-1 push (auto body, roofing, plumber, HVAC); other industry pages last changed 2026-11-06.
    // 2026-11-24: HVAC, auto body, roofing and handyman pages expanded (Search Console top-30 round); plumber page (round 2).
    lastModified: ['hvac-website-design', 'auto-body-shop-website-design', 'roofing-website-design', 'web-design-for-handyman-businesses', 'plumber-website-design'].includes(slug) ? nov24 : ['hvac-website-design', 'auto-body-shop-website-design'].includes(slug) ? '2026-11-20' : (['roofing-website-design', 'plumber-website-design'].includes(slug) ? '2026-11-13' : (slug === 'tree-service-website-design' ? oct21 : '2026-11-06')),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const portfolioPages = [
    'pnd-laundry',
    'tuxford-collision',
    'vvasquez-handyman',
    'alaska-fast-fix',
    'bestbreaks',
    'sky-high-tree',
    // 2026-11-06: new projects
    'alaska-handyman-services',
    'jcp-lawn-service',
    'royal-home-health-care',
  ].map(slug => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified: '2026-11-20', // 2026-11-20: all case studies gained "Project at a Glance" and "Related Pages"
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const blogPages = BLOG_POSTS.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.dateModified || post.date,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...corePages, ...locationPages, ...nichePages, ...portfolioPages, ...blogPages];
}
