import PricingClient from './PricingClient';
import siteConfig from '../../lib/site-config';

export const metadata = {
  alternates: { canonical: '/pricing' },
  title: 'Web Design Pricing & Monthly Care Plans | Embra',
  description:
    'Transparent website design pricing. From our $700 full build to the $150/mo Care Plan, we offer honest, no-surprise costs for growing US service businesses.',
  openGraph: {
    title: 'Web Design Pricing & Monthly Care Plans | Embra',
    description:
      'Transparent website design pricing. From our $700 full build to the $150/mo Care Plan, we offer honest, no-surprise costs for growing US service businesses.',
    url: `${siteConfig.siteUrl}/pricing`,
  },
};

import JsonLd from '../../components/JsonLd';

export default function PricingPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Pricing', item: `${siteConfig.siteUrl}/pricing` },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <PricingClient />
    </>
  );
}
