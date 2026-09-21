// Server component — exports unique metadata, renders the client-side inner component
export const metadata = {
  alternates: { canonical: '/services' },
  title: 'Services — Custom Web Design, SEO & Digital Identity Management',
  description:
    'Embra Technologies offers custom website design, search engine optimization, social media identity, payment integrations, and launch & scale services for US small businesses.',
  openGraph: {
    title: 'Embra Technologies Services — Everything to Grow Your Business Online',
    description:
      'From custom UI design to local SEO and Stripe integrations — one agency, every digital service your business needs.',
    url: 'https://www.embratechnologies.org/services',
  },
};

import ServicesClient from './ServicesClient';

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Design and Development',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Embra Technologies',
    url: 'https://www.embratechnologies.org',
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

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <ServicesClient />
    </>
  );
}
