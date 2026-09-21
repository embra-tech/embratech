import { Figtree, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ThemeProvider from '../components/ThemeProvider';
import ScrollManager from '../components/ScrollManager';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CookieBanner from '../components/CookieBanner';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

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

export const metadata = {
  metadataBase: new URL('https://www.embratechnologies.org'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
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
    default: 'Embra Technologies — Websites, SEO & Digital Identity for Growing Businesses',
    template: '%s — Embra Technologies',
  },
  description:
    'Embra Technologies designs and builds fast, modern websites, improves search visibility, and manages digital identity for growing businesses across the United States.',
  openGraph: {
    siteName: 'Embra Technologies',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.embratechnologies.org',
    images: [
      {
        url: 'https://www.embratechnologies.org/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Embra Technologies — Websites, SEO & Digital Identity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@embratech',
    creator: '@embratech',
    images: ['https://www.embratechnologies.org/opengraph-image.jpg'],
  },
};

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
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "ProfessionalService",
                  "name": "Embra Technologies",
                  "url": "https://www.embratechnologies.org",
                  "logo": "https://www.embratechnologies.org/images/logo.png",
                  "image": "https://www.embratechnologies.org/opengraph-image.jpg",
                  "description": "Embra Technologies designs and builds fast, modern websites, improves search visibility, and manages digital identity for growing businesses across the United States.",
                  "telephone": "+1-212-207-1152",
                  "email": "sales@embratechnologies.org",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "1969 51st St",
                    "addressLocality": "Brooklyn",
                    "addressRegion": "NY",
                    "postalCode": "11204",
                    "addressCountry": "US"
                  },
                  "priceRange": "$",
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "09:00",
                      "closes": "18:00"
                    }
                  ]
                })
              }}
            />
            <Analytics />
            <SpeedInsights />
          </ScrollManager>
        </ThemeProvider>
      </body>
    </html>
  );
}




