import siteConfig from '../lib/site-config';

export default function sitemap() {
  const baseUrl = siteConfig.siteUrl;
  const now = new Date().toISOString().split('T')[0];

  return [
    // Core pages — high priority
    { url: baseUrl,                                    lastModified: now, changeFrequency: 'weekly',   priority: 1.0 },
    { url: `${baseUrl}/services`,                      lastModified: now, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${baseUrl}/services/care-plan`,            lastModified: now, changeFrequency: 'monthly',  priority: 0.85 },
    { url: `${baseUrl}/pricing`,                       lastModified: now, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${baseUrl}/portfolio`,                     lastModified: now, changeFrequency: 'monthly',  priority: 0.85 },
    { url: `${baseUrl}/blog`,                          lastModified: now, changeFrequency: 'weekly',   priority: 0.8 },
    { url: `${baseUrl}/contact`,                       lastModified: now, changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${baseUrl}/about`,                         lastModified: now, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/privacy`,                       lastModified: now, changeFrequency: 'yearly',   priority: 0.3 },
    { url: `${baseUrl}/terms`,                         lastModified: now, changeFrequency: 'yearly',   priority: 0.3 },

    // Location pages (excluding noindexed gulf-coast)
    { url: `${baseUrl}/locations/los-angeles`,         lastModified: now, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/locations/chicago`,             lastModified: now, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${baseUrl}/locations/alaska`,              lastModified: now, changeFrequency: 'monthly',  priority: 0.7 },

    // Portfolio case studies
    { url: `${baseUrl}/portfolio/tuxford-collision`,   lastModified: now, changeFrequency: 'monthly',  priority: 0.75 },
    { url: `${baseUrl}/portfolio/vvasquez-handyman`,   lastModified: now, changeFrequency: 'monthly',  priority: 0.75 },
    { url: `${baseUrl}/portfolio/alaska-fast-fix`,     lastModified: now, changeFrequency: 'monthly',  priority: 0.75 },
    { url: `${baseUrl}/portfolio/bestbreaks`,          lastModified: now, changeFrequency: 'monthly',  priority: 0.75 },
    { url: `${baseUrl}/portfolio/sky-high-tree`,       lastModified: now, changeFrequency: 'monthly',  priority: 0.75 },

    // Blog posts
    { url: `${baseUrl}/blog/local-seo-guide-for-service-businesses`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/website-roi-calculator`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/why-pagespeed-matters`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
