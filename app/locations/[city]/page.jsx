import { notFound } from 'next/navigation';
import LocationClient from './LocationClient';
import siteConfig from '../../../lib/site-config';

export const dynamicParams = false;

const LOCATIONS = [
  { slug: 'los-angeles', name: 'Los Angeles', state: 'CA' },
  { slug: 'chicago', name: 'Chicago', state: 'IL' },
  { slug: 'alaska', name: 'Alaska', state: 'AK' },
  { slug: 'gulf-coast', name: 'the Gulf Coast', state: 'Region' },
  { slug: 'brooklyn', name: 'Brooklyn', state: 'NY' }
];

export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({
    city: loc.slug,
  }));
}

export function generateMetadata({ params }) {
  const loc = LOCATIONS.find(l => l.slug === params.city);
  if (!loc) return {};
  const url = `${siteConfig.siteUrl}/locations/${params.city}`;
  const desc = `Embra Technologies builds high-converting, lightning-fast websites for growing businesses in ${loc.name}. Get a free custom homepage sample today.`;
  
  // 2026-10-13 Phase 1: "| Embra" removed here; the root layout's title template adds it.
  // 2026-10-13 (option B): "Agency in X" implied an office there; now "for X businesses".
  const titleText = loc.slug === 'brooklyn'
    ? 'Website Design & SEO for Brooklyn, NY Businesses'
    : `Website Design & SEO for ${loc.name} Businesses`;

  const meta = {
    title: titleText,
    alternates: { canonical: `/locations/${params.city}` },
    description: desc,
    openGraph: {
      title: `${titleText} | ${siteConfig.brandName}`,
      description: desc,
      url,
      images: [
        {
          url: siteConfig.ogImage,
          width: siteConfig.ogImageWidth,
          height: siteConfig.ogImageHeight,
          alt: `Embra Technologies, Web Design & SEO in ${loc.name}`,
        },
      ],
    },
  };

  if (params.city === 'gulf-coast') {
    meta.robots = { index: false, follow: true };
  }

  return meta;
}

export default function LocationPage({ params }) {
  const loc = LOCATIONS.find(l => l.slug === params.city);
  if (!loc) notFound();

  return <LocationClient loc={loc} />;
}
