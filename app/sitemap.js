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

  const corePages = [
    { url: baseUrl,                                    lastModified: oct19,         changeFrequency: 'weekly',   priority: 1.0 },
    { url: `${baseUrl}/services`,                      lastModified: oct18,         changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${baseUrl}/services/care-plan`,            lastModified: staticLastMod, changeFrequency: 'monthly',  priority: 0.85 },
    { url: `${baseUrl}/niches`,                        lastModified: phase1Date,    changeFrequency: 'monthly',  priority: 0.85 },
    { url: `${baseUrl}/services/web-design`,           lastModified: oct18,         changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${baseUrl}/services/local-seo`,            lastModified: oct18,         changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${baseUrl}/services/website-integrations`, lastModified: phase1Date,    changeFrequency: 'monthly',  priority: 0.85 },
    { url: `${baseUrl}/pricing`,                       lastModified: oct13,         changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${baseUrl}/portfolio`,                     lastModified: oct19,         changeFrequency: 'monthly',  priority: 0.85 },
    { url: `${baseUrl}/blog`,                          lastModified: oct13,         changeFrequency: 'weekly',   priority: 0.8 },
    { url: `${baseUrl}/contact`,                       lastModified: oct13,         changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${baseUrl}/about`,                         lastModified: oct20,         changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/privacy`,                       lastModified: staticLastMod, changeFrequency: 'yearly',   priority: 0.3 },
    { url: `${baseUrl}/terms`,                         lastModified: oct13,         changeFrequency: 'yearly',   priority: 0.3 },
  ];

  const locationPages = [
    { url: `${baseUrl}/locations/brooklyn`,            lastModified: oct20,         changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${baseUrl}/locations/los-angeles`,         lastModified: oct20,         changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/locations/chicago`,             lastModified: oct20,         changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/locations/alaska`,              lastModified: oct20,         changeFrequency: 'monthly',  priority: 0.7 },
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
    lastModified: slug === 'tree-service-website-design' ? oct19 : oct13,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const portfolioPages = [
    'pnd-laundry',
    'tuxford-collision',
    'vvasquez-handyman',
    'alaska-fast-fix',
    'bestbreaks',
    'sky-high-tree'
  ].map(slug => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified: oct19,
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
