export const metadata = {
  alternates: { canonical: '/terms' },
  title: 'Terms of Service — Embra Technologies',
  description:
    'Read the Terms of Service for Embra Technologies. Covers service scope, payment terms, intellectual property, and our commitment to client satisfaction.',
  openGraph: {
    title: 'Terms of Service — Embra Technologies',
    description:
      'Read the Terms of Service for Embra Technologies. Covers service scope, payment terms, intellectual property, and our commitment to client satisfaction.',
    url: 'https://www.embratechnologies.org/terms',
    images: [
      {
        url: 'https://www.embratechnologies.org/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Embra Technologies Terms of Service',
      },
    ],
  },
};

import Link from 'next/link';
import Breadcrumb from '../../components/Breadcrumb';

const LAST_UPDATED = 'January 1, 2026';

export default function TermsPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumb label="Terms of Service" href="/terms" />
          <div className="legal-header">
            <span className="badge-pill" style={{ marginBottom: 16, display: 'inline-block' }}>Legal</span>
            <h1>Terms of Service</h1>
            <p className="legal-meta">Last updated: {LAST_UPDATED}</p>
          </div>
        </div>
      </section>

      <section className="legal-section">
        <div className="wrap legal-wrap">

          <div className="legal-toc">
            <h3>Contents</h3>
            <ol>
              <li><a href="#agreement">Agreement to Terms</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#free-sample">Free Homepage Sample</a></li>
              <li><a href="#payments">Payments & Fees</a></li>
              <li><a href="#ip">Intellectual Property</a></li>
              <li><a href="#client-content">Client Content & Responsibilities</a></li>
              <li><a href="#revisions">Revisions & Scope Changes</a></li>
              <li><a href="#care-plan">Monthly Care Plan</a></li>
              <li><a href="#warranties">Warranties & Disclaimer</a></li>
              <li><a href="#liability">Limitation of Liability</a></li>
              <li><a href="#termination">Termination</a></li>
              <li><a href="#governing-law">Governing Law</a></li>
              <li><a href="#changes">Changes to These Terms</a></li>
              <li><a href="#contact-terms">Contact</a></li>
            </ol>
          </div>

          <div className="legal-body">

            <section id="agreement">
              <h2>1. Agreement to Terms</h2>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the services provided by Embra Technologies (&ldquo;Embra,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By engaging our services, requesting a free homepage sample, or signing a project agreement, you agree to these Terms in full.
              </p>
              <p>If you do not agree to these Terms, please do not use our services.</p>
            </section>

            <section id="services">
              <h2>2. Services</h2>
              <p>Embra Technologies provides the following services:</p>
              <ul>
                <li>Custom website design and development</li>
                <li>Search engine optimization (SEO)</li>
                <li>Digital identity and social media management</li>
                <li>Digital systems integration (payment gateways, CRM, analytics)</li>
                <li>Ongoing website maintenance and care plans</li>
              </ul>
              <p>
                The specific scope of services for each project is defined in a separate project agreement or statement of work provided before work commences. In the event of any conflict, the project agreement takes precedence over these Terms.
              </p>
            </section>

            <section id="free-sample">
              <h2>3. Free Homepage Sample</h2>
              <p>
                Embra Technologies may offer a complimentary custom homepage design sample (&ldquo;Free Sample&rdquo;) to prospective clients. The following conditions apply:
              </p>
              <ul>
                <li>The Free Sample is a design mockup intended to demonstrate our capabilities for your business. It is not a complete, production-ready website.</li>
                <li>The Free Sample is provided at no cost and with no obligation to purchase.</li>
                <li>Ownership of the Free Sample design remains with Embra Technologies unless you proceed to a paid engagement, at which point ownership transfers to you per Section 5.</li>
                <li>We reserve the right to limit the number of Free Samples offered and to discontinue this offer at any time.</li>
              </ul>
            </section>

            <section id="payments">
              <h2>4. Payments &amp; Fees</h2>
              <h3>One-Time Build</h3>
              <p>
                The one-time website build fee is payable per the schedule in your project agreement. Typically, 50% is due before work commences and 50% is due upon project completion before final files or access are transferred.
              </p>
              <h3>Monthly Care Plan</h3>
              <p>
                Monthly care plan fees are billed in advance on a recurring monthly basis. Payment is due on the same day each month as the plan start date.
              </p>
              <h3>Late Payment</h3>
              <p>
                Invoices unpaid after 14 days may result in a pause of ongoing services. Invoices unpaid after 30 days may incur a late fee of 1.5% per month on the outstanding balance.
              </p>
              <h3>Refunds</h3>
              <p>
                If you are unsatisfied with the final delivered website, notify us within 7 days of launch and we will work with you to resolve the issue. Due to the custom nature of our work, refunds are not available once a project has been launched and final payment received. Monthly care plan fees are non-refundable for the current billing period but you may cancel at any time (see Section 8).
              </p>
            </section>

            <section id="ip">
              <h2>5. Intellectual Property</h2>
              <p>
                Upon receipt of full payment for a completed project, Embra Technologies assigns to you all intellectual property rights in the final delivered website, including custom design files, code, and content we created specifically for your project.
              </p>
              <p>We retain the right to:</p>
              <ul>
                <li>Display your completed project in our portfolio and marketing materials.</li>
                <li>Retain ownership of any reusable frameworks, libraries, or general tooling we developed independently and that are not specific to your project.</li>
              </ul>
              <p>
                Third-party components used in your project (open-source libraries, stock imagery, fonts) are subject to their respective licences, which we will disclose upon request.
              </p>
            </section>

            <section id="client-content">
              <h2>6. Client Content &amp; Responsibilities</h2>
              <p>You agree to:</p>
              <ul>
                <li>Provide all required content (text, images, branding assets) within agreed timelines. Delays in content delivery may push back the project timeline.</li>
                <li>Ensure that all content you provide does not infringe the intellectual property rights of any third party.</li>
                <li>Designate a primary point of contact who has authority to approve designs and make project decisions.</li>
                <li>Provide accurate information about your business, goals, and target audience.</li>
              </ul>
            </section>

            <section id="revisions">
              <h2>7. Revisions &amp; Scope Changes</h2>
              <p>
                Each project includes a defined number of revision rounds as specified in your project agreement. Requests that fall outside the agreed scope or that exceed the included revision rounds may be subject to additional fees, which will be quoted and approved before work proceeds.
              </p>
            </section>

            <section id="care-plan">
              <h2>8. Monthly Care Plan</h2>
              <p>
                The Care Plan is a rolling monthly subscription. You may cancel at any time by providing written notice to sales@embratechnologies.org. Cancellation takes effect at the end of the current billing period — no pro-rated refunds are issued. Upon cancellation, we will transfer all website files, credentials, and hosting access to you within 7 business days.
              </p>
            </section>

            <section id="warranties">
              <h2>9. Warranties &amp; Disclaimer</h2>
              <p>
                Embra Technologies warrants that our services will be performed in a professional manner consistent with industry standards. We do not guarantee specific search engine rankings, traffic numbers, or lead volumes, as these depend on factors outside our control (search engine algorithm changes, competitive landscape, market conditions).
              </p>
              <p>
                Except as expressly stated above, our services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranty of any kind, express or implied.
              </p>
            </section>

            <section id="liability">
              <h2>10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, Embra Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, or goodwill — arising from or related to your use of our services, even if we have been advised of the possibility of such damages.
              </p>
              <p>
                Our total liability to you for any claim arising from these Terms or our services shall not exceed the total fees paid by you to Embra Technologies in the 3 months preceding the claim.
              </p>
            </section>

            <section id="termination">
              <h2>11. Termination</h2>
              <p>
                Either party may terminate a project engagement with 14 days&rsquo; written notice. Upon termination, you are responsible for payment of all work completed to date. Embra Technologies reserves the right to terminate immediately if you breach these Terms or fail to make payment after reasonable notice.
              </p>
            </section>

            <section id="governing-law">
              <h2>12. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of New York, United States, without regard to conflict-of-law principles. Any disputes shall be resolved through binding arbitration in New York, NY, except that either party may seek injunctive relief in court for intellectual property violations.
              </p>
            </section>

            <section id="changes">
              <h2>13. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. We will notify active clients of material changes by email. Continued use of our services after changes take effect constitutes acceptance of the revised Terms. The &ldquo;Last updated&rdquo; date at the top of this page indicates when the Terms were last revised.
              </p>
            </section>

            <section id="contact-terms">
              <h2>14. Contact</h2>
              <p>Questions about these Terms? Reach us at:</p>
              <address>
                <strong>Embra Technologies</strong><br />
                Email: <a href="mailto:sales@embratechnologies.org">sales@embratechnologies.org</a><br />
                Phone: <a href="tel:+12122071152">+1 (212) 207-1152</a>
              </address>
            </section>

          </div>
        </div>

        <div className="wrap" style={{ marginTop: 48 }}>
          <p style={{ fontSize: 14, opacity: 0.5, textAlign: 'center' }}>
            See also: <Link href="/privacy">Privacy Policy</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
