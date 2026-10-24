import PricingClient from './PricingClient';
import siteConfig from '../../lib/site-config';

export const metadata = {
  alternates: { canonical: '/pricing' },
  title: 'Web Design Pricing & Monthly Care Plans',
  description:
    'Transparent website design pricing. From our $700 full build to the $150/mo Care Plan, we offer honest, no-surprise costs for growing US service businesses.',
  openGraph: {
    title: 'Web Design Pricing & Monthly Care Plans | Embra',
    description:
      'Transparent website design pricing. From our $700 full build to the $150/mo Care Plan, we offer honest, no-surprise costs for growing US service businesses.',
    url: `${siteConfig.siteUrl}/pricing`,
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: 'Embra Technologies web design pricing',
      },
    ],
  },
};

// 2026-10-21: page-level BreadcrumbList removed; the visible <Breadcrumb> in PricingClient already
// outputs an identical one.
export default function PricingPage() {
  return <PricingClient />;
}
