// Server component — exports unique metadata, renders the client-side inner component
export const metadata = {
  alternates: { canonical: '/portfolio' },
  title: 'Portfolio — Live Websites We Have Designed & Built',
  description:
    'View live, in-production websites built by Embra Technologies for auto body, handyman, tree service, travel, and service businesses across the US and Australia.',
  openGraph: {
    title: 'Embra Technologies Portfolio — Real Websites, Real Results',
    description:
      'Five live client websites — each mobile-first, sub-second loading, and built to convert local search traffic into booked jobs.',
    url: 'https://www.embratechnologies.org/portfolio',
  },
};

import PortfolioClient from './PortfolioClient';

export default function PortfolioPage() {
  return <PortfolioClient />;
}
