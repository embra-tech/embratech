export default function sitemap() {
  const baseUrl = 'https://www.embratechnologies.org';

  return [
    // Core pages — high priority
    { url: baseUrl,                                    lastModified: '2026-09-21', changeFrequency: 'weekly',   priority: 1.0 },
    { url: `${baseUrl}/services`,                      lastModified: '2026-09-21', changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${baseUrl}/services/care-plan`,            lastModified: '2026-09-21', changeFrequency: 'monthly',  priority: 0.85 },
    { url: `${baseUrl}/pricing`,                       lastModified: '2026-09-21', changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${baseUrl}/portfolio`,                     lastModified: '2026-09-21', changeFrequency: 'monthly',  priority: 0.85 },
    { url: `${baseUrl}/blog`,                          lastModified: '2026-09-21', changeFrequency: 'weekly',   priority: 0.8 },
    { url: `${baseUrl}/contact`,                       lastModified: '2026-09-21', changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${baseUrl}/about`,                         lastModified: '2026-09-21', changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/privacy`,                       lastModified: '2026-09-21', changeFrequency: 'yearly',   priority: 0.3 },
    { url: `${baseUrl}/terms`,                         lastModified: '2026-09-21', changeFrequency: 'yearly',   priority: 0.3 },

    // Location pages
    { url: `${baseUrl}/locations/los-angeles`,         lastModified: '2026-09-21', changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/locations/chicago`,             lastModified: '2026-09-21', changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/locations/alaska`,              lastModified: '2026-09-21', changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/locations/gulf-coast`,          lastModified: '2026-09-21', changeFrequency: 'monthly',  priority: 0.7 },

    // Portfolio case studies
    { url: `${baseUrl}/portfolio/tuxford-collision`,   lastModified: '2026-09-21', changeFrequency: 'monthly',  priority: 0.75 },
    { url: `${baseUrl}/portfolio/vvasquez-handyman`,   lastModified: '2026-09-21', changeFrequency: 'monthly',  priority: 0.75 },
    { url: `${baseUrl}/portfolio/alaska-fast-fix`,     lastModified: '2026-09-21', changeFrequency: 'monthly',  priority: 0.75 },
    { url: `${baseUrl}/portfolio/bestbreaks`,          lastModified: '2026-09-21', changeFrequency: 'monthly',  priority: 0.75 },
    { url: `${baseUrl}/portfolio/sky-high-tree`,       lastModified: '2026-09-21', changeFrequency: 'monthly',  priority: 0.75 },

    // Blog posts
    { url: `${baseUrl}/blog/local-seo-guide-for-service-businesses`, lastModified: '2026-09-12', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/website-roi-calculator`,                  lastModified: '2026-09-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/why-pagespeed-matters`,                   lastModified: '2026-08-28', changeFrequency: 'monthly', priority: 0.7 },
  ];
}
