import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">

        {/* CTA Section */}
        <div className="site-footer__cta-section">
          <p className="site-footer__cta-eyebrow">Have an idea?</p>
          <h2 className="site-footer__cta-title">Let&apos;s rock with me</h2>
          <div className="site-footer__cta-links">
            <a href="#about" className="site-footer__cta-link">ABOUT ME</a>
            <a href="#works" className="site-footer__cta-link">WORKS</a>
            <a href="#insights" className="site-footer__cta-link">INSIGHTS</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="site-footer__bottom">
          <Link href="/" className="site-footer__logo">
            <span>andreast</span>
          </Link>

          <p className="site-footer__tagline">
            A freelance website designer, website developer &amp; graphic designer currently based in Bali
          </p>

          <div className="site-footer__socials">
            <a href="#" className="site-footer__social">Instagram</a>
            <a href="#" className="site-footer__social">Behance</a>
            <a href="#" className="site-footer__social">Twitter</a>
            <a href="#" className="site-footer__social">Dribbble</a>
          </div>

          <p className="site-footer__copy">© 2026 Andre. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}