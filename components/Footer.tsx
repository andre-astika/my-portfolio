import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">

        {/* TOP ROW */}
        <div className="site-footer__top">

          {/* Col 1 — Brand */}
          <div className="site-footer__brand">
            <Link href="/" className="site-footer__logo">
              <span className="site-footer__logo-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect width="9" height="9" rx="2" fill="currentColor" />
                  <rect x="11" width="9" height="9" rx="2" fill="currentColor" opacity=".4" />
                  <rect y="11" width="9" height="9" rx="2" fill="currentColor" opacity=".4" />
                  <rect x="11" y="11" width="9" height="9" rx="2" fill="currentColor" />
                </svg>
              </span>
              <span className="site-footer__logo-text">Andreast</span>
            </Link>

            <p className="site-footer__tagline">
              Web Design and Development (AI)
            </p>

            <div className="site-footer__socials">
              {/* Instagram */}
              <a href="#" className="site-footer__social-link" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="site-footer__social-link" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.732-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="site-footer__social-link" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="4" />
                  <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* Pinterest */}
              <a href="#" className="site-footer__social-link" aria-label="Pinterest">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.641 1.267 1.408 0 .858-.546 2.141-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.561 0-2.386-1.715-4.054-4.163-4.054-2.837 0-4.5 2.128-4.5 4.327 0 .856.33 1.773.741 2.274a.3.3 0 0 1 .069.284c-.076.315-.243.995-.276 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.938.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Address */}
          <div className="site-footer__col">
            <h4 className="site-footer__col-title">Address</h4>
            <p className="site-footer__col-text">Denpasar, Bali - Indonesia</p>
          </div>

          {/* Col 3 — Email */}
          <div className="site-footer__col">
            <h4 className="site-footer__col-title">Email Address</h4>
            <a href="mailto:hallo@andreast.com" className="site-footer__col-link">
              hallo@andreast.com
            </a>
          </div>

          {/* Col 4 — Phone */}
          <div className="site-footer__col">
            <h4 className="site-footer__col-title">Phone Number</h4>
            <a href="tel:+02711314564232" className="site-footer__col-link">
              123456789
            </a>
          </div>

        </div>

        {/* MIDDLE DIVIDER + secondary nav */}
        <div className="site-footer__mid">
          <div className="site-footer__divider" />
          <nav className="site-footer__secondary-nav" aria-label="Footer navigation">
            {["Templates", "Tools", "Features", "About Us"].map((item) => (
              <a key={item} href="#" className="site-footer__secondary-link">
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* BOTTOM ROW */}
        <div className="site-footer__bottom">
          <p className="site-footer__copy">All rights reserved @Andreast</p>
        </div>

      </div>
    </footer>
  );
}