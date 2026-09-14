'use client';

import { useRef, useState } from 'react';
import { useReveal } from '../../lib/useReveal';
import PageHeader from '../../components/PageHeader';
import Breadcrumb from '../../components/Breadcrumb';
import Link from 'next/link';

const CHANNELS = [
  { label: 'Email', value: 'sales@embratechnologies.org', href: 'mailto:sales@embratechnologies.org', icon: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></> },
  { label: 'Phone', value: '+1 (212) 207-1152', href: 'tel:+12122071152', icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.8 19.8 0 0 1 1.61 3.4 2 2 0 0 1 3.58 1.22h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /> },
  { label: 'Website', value: 'embratechnologies.org', href: 'https://www.embratechnologies.org', icon: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></> },
];

export default function ContactClient() {
  const ref = useRef(null);
  useReveal(ref);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', business: '', message: '', _gotcha: '', consent: false });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }

    setSending(true);
    setError('');

    const payload = {
      _subject: 'New Lead — Embra Technologies Website',
      _gotcha: form._gotcha,
      Name: form.name,
      Email: form.email,
      Phone: form.phone,
      'Business Name & Website': form.business,
      Message: form.message,
      ConsentGiven: form.consent
    };

    try {
      // 1. Dual pipeline: Log directly to our Vercel Axiom API route (No silent failures)
      const internalRes = fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(err => console.error('Internal backup failed', err));

      // 2. Primary pipeline: FormSubmit for email delivery
      const fsRes = await fetch('https://formsubmit.co/ajax/sales@embratechnologies.org', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!fsRes.ok) throw new Error('Submission failed');
      
      // Send analytics event if enabled
      if (window.va) {
        window.va('event', { name: 'LeadSubmitted' });
      }

      setSent(true);
    } catch (err) {
      setError("Something went wrong sending your message. Please email us directly at sales@embratechnologies.org.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div ref={ref} className="page-shell">
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumb label="Contact" href="/contact" />
          <PageHeader
            pill="Contact"
            badge="Let's Talk"
            title={<>Start your project <span className="highlight-text">today.</span></>}
            sub="Tell us about your business and goals. We'll reply with a plan — and a free custom homepage sample within 24 hours."
          />
        </div>
      </section>

      <section className="contact-section">
        <div className="wrap contact-grid">

          {/* HTML semantic action and method provide a no-js fallback directly to FormSubmit */}
          <form className="contact-form reveal-up" action="https://formsubmit.co/sales@embratechnologies.org" method="POST" onSubmit={submit}>
            {sent ? (
              <div className="contact-success" aria-live="polite">
                <div className="contact-success-icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3>Message received</h3>
                <p>Thanks, {form.name || 'friend'} — we&apos;ll get back to you within 24 hours with your free homepage sample plan.</p>
                <button type="button" className="btn-flip btn-ghost btn-small" onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', business: '', message: '', _gotcha: '', consent: false }); }}>
                  <span className="btn-flip-inner">
                    <span className="btn-flip-state">Send Another Message</span>
                    <span className="btn-flip-state" aria-hidden="true">Send Another Message</span>
                  </span>
                </button>
              </div>
            ) : (
              <>
                <div aria-live="polite" className="sr-only">
                  {error && "Error sending message"}
                </div>
                {/* Honeypot — invisible to humans, bots fill it and get rejected */}
                <input
                  type="text"
                  name="_gotcha"
                  value={form._gotcha}
                  onChange={update('_gotcha')}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
                />
                {/* Next route disabled so we can do ajax properly */}
                <input type="hidden" name="_next" value="https://www.embratechnologies.org/contact?success=true" />
                <input type="hidden" name="_subject" value="New Lead — Embra Technologies Website" />
                
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="cf-name">Your Name</label>
                    <input id="cf-name" name="Name" type="text" required placeholder="John Smith" autoComplete="name" value={form.name} onChange={update('name')} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="cf-email">Email Address</label>
                    <input id="cf-email" name="Email" type="email" required placeholder="john@business.com" autoComplete="email" value={form.email} onChange={update('email')} />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="cf-phone">Phone Number (Optional)</label>
                    <input id="cf-phone" name="Phone" type="tel" placeholder="(555) 123-4567" autoComplete="tel" value={form.phone} onChange={update('phone')} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="cf-business">Business Name &amp; Website</label>
                    <input id="cf-business" name="Business" type="text" placeholder="Smith Plumbing — smithplumbing.com" autoComplete="organization" value={form.business} onChange={update('business')} />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="cf-message">What do you need?</label>
                  <textarea id="cf-message" name="Message" rows="5" required placeholder="Tell us about your goals — a new website, better Google rankings, more leads..." value={form.message} onChange={update('message')} />
                </div>

                <div className="form-consent">
                  <input type="checkbox" id="cf-consent" name="Consent" required checked={form.consent} onChange={update('consent')} />
                  <label htmlFor="cf-consent">
                    I agree to the <Link href="/privacy">Privacy Policy</Link> and consent to being contacted regarding my inquiry.
                  </label>
                </div>

                <button type="submit" className="btn-flip btn-primary btn-large" disabled={sending}>
                  <span className="btn-flip-inner">
                    <span className="btn-flip-state">{sending ? 'Sending…' : 'Send Message'} <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg></span>
                    <span className="btn-flip-state" aria-hidden="true">{sending ? 'Sending…' : 'Send Message'} <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg></span>
                  </span>
                </button>
                {error && <p aria-live="assertive" style={{ color: '#FB7185', fontSize: 13.5, marginTop: 14 }}>{error}</p>}
              </>
            )}
          </form>

          <div className="contact-side">
            <div className="contact-channels reveal-up">
              {CHANNELS.map((c) => (
                <a href={c.href} className="contact-channel" key={c.label} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <span className="contact-channel-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{c.icon}</svg></span>
                  <div>
                    <span className="contact-channel-label">{c.label}</span>
                    <span className="contact-channel-value">{c.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-promise reveal-up">
              <h3>What happens next?</h3>
              <ol>
                <li><strong>Within 24 hours</strong> — a free custom homepage sample designed for your business.</li>
                <li><strong>Free consultation</strong> — we walk you through the design and our growth plan.</li>
                <li><strong>You decide</strong> — no pressure, no obligation. Start only if you love it.</li>
              </ol>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}


