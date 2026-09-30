import AboutClient from './AboutClient';
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

export default function AboutPage() {
  return <AboutClient />;
}
