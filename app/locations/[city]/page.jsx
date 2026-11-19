import { notFound } from 'next/navigation';
import LocationClient from './LocationClient';
import siteConfig from '../../../lib/site-config';
import { CITY_GUIDES, CITY_GUIDE_LIST } from '../../../lib/cityGuides';

export const dynamicParams = false;

// 2026-10-27: six city guides added from Search Console city queries (lib/cityGuides.js).
const LOCATIONS = [
  { slug: 'los-angeles', name: 'Los Angeles', state: 'CA' },
  { slug: 'chicago', name: 'Chicago', state: 'IL' },
  { slug: 'alaska', name: 'Alaska', state: 'AK' },
  { slug: 'gulf-coast', name: 'the Gulf Coast', state: 'Region' },
  { slug: 'brooklyn', name: 'Brooklyn', state: 'NY' },
  ...CITY_GUIDE_LIST.map((g) => ({ slug: g.slug, name: g.display, state: g.state })),
];

export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({
    city: loc.slug,
  }));
}

export function generateMetadata({ params }) {
  const loc = LOCATIONS.find(l => l.slug === params.city);
  if (!loc) return {};
  const guide = CITY_GUIDES[params.city];
  const url = `${siteConfig.siteUrl}/locations/${params.city}`;
  // 2026-11-18: search descriptions written for click-through, leading with what people in each city search for (Search Console, US).
  const CITY_DESC = {
    chicago: 'HVAC SEO and websites for Chicago heating, cooling and home service companies. Free local SEO review; websites from $700, or $600 paid in full.',
    'los-angeles': 'Websites and local SEO for Los Angeles HVAC, plumbing, auto body and home service businesses. Websites from $700; free homepage sample in 24 hours.',
    brooklyn: 'HVAC SEO, websites and local SEO for Brooklyn service businesses. Free local SEO review; websites from $700, or $600 paid in full.',
    alaska: 'Websites and SEO for Alaska HVAC, auto body, plumbing and home service businesses, from Anchorage to Fairbanks. Websites from $700; free homepage sample.',
  };
  const desc = guide ? guide.metaDescription : (CITY_DESC[params.city] || `Websites and local SEO for service businesses in ${loc.name}: plumbers, HVAC, roofers, tree services, handymen and auto body shops. Free homepage sample in 24 hours.`);
  
  // 2026-10-13 Phase 1: "| Embra" removed here; the root layout's title template adds it.
  // 2026-10-13 (option B): "Agency in X" implied an office there; now "for X businesses".
  // 2026-10-25: matches the US query "website for service businesses in los angeles" (36 impressions, pos 60).
  // 2026-11-02: Chicago leads with HVAC SEO (top Chicago query: "seo company for hvac repair in chicago", 42 impressions).
  const titleText = guide
    ? guide.metaTitle
    : loc.slug === 'chicago'
      ? 'HVAC SEO & Websites for Chicago Service Businesses'
      : loc.slug === 'alaska'
        ? 'Alaska HVAC, Auto Body & Contractor Websites and SEO'
        : loc.slug === 'brooklyn'
          ? 'Websites & SEO for Service Businesses in Brooklyn, NY'
          : `Websites & SEO for Service Businesses in ${loc.name}`;

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

  return <LocationClient loc={loc} guide={CITY_GUIDES[params.city] || null} />;
}
