import AboutClient from './AboutClient';
import JsonLd from '../../components/JsonLd';
import siteConfig from '../../lib/site-config';

export const metadata = {
  alternates: { canonical: '/about' },
  title: 'About Our Local SEO & Web Design Agency | Embra',
  description:
    'Learn how Embra Technologies helps US service businesses compete online. We build custom React websites engineered for local SEO and sub-second load times.',
  openGraph: {
    title: 'About Our Local SEO & Web Design Agency | Embra',
    description:
      'Learn how Embra Technologies helps US service businesses compete online. We build custom React websites engineered for local SEO and sub-second load times.',
    url: `${siteConfig.siteUrl}/about`,
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
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: siteConfig.address.country,
      },
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
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${siteConfig.siteUrl}/about` },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <AboutClient />
    </>
  );
}
