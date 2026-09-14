import { Figtree, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ThemeProvider from '../components/ThemeProvider';
import ScrollManager from '../components/ScrollManager';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

// preload: true puts a <link rel="preload"> for the primary woff2 in <head>
// so the browser fetches it before parsing CSS — shaves ~300ms off FCP.
const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-figtree',
  display: 'swap',
  preload: true,
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
  preload: false,
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
  preload: false,
});

export const metadata = {
  metadataBase: new URL('https://embratechnologies.org'),
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
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="obsidian">
      <head>
        {/* Preconnect to analytics origins so the browser opens TCP/TLS
            before the scripts are requested — saves ~300-600ms RTT */}
        <link rel="preconnect" href="https://va.vercel-scripts.com" />
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
      </head>
      <body className={`${figtree.variable} ${inter.variable} ${jetbrains.variable}`}>
        <ThemeProvider>
          <ScrollManager>
            <Navbar />
            {children}
            <Footer />
            <WhatsAppButton />
            <Analytics />
            <SpeedInsights />
          </ScrollManager>
        </ThemeProvider>
      </body>
    </html>
  );
}
