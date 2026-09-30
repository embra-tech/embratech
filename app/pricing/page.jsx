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

export default function PricingPage() {
  return <PricingClient />;
}
