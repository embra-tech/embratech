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
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="obsidian">
      <body className={`${figtree.variable} ${inter.variable} ${jetbrains.variable}`}>
        <ThemeProvider>
          <ScrollManager>
            <Navbar />
            {children}
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
                  "logo": "https://www.embratechnologies.org/opengraph-image.png",
                  "image": "https://www.embratechnologies.org/opengraph-image.png",
                  "description": "Embra Technologies designs and builds fast, modern websites, improves search visibility, and manages digital identity for growing businesses across the United States.",
                  "telephone": "+1-212-207-1152",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "1309 Coffeen Avenue STE 1200",
                    "addressLocality": "Sheridan",
                    "addressRegion": "WY",
                    "postalCode": "82801",
                    "addressCountry": "US"
                  },
                  "priceRange": "$"
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




