import HomePage from '../components/HomePage';
import JsonLd from '../components/JsonLd';
import siteConfig from '../lib/site-config';

export const metadata = {
  alternates: { canonical: '/' },
  title: 'Web Design & Local SEO for Home Service Businesses | Embra',
  description:
    'Custom websites and local SEO for plumbers, roofers, HVAC, and tree service companies. We build high-converting, lightning-fast websites that rank on Google.',
  openGraph: {
    title: 'Web Design & Local SEO for Home Service Businesses | Embra',
    description:
      'Custom websites and local SEO for plumbers, roofers, HVAC, and tree service companies. We build high-converting, lightning-fast websites that rank on Google.',
    url: siteConfig.siteUrl,
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.brandName,
  url: siteConfig.siteUrl,
  description: siteConfig.description,
  // SearchAction (sitelinks search box) removed 2026-10-01: Google retired the
  // feature, and /blog?q= never performed a search. See INDEXING_FIX_CHANGELOG.md
};

export default function Page() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <HomePage />
    </>
  );
}
