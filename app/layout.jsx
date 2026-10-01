import { Figtree, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ThemeProvider from '../components/ThemeProvider';
import ScrollManager from '../components/ScrollManager';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CookieBanner from '../components/CookieBanner';
import DurationTracker from '../components/DurationTracker';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import siteConfig from '../lib/site-config';
import JsonLd from '../components/JsonLd';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-figtree',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const viewport = {
  themeColor: '#0b0c10',
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.svg',
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  title: {
    default: `${siteConfig.brandName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.description,
  openGraph: {
    siteName: siteConfig.brandName,
    type: 'website',
    locale: 'en_US',
    url: siteConfig.siteUrl,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.brandName} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.social.twitter ? `@${new URL(siteConfig.social.twitter).pathname.replace(/^\/+|\/+$/g, '')}` : undefined,
    creator: siteConfig.social.twitter ? `@${new URL(siteConfig.social.twitter).pathname.replace(/^\/+|\/+$/g, '')}` : undefined,
    images: [siteConfig.ogImage],
  },
};

const globalSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.siteUrl}/#organization`,
    "name": siteConfig.legalName,
    "url": siteConfig.siteUrl,
    "logo": `${siteConfig.siteUrl}${siteConfig.logo}`,
    "sameAs": Object.values(siteConfig.social).filter(Boolean)
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.siteUrl}/#localbusiness`,
    "name": siteConfig.brandName,
    "url": siteConfig.siteUrl,
    "logo": `${siteConfig.siteUrl}${siteConfig.logo}`,
    "image": `${siteConfig.siteUrl}${siteConfig.ogImage}`,
    "description": siteConfig.description,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.state,
      "postalCode": siteConfig.address.zip,
      "addressCountry": siteConfig.address.country
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  }
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="obsidian">
      <body className={`${figtree.variable} ${inter.variable} ${jetbrains.variable}`}>
        <ThemeProvider>
          <ScrollManager>
            <a href="#main" className="skip-link">Skip to main content</a>
            <Navbar />
            <main id="main">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
            <CookieBanner />
            <DurationTracker />
            <JsonLd data={globalSchema} />
            <Analytics />
            <SpeedInsights />
          </ScrollManager>
        </ThemeProvider>
      </body>
    </html>
  );
}
