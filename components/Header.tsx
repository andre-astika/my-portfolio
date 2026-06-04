"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Personal",  href: "#about" },
    { label: "Business",  href: "#services" },
    { label: "Partner",   href: "#experience" },
    { label: "About Us",  href: "#portfolio" },
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner">

        {/* Logo */}
        <Link href="/" className="site-header__logo">
          <span className="site-header__logo-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect width="9" height="9" rx="2" fill="currentColor" />
              <rect x="11" width="9" height="9" rx="2" fill="currentColor" opacity=".4" />
              <rect y="11" width="9" height="9" rx="2" fill="currentColor" opacity=".4" />
              <rect x="11" y="11" width="9" height="9" rx="2" fill="currentColor" />
            </svg>
          </span>
          <span className="site-header__logo-text">Duwy</span>
        </Link>

        {/* Desktop nav */}
        <nav className="site-header__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="site-header__nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="site-header__actions">
          <a href="#contact" className="site-header__signin">Sign In</a>

          {/* Hamburger — mobile only */}
          <button
            className="site-header__hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="site-header__mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="site-header__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            className="site-header__mobile-link site-header__mobile-link--cta"
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </a>
        </nav>
      )}
    </header>
  );
}