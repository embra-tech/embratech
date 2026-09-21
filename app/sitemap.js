export default function sitemap() {
  const baseUrl = 'https://www.embratechnologies.org';

  return [
    // Core pages — high priority
    { url: baseUrl,                                    lastModified: '2025-07-01', changeFrequency: 'monthly',  priority: 1.0 },
    { url: `${baseUrl}/services`,                      lastModified: '2025-07-01', changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${baseUrl}/pricing`,                       lastModified: '2025-07-01', changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${baseUrl}/portfolio`,                     lastModified: '2025-06-01', changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${baseUrl}/blog`,                          lastModified: '2025-08-01', changeFrequency: 'weekly',   priority: 0.8 },
    { url: `${baseUrl}/contact`,                       lastModified: '2025-05-01', changeFrequency: 'yearly',   priority: 0.8 },
    { url: `${baseUrl}/about`,                         lastModified: '2025-07-01', changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/privacy`,                       lastModified: '2025-05-01', changeFrequency: 'yearly',   priority: 0.3 },
    { url: `${baseUrl}/terms`,                         lastModified: '2025-05-01', changeFrequency: 'yearly',   priority: 0.3 },

    // Location pages
    { url: `${baseUrl}/locations/los-angeles`,         lastModified: '2025-06-01', changeFrequency: 'monthly',  priority: 0.6 },
    { url: `${baseUrl}/locations/chicago`,             lastModified: '2025-06-01', changeFrequency: 'monthly',  priority: 0.6 },
    { url: `${baseUrl}/locations/alaska`,              lastModified: '2025-06-01', changeFrequency: 'monthly',  priority: 0.6 },
    { url: `${baseUrl}/locations/gulf-coast`,          lastModified: '2025-06-01', changeFrequency: 'monthly',  priority: 0.6 },

    // Portfolio case studies
    { url: `${baseUrl}/portfolio/tuxford-collision`,   lastModified: '2025-06-15', changeFrequency: 'yearly',   priority: 0.7 },
    { url: `${baseUrl}/portfolio/vvasquez-handyman`,   lastModified: '2025-06-15', changeFrequency: 'yearly',   priority: 0.7 },
    { url: `${baseUrl}/portfolio/alaska-fast-fix`,     lastModified: '2025-06-15', changeFrequency: 'yearly',   priority: 0.7 },
    { url: `${baseUrl}/portfolio/bestbreaks`,          lastModified: '2025-06-15', changeFrequency: 'yearly',   priority: 0.7 },
    { url: `${baseUrl}/portfolio/sky-high-tree`,       lastModified: '2025-06-15', changeFrequency: 'yearly',   priority: 0.7 },

    // Blog posts
    { url: `${baseUrl}/blog/local-seo-guide-for-service-businesses`, lastModified: '2025-07-10', changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/blog/website-roi-calculator`,                  lastModified: '2025-07-10', changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/blog/why-pagespeed-matters`,                   lastModified: '2025-07-10', changeFrequency: 'yearly', priority: 0.7 },
  ];
}
