export default function sitemap() {
  const baseUrl = 'https://www.embratechnologies.org';
  const now = new Date().toISOString();

  const routes = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'monthly' },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/pricing`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/portfolio`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'yearly' },
    { url: `${baseUrl}/privacy`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFrequency: 'yearly' },
      { url: `${baseUrl}/locations/los-angeles`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${baseUrl}/locations/chicago`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${baseUrl}/locations/alaska`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${baseUrl}/locations/gulf-coast`, priority: 0.6, changeFrequency: 'monthly' },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}


