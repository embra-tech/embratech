import PricingClient from './PricingClient';
import siteConfig from '../../lib/site-config';

// 2026-10-26: title and description lead with the plan prices (US query "embra inc. pricing plans" at position 2.7 with no clicks).
const PAGE_DESCRIPTION = 'Embra pricing plans: Starter website $700 ($600 paid in full), Growth $1,000, Pro $1,500, optional $150/month Care Plan. Free homepage sample before you pay.';

export const metadata = {
  alternates: { canonical: '/pricing' },
  title: 'Pricing Plans: Websites From $700 & Care Plan',
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: 'Embra Pricing Plans: Websites From $700 | Embra',
    description: PAGE_DESCRIPTION,
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
