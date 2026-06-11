"use client";
import { useState } from "react";

export default function Home() {

  const [openWork, setOpenWork] = useState<number | null>(null);

  const works = [
    {
      title: "E-Commerce App",
      date: "May 5, 2023",
      desc: "Website Redesign: Improving user experience and modernizing design.",
      tags: ["UIUX", "Branding"],
      color: "#e8e4de",
      accentColor: "#c8c4bc",
    },
    {
      title: "Finance Dashboard",
      date: "Mar 12, 2023",
      desc: "Website Redesign: Improving user experience and modernizing design.",
      tags: ["Mobile App", "Website Design"],
      color: "#dde4e8",
      accentColor: "#b8c4cc",
    },
    {
      title: "Fitness Tracker",
      date: "Jan 8, 2023",
      desc: "Website Redesign: Improving user experience and modernizing design.",
      tags: ["UIUX", "Branding"],
      color: "#e4e8de",
      accentColor: "#c4ccb8",
    },
    {
      title: "Social Media Dashboard",
      date: "Nov 20, 2022",
      desc: "Website Redesign: Improving user experience and modernizing design.",
      tags: ["Branding", "Website Design"],
      color: "#e8dde4",
      accentColor: "#ccb8c4",
    },
  ];

  const experiences = [
    { role: "Product Designer",      company: "Uber",    period: "2020 – 2021" },
    { role: "Lead Product Designer", company: "Rovio",   period: "2021 – 2022" },
    { role: "Head of Product",       company: "Spotify", period: "2022 – 2023" },
    { role: "Design Director",       company: "Google",  period: "2023 – Now" },
  ];

  const clients = ["Django", "Portal", "Dojo Toolkit", "Rackspace", "Pipefy", "Teamwork"];

  const testimonials = [
    {
      quote: "Andreast is an exceptionally talented designer who consistently exceeded our expectations. His ability to blend creativity and functionality resulted in visually stunning designs that perfectly captured our brand's essence.",
      name: "Toby Brossman",
      title: "Founder of Pipefy",
    },
    {
      quote: "Working with Andreast was a game-changer for our business. His keen eye for detail and deep understanding of user experience resulted in designs that not only looked great but also enhanced the overall usability of our product.",
      name: "Richard Jonas",
      title: "CEO of Teamwork",
    },
    {
      quote: "His professionalism, responsiveness, and dedication to delivering high-quality work have exceeded our expectations. We are incredibly grateful and would highly recommend to anyone in need of a talented and reliable designer.",
      name: "Jacob McDany",
      title: "CEO of Rackspace",
    },
  ];

  const awards = [
    { label: "Honorable Mention", source: "2022 – AWWWARDS" },
    { label: "Site of The Day",   source: "2022 – CSS Winners" },
    { label: "Best UI Design",    source: "2022 – CSS Design Awards" },
    { label: "Site of The Day",   source: "2022 – AWWWARDS" },
  ];

  const insights = [
    {
      title: "The Power of Typography in Visual Design: Enhancing Communication and Impact",
      excerpt: "Uncover the significance of typography in visual design and learn how to leverage its power to effectively communicate messages and evoke emotions.",
    },
    {
      title: "Designing for User Experience: Creating Intuitive and Engaging Interfaces",
      excerpt: "Explore the realm of user experience design and discover how to craft interfaces that are not only aesthetically pleasing but also intuitive.",
    },
    {
      title: "Mastering the Art of Color Theory: A Visual Designer's Guide",
      excerpt: "Dive into the fascinating world of color theory and learn how to create captivating visual designs by understanding the principles of color harmonies.",
    },
  ];

  // Ticker — SVG icons per service, duplicated for seamless loop
  const tickerServices = [
    {
      label: "Web Development",
      icon: (
        // Code brackets / terminal icon
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      label: "Web Design",
      icon: (
        // Monitor / screen icon
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      label: "Graphic Design",
      icon: (
        // Pen tool / vector icon
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
    },
  ];
  // 4× repeat for truly seamless loop
  const tickerLoop = [...tickerServices, ...tickerServices, ...tickerServices, ...tickerServices];

  // Sparkle SVG — 4-point star
  const Sparkle = () => (
    <span className="ticker-sparkle" aria-hidden="true">
      <svg viewBox="0 0 14 14">
        <path d="M7 0 C7 0 7.5 5.5 7 7 C7 7 12.5 6.5 14 7 C14 7 8.5 7.5 7 7 C7 7 7.5 12.5 7 14 C7 14 6.5 8.5 7 7 C7 7 1.5 7.5 0 7 C0 7 5.5 6.5 7 7 C7 7 6.5 1.5 7 0Z" />
      </svg>
    </span>
  );

  return (
    <main className="main">

      {/* ── HERO ── */}
      <section id="hero" className="hero">
        <div className="hero__inner">
          <div className="hero__text-block">
            <p className="hero__greeting">Hello! I&apos;m Andreast.</p>
            <h1 className="hero__title">
              <span className="italic">Website</span> Designer{" "}
              <span className="sparkle-text">✦</span>{" "}
              <span className="italic">Website</span> Developer{" "}
              <span className="sparkle-text">✦</span>{" "}
              <span className="italic">Graphic</span> Designer
            </h1>
          </div>

          <div className="hero__text-with-button">
            <a href="#contact" className="btn-primary">
              Let&apos;s Talk
            </a>
            <p className="hero__sub">
              Designing and developing digital experiences with a strong focus on aesthetics, functionality, and user experience.
            </p>
          </div>
        </div>
      </section>

      {/* ── TICKER — glass pill style ── */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {tickerLoop.map((item, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-pill">
                <span className="ticker-pill__icon">{item.icon}</span>
                {item.label}
              </span>
              <Sparkle />
            </span>
          ))}
        </div>
      </div>

      {/* ── SELECTED WORKS HEADER ── */}
      <div className="section-eyebrow">
        <span>Selected works</span>
      </div>

      {/* ── WORKS — list with hover-expand image ── */}
      <section id="works" className="works">
        {works.map((work, i) => (
          <div
            key={i}
            className="works__item"
            onClick={() => setOpenWork(openWork === i ? null : i)}
          >
            {/* Always-visible header row */}
            <div className="works__item-header">
              <div className="works__item-name-block">
                <h3 className="works__item-title">{work.title}</h3>
                <span className="works__item-date">{work.date}</span>
              </div>
              <p className="works__item-desc">{work.desc}</p>
              <div className="works__item-tags">
                {work.tags.map((t) => (
                  <span key={t} className="works__tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Collapsible image panel */}
            <div className={`works__item-image-panel${openWork === i ? " works__item-image-panel--open" : ""}`}>
              <div className="works__item-image-panel-inner">
                <div className="works__item-image-box" style={{ background: work.color }}>
                  <div className="works__item-image-box-bg">
                    {/* Stylized mockup */}
                    <div className="works__item-mockup">
                      <div className="works__item-mockup-screen" style={{ background: work.accentColor }}>
                        <div className="works__item-mockup-bar">
                          <span className="works__item-mockup-dot" />
                          <span className="works__item-mockup-dot" />
                          <span className="works__item-mockup-dot" />
                        </div>
                        <div className="works__item-mockup-content" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="works__view-all">
          <a href="#works" className="btn-outline">View All Works</a>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="about">
        <div className="about__inner">
          <div className="about__left">
            <h2 className="about__title">
              A visual designer focused on creating emotional digital experience
            </h2>
            <p className="about__body">
              Concentrate on your primary objective which is expanding your business, and leave it
              to me to ensure that your business is efficiently portrayed in the digital realm and
              distinguishes itself from the rivals.
            </p>
            <a href="#contact" className="btn-primary">About Me</a>
            <div className="about__skills">
              <span className="about__skill-tag">UIUX</span>
              <span className="about__skill-tag">Branding</span>
              <span className="about__skill-tag">Mobile App</span>
              <span className="about__skill-tag">Website Design</span>
            </div>
          </div>

          <div className="about__right">
            <div className="about__profile-card">
              <div className="about__profile-photo" />
              <p className="about__profile-bio">
                As a Senior Designer with over 10 years of experience, I specialize in creating
                intuitive and user-centered interfaces for a wide range of digital products and
                experiences.
              </p>
              <a href="#contact" className="btn-outline about__profile-cta">Let&apos;s Talk</a>
            </div>

            <div className="about__exp-header">
              <h4 className="about__exp-label">My past work experience</h4>
            </div>
            <div className="about__exp-list">
              {experiences.map((e, i) => (
                <div key={i} className="about__exp-row">
                  <div className="about__exp-info">
                    <span className="about__exp-role">{e.role}</span>
                    <span className="about__exp-company">{e.company}</span>
                  </div>
                  <span className="about__exp-period">{e.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about__partners-label">A visual partner for brands, companies, and agencies</div>
        <div className="about__partners">
          {clients.map((c, i) => (
            <div key={i} className="about__partner-item">
              <span className="about__partner-name">{c}</span>
              <span className="about__partner-meta">UIUX &amp; Branding · 2022</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials">
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <p className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar" />
                <div>
                  <span className="testimonial-card__name">{t.name}</span>
                  <span className="testimonial-card__title">{t.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section className="awards">
        <div className="awards__eyebrow">Awards &amp; Recognition</div>
        <div className="awards__list">
          {awards.map((a, i) => (
            <div key={i} className="awards__item">
              <span className="awards__label">{a.label}</span>
              <span className="awards__source">{a.source}</span>
              <span className="awards__arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── INSIGHTS ── */}
      <section id="insights" className="insights">
        <div className="insights__eyebrow">Insight</div>
        <div className="insights__grid">
          {insights.map((ins, i) => (
            <a href="#" key={i} className="insight-card">
              <div className="insight-card__img" />
              <h3 className="insight-card__title">{ins.title}</h3>
              <p className="insight-card__excerpt">{ins.excerpt}</p>
            </a>
          ))}
        </div>
        <div className="insights__view-all">
          <a href="#insights" className="btn-outline">View All Insights</a>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section id="contact" className="contact-cta">
        <div className="contact-cta__inner">
          <p className="contact-cta__eyebrow">Have a nice work? Let&apos;s talk with me</p>
          <a href="mailto:hallo@andreast.com" className="contact-cta__email">
            hallo@andreast.com
          </a>
          <a href="mailto:hallo@andreast.com" className="contact-cta__arrow-btn">↗</a>
        </div>
      </section>

    </main>
  );
}