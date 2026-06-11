"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { label: "Home",     num: "01", href: "#hero" },
    { label: "About Me", num: "02", href: "#about" },
    { label: "Works",    num: "03", href: "#works" },
    { label: "Insights", num: "04", href: "#insights" },
  ];

  return (
    <>
      {/* ── TOP BAR (mobile + desktop) ── */}
      <header className="topbar">
        <div className="topbar__inner">
          {/* Logo */}
          <Link href="/" className="topbar__logo">
            <span className="topbar__logo-text">andreast</span>
          </Link>

          {/* Desktop: Let's Talk CTA */}
          <a href="#contact" className="topbar__cta topbar__cta--desktop">Let&apos;s Talk</a>

          {/* Desktop nav trigger (hamburger opens sidebar) */}
          <button
            className="topbar__nav-toggle"
            aria-label="Toggle navigation"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span className={sidebarOpen ? "open" : ""} />
            <span className={sidebarOpen ? "open" : ""} />
            <span className={sidebarOpen ? "open" : ""} />
          </button>
        </div>
      </header>

      {/* ── SIDEBAR OVERLAY ── */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── SIDEBAR ── */}
      <aside className={`sidebar ${sidebarOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar__top">
          <Link href="/" className="sidebar__logo" onClick={() => setSidebarOpen(false)}>
            <span>andreast</span>
          </Link>
          <button className="sidebar__close" onClick={() => setSidebarOpen(false)} aria-label="Close menu">
            ✕
          </button>
        </div>

        <nav className="sidebar__nav" aria-label="Sidebar navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="sidebar__nav-item"
              onClick={() => setSidebarOpen(false)}
            >
              <div className="sidebar__nav-main">
                <span className="sidebar__nav-label">{link.label}</span>
                <span className="sidebar__nav-arrow">↗</span>
              </div>
              <span className="sidebar__nav-path">/{link.href.replace("#","")}</span>
            </a>
          ))}
        </nav>

        <div className="sidebar__footer">
          <p className="sidebar__follow-label">Follow me.</p>
          <div className="sidebar__socials">
            <a href="#" className="sidebar__social-link">Instagram</a>
            <a href="#" className="sidebar__social-link">Behance</a>
            <a href="#" className="sidebar__social-link">Twitter</a>
            <a href="#" className="sidebar__social-link">Dribbble</a>
          </div>
        </div>
      </aside>
    </>
  );
}