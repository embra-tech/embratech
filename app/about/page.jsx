import AboutClient from './AboutClient';
import JsonLd from '../../components/JsonLd';
import siteConfig from '../../lib/site-config';

export const metadata = {
  alternates: { canonical: '/about' },
  title: 'About Our Local SEO & Web Design Agency',
  description:
    'Learn how Embra Technologies helps US service businesses compete online. We build custom React websites engineered for local SEO and sub-second load times.',
  openGraph: {
    title: 'About Our Local SEO & Web Design Agency | Embra',
    description:
      'Learn how Embra Technologies helps US service businesses compete online. We build custom React websites engineered for local SEO and sub-second load times.',
    url: `${siteConfig.siteUrl}/about`,
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: 'About Embra Technologies',
      },
    ],
  },
};

const aboutSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `About ${siteConfig.legalName}`,
    url: `${siteConfig.siteUrl}/about`,
    description:
      'Embra Technologies builds custom React websites and local SEO systems for US home service businesses, handymen, tree services, auto body shops, plumbers, roofers, and contractors.',
    mainEntity: {
      '@type': 'Organization',
      '@id': `${siteConfig.siteUrl}/#organization`,
      name: siteConfig.legalName,
      url: siteConfig.siteUrl,
      foundingDate: String(siteConfig.foundingYear),
      description: siteConfig.description,
      // 2026-10-13 (option B, owner approved): no street address; remote team serving the US.
      areaServed: { '@type': 'Country', name: 'United States' },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone,
        email: siteConfig.email,
        contactType: 'customer service',
        hoursAvailable: siteConfig.hours,
        areaServed: 'US',
      },
      sameAs: Object.values(siteConfig.social).filter(Boolean),
    },
  },
  // 2026-10-21: BreadcrumbList removed here; the visible <Breadcrumb> already outputs an identical one.
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <AboutClient />
    </>
  );
}
