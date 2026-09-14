'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('embra-cookie-consent');
    if (!consent) {
      // Small delay so it doesn't fight the hero animation
      const t = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('embra-cookie-consent', 'accepted');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite">
      <div className="cookie-banner-content">
        <p>
          We use cookies to improve your experience and measure site performance. By continuing to use our site, you agree to our <Link href="/privacy">Privacy Policy</Link>.
        </p>
        <button onClick={accept} className="cookie-banner-btn">Got it</button>
      </div>
    </div>
  );
}
