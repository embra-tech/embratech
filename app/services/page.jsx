import ServicesClient from './ServicesClient';
import JsonLd from '../../components/JsonLd';
import siteConfig from '../../lib/site-config';

export const metadata = {
  alternates: { canonical: '/services' },
  title: 'Web Design & SEO Services for Local Businesses',
  description:
    'Professional web design, local SEO, and digital identity management services. We help home service businesses rank on Google and book more local jobs.',
  openGraph: {
    title: 'Web Design & SEO Services for Local Businesses | Embra',
    description:
      'Professional web design, local SEO, and digital identity management services. We help home service businesses rank on Google and book more local jobs.',
    url: `${siteConfig.siteUrl}/services`,
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: 'Embra Technologies web design and SEO services',
      },
    ],
  },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Design and Development',
  provider: {
    '@type': 'ProfessionalService',
    name: siteConfig.brandName,
    url: siteConfig.siteUrl,
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Website Design & Development',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Search Engine Optimization (SEO)',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Identity Management',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Systems & Seamless Integrations',
        },
      },
    ],
  },
};

// 2026-10-21: page-level BreadcrumbList removed; the visible <Breadcrumb> in ServicesClient already
// outputs an identical one.

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[SERVICE_SCHEMA]} />
      <ServicesClient />
    </>
  );
}
