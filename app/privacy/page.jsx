export const metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how Embra Technologies collects, uses, and protects your personal data. We are committed to transparency and your privacy.',
};

import Link from 'next/link';
import Breadcrumb from '../../components/Breadcrumb';

const LAST_UPDATED = 'September 14, 2026';

export default function PrivacyPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumb label="Privacy Policy" href="/privacy" />
          <div className="legal-header">
            <span className="badge-pill" style={{ marginBottom: 16, display: 'inline-block' }}>Legal</span>
            <h1>Privacy Policy</h1>
            <p className="legal-meta">Last updated: {LAST_UPDATED}</p>
          </div>
        </div>
      </section>

      <section className="legal-section">
        <div className="wrap legal-wrap">

          <div className="legal-toc">
            <h3>Contents</h3>
            <ol>
              <li><a href="#who-we-are">Who We Are</a></li>
              <li><a href="#data-collected">Data We Collect</a></li>
              <li><a href="#how-used">How We Use Your Data</a></li>
              <li><a href="#cookies">Cookies & Tracking</a></li>
              <li><a href="#third-parties">Third-Party Services</a></li>
              <li><a href="#data-retention">Data Retention</a></li>
              <li><a href="#your-rights">Your Rights</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
            </ol>
          </div>

          <div className="legal-body">

            <section id="who-we-are">
              <h2>1. Who We Are</h2>
              <p>
                Embra Technologies (&ldquo;Embra,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website{' '}
                <a href="https://embratechnologies.org" target="_blank" rel="noopener noreferrer">embratechnologies.org</a>{' '}
                and any sub-sites. We provide website design, search engine optimisation, and digital identity services for growing businesses.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or contact us about our services. Please read this policy carefully.
              </p>
            </section>

            <section id="data-collected">
              <h2>2. Data We Collect</h2>
              <h3>Information you provide directly</h3>
              <ul>
                <li><strong>Contact form submissions</strong> — your name, email address, business name, website URL, and the message you write to us.</li>
                <li><strong>Email correspondence</strong> — any information you include when emailing us at info@embratechnologies.org or sales@embratechnologies.org.</li>
              </ul>
              <h3>Information collected automatically</h3>
              <ul>
                <li><strong>Log data</strong> — your IP address, browser type, operating system, referring URL, pages visited, and timestamps. This data is collected by our hosting provider (Vercel) in standard server logs.</li>
                <li><strong>Analytics data</strong> — aggregated, anonymised traffic and engagement data collected via Google Analytics 4, if analytics are enabled. This includes pages viewed, session duration, and general geographic region (country/state level).</li>
                <li><strong>Performance data</strong> — Core Web Vitals and page-load metrics collected by Vercel&rsquo;s edge infrastructure. No personal identifiers are attached to this data.</li>
              </ul>
              <h3>Information we do NOT collect</h3>
              <p>We do not collect payment card details (all payments are processed by Stripe, directly). We do not knowingly collect personal information from children under 13.</p>
            </section>

            <section id="how-used">
              <h2>3. How We Use Your Data</h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul>
                <li><strong>Responding to enquiries</strong> — to reply to contact form submissions and email messages.</li>
                <li><strong>Providing services</strong> — to deliver the website design, SEO, and digital identity services you have engaged us for.</li>
                <li><strong>Sending project updates</strong> — to communicate progress, milestones, and deliverables related to your active project.</li>
                <li><strong>Improving our website</strong> — to understand which pages are most useful and where visitors encounter difficulties, using anonymised analytics data.</li>
                <li><strong>Legal compliance</strong> — to comply with applicable laws and enforce our Terms of Service.</li>
              </ul>
              <p>We do <strong>not</strong> sell, rent, or trade your personal information to third parties. We do not use your data for automated decision-making or profiling that produces legal effects.</p>
            </section>

            <section id="cookies">
              <h2>4. Cookies &amp; Tracking</h2>
              <p>Our website may use the following types of cookies and local storage:</p>
              <ul>
                <li><strong>Strictly necessary</strong> — cookies required for the website to function (e.g., CSRF tokens, session identifiers). These cannot be disabled.</li>
                <li><strong>Analytics</strong> — Google Analytics 4 may set cookies to track anonymous usage patterns. You can opt out via your browser settings or by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</li>
                <li><strong>Preference cookies</strong> — we store your chosen colour theme (e.g., &ldquo;obsidian&rdquo; or &ldquo;cosmic&rdquo;) in <code>localStorage</code> to preserve your visual preference across visits. No personal data is stored in this preference.</li>
              </ul>
              <p>You can control cookie settings through your browser. Disabling cookies may affect website functionality.</p>
            </section>

            <section id="third-parties">
              <h2>5. Third-Party Services</h2>
              <p>We use the following third-party services that may process your data:</p>
              <ul>
                <li>
                  <strong>Vercel</strong> — our hosting and edge-delivery provider. Vercel processes server logs and performance data. See the{' '}
                  <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a>.
                </li>
                <li>
                  <strong>FormSubmit</strong> — we use FormSubmit (formsubmit.co) to route contact form submissions to our email. Your form data (name, email, message) is transmitted to FormSubmit and forwarded to our inbox. See the{' '}
                  <a href="https://formsubmit.co/privacy" target="_blank" rel="noopener noreferrer">FormSubmit Privacy Policy</a>.
                </li>
                <li>
                  <strong>Google Analytics 4</strong> — used for anonymised website analytics. Data is processed by Google LLC. See{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&rsquo;s Privacy Policy</a>.
                </li>
                <li>
                  <strong>Stripe</strong> — used for payment processing on applicable invoices. We never see or store your full card details. See the{' '}
                  <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe Privacy Policy</a>.
                </li>
                <li>
                  <strong>Google Fonts / Next.js Font Optimisation</strong> — font files are self-hosted via Next.js&rsquo;s built-in font optimisation. No requests are made to Google&rsquo;s servers at runtime.
                </li>
              </ul>
            </section>

            <section id="data-retention">
              <h2>6. Data Retention</h2>
              <p>We retain personal data only as long as necessary for the purposes described in this policy:</p>
              <ul>
                <li><strong>Contact form submissions</strong> — retained in our email for up to 3 years from the date of submission, or until you request deletion.</li>
                <li><strong>Active client project data</strong> — retained for the duration of the project plus 2 years.</li>
                <li><strong>Analytics data</strong> — Google Analytics retains data per your browser&rsquo;s GA settings (default 14 months).</li>
                <li><strong>Server logs</strong> — Vercel retains server logs for up to 30 days.</li>
              </ul>
            </section>

            <section id="your-rights">
              <h2>7. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
              <ul>
                <li><strong>Access</strong> — request a copy of the personal data we hold about you.</li>
                <li><strong>Rectification</strong> — ask us to correct inaccurate data.</li>
                <li><strong>Erasure</strong> — request that we delete your personal data, subject to legal obligations.</li>
                <li><strong>Restriction</strong> — ask us to limit how we process your data.</li>
                <li><strong>Portability</strong> — request your data in a structured, machine-readable format.</li>
                <li><strong>Objection</strong> — object to our processing of your data for marketing or profiling purposes.</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{' '}
                <a href="mailto:info@embratechnologies.org">info@embratechnologies.org</a>. We will respond within 30 days.
              </p>
            </section>

            <section id="security">
              <h2>8. Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal data, including TLS/HTTPS encryption for all data in transit, access controls limiting who can view your data, and regular security reviews of our infrastructure and third-party integrations.
              </p>
              <p>No method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.</p>
            </section>

            <section id="contact-us">
              <h2>9. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
              <address>
                <strong>Embra Technologies</strong><br />
                Email: <a href="mailto:info@embratechnologies.org">info@embratechnologies.org</a><br />
                Phone: <a href="tel:+12122071152">+1 (212) 207-1152</a><br />
                Website: <a href="https://embratechnologies.org">embratechnologies.org</a>
              </address>
              <p>If you are located in the European Union and believe we have violated your data protection rights, you may lodge a complaint with your local supervisory authority.</p>
            </section>

          </div>
        </div>

        <div className="wrap" style={{ marginTop: 48 }}>
          <p style={{ fontSize: 14, opacity: 0.5, textAlign: 'center' }}>
            See also: <Link href="/terms">Terms of Service</Link>
          </p>
        </div>
      </section>
    </div>
  );
}

