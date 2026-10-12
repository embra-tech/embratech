import PortfolioClient from './PortfolioClient';
import siteConfig from '../../lib/site-config';

export const metadata = {
  alternates: { canonical: '/portfolio' },
  title: 'Web Design Portfolio & Case Studies',
  description:
    'View our portfolio of live, high-performance websites built for auto body shops, tree services, and handymen. Designed to convert local search traffic.',
  openGraph: {
    title: 'Web Design Portfolio & Case Studies | Embra',
    description:
      'View our portfolio of live, high-performance websites built for auto body shops, tree services, and handymen. Designed to convert local search traffic.',
    url: `${siteConfig.siteUrl}/portfolio`,
    images: [
      {
        url: siteConfig.ogImage,
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: 'Embra Technologies web design portfolio',
      },
    ],
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
