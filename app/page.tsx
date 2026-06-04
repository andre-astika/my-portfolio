"use client";

export default function Home() {
  const brands = [
    "Figma", "Coinbase", "Spotify", "Zoom", "Slack", "Dropbox",
    "Notion", "Linear", "Framer", "Webflow",
    "Figma", "Coinbase", "Spotify", "Zoom", "Slack", "Dropbox",
    "Notion", "Linear", "Framer", "Webflow",
  ];

  const experiences = [
    {
      period: "2015 – 2017",
      role: "Graphic Designer",
      company: "Dewa-Dewi Tech",
      desc: "Creating creative and functional visual designs to support brands and digital products.",
    },
    {
      period: "2017 – 2019",
      role: "UI/UX Designer",
      company: "Odama Studio",
      desc: "Creating intuitive and engaging digital experiences through functional and aesthetic design.",
    },
    {
      period: "2018 – 2021",
      role: "UX Researcher",
      company: "Korsa Studio",
      desc: "Focused on user research and design to create intuitive and effective user experiences.",
    },
    {
      period: "2021 – Now",
      role: "Product Designer",
      company: "Apple, Inc",
      desc: "Designing innovative experiences that connect technology and aesthetics to create iconic products.",
    },
  ];

  const works = [
    { tag: "UI/UX Design",    title: "E-Commerce App",          color: "#1c1c1a" },
    { tag: "Web Design",      title: "Finance Dashboard",        color: "#2a2a27" },
    { tag: "Mobile App",      title: "Fitness Tracker",          color: "#1f1f1d" },
    { tag: "Product Design",  title: "Social Media Dashboard",   color: "#141412" },
    { tag: "Branding",        title: "Midloni Pro",              color: "#222220" },
    { tag: "UI/UX Design",    title: "Travel App",               color: "#181816" },
  ];

  return (
    <main className="portfolio-main">

      {/* ── HERO ── */}
      <header className="hero-section">
        <div className="hero-container">

          {/* top: greeting + floating photo */}
          <div className="hero-top-row">
            <span className="hero-greeting">Hello, I&apos;m Andreast</span>
            <div className="hero-image-float">
              <div className="hero-img-box">
                {/* swap src with your real photo */}
                <div style={{ width: "100%", height: "100%", background: "linear-gradient(160deg,#d4d4d0,#b0b0ac)" }} />
              </div>
            </div>
          </div>

          {/* giant title */}
          <div className="hero-title-wrap">
            <h1 className="hero-title">
              Product<br />Designer
            </h1>
          </div>

          {/* tagline aligned right */}
          <div className="hero-mid-row">
            <p className="hero-tagline">
              Hi, I&apos;m Duwy, A UI/UX Designer<br />
              Creating Intuitive Digital<br />
              Experiences.
            </p>
          </div>

          {/* CTA */}
          <div className="hero-cta-row">
            <a href="#portfolio" className="btn-primary">View Work</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>

        </div>
      </header>

      {/* ── BRAND TICKER ── */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {brands.map((brand, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-dot" />
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section id="about" className="section-wrap">
        <div className="section-label">About Me</div>

        <div className="about-grid">
          <div>
            <h2 className="about-h2">
              Design has always been<br />
              more than just a job —<br />
              <em>it&apos;s my passion.</em>
            </h2>
          </div>

          <div className="about-right">
            <p className="about-body">
              Design is not just a job for me, it&apos;s a passion that drives me.
              I craft digital experiences that are both intuitive and visually compelling.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">+320</span>
                <span className="stat-desc">
                  Our step-by-step to simplify your Excellent Project Powerful
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">+280</span>
                <span className="stat-desc">
                  Our step-by-step to simplify your Excellent Project Our step to simplify
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* video / media placeholder */}
        <div className="about-video-wrap">
          <div className="about-video-placeholder">
            <div className="play-btn">▶</div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="section-wrap">
        <div className="section-label">Services</div>

        <div className="services-grid">
          <div className="services-left">
            <h2 className="services-h2">
              A Comprehensive look<br />
              at what we offer and<br />
              how we deliver
            </h2>
            <p className="services-desc">
              A comprehensive look at our services and how we deliver them
            </p>
            <a href="#contact" className="btn-primary">Sign In</a>
          </div>

          <div className="services-cards">
            <div className="service-card service-card--light">
              <span className="service-title">Social Ads</span>
              <p className="service-body">
                Strategic and creative social media advertising to reach the
                right audience, increase engagement and drive conversions.
              </p>
              <span className="service-arrow">→</span>
            </div>

            <div className="service-card service-card--dark">
              <span className="service-title">Content Marketing</span>
              <p className="service-body">
                We create strategic and engaging content to build brand
                awareness, increase engagement and drive conversions.
              </p>
              <span className="service-arrow">↗</span>
            </div>

            <div className="service-card service-card--light">
              <span className="service-title">Search Engineer</span>
              <p className="service-body">
                Optimize your website visibility and ranking with effective
                SEO strategies.
              </p>
              <span className="service-arrow">→</span>
            </div>

            <div className="service-card service-card--light">
              <span className="service-title">Saas Marketing</span>
              <p className="service-body">
                We help your SaaS product reach the right audience with a
                data-driven marketing strategy.
              </p>
              <span className="service-arrow">→</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="section-wrap">
        <div className="section-label">Experience</div>

        <div className="experience-grid">
          <div>
            <h2 className="experience-h2">
              A Yearly snapshot of<br />my creative growth
            </h2>
          </div>
          <div>
            <p className="experience-desc">
              An annual summary that summarizes my creative journey and
              development throughout the year.
            </p>
          </div>
        </div>

        <div className="experience-list">
          {experiences.map((item, i) => (
            <div key={i} className="exp-row">
              <div className="exp-info">
                <span className="exp-role">{item.role}</span>
                <span className="exp-company">{item.company}</span>
                <span className="exp-desc">{item.desc}</span>
              </div>
              <span className="exp-period">{item.period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="section-wrap">
        <div className="section-label">Portfolio</div>

        <div className="portfolio-header">
          <h2 className="portfolio-h2">
            Explore my portfolio of<br />creative solutions
          </h2>
          <p className="portfolio-desc">
            Explore my portfolio full of creative solutions.
          </p>
        </div>

        <div className="portfolio-grid">
          {works.map((item, i) => (
            <div
              key={i}
              className="portfolio-card"
              style={{ backgroundColor: item.color }}
            >
              <div className="portfolio-card-inner">
                <span className="portfolio-tag">{item.tag}</span>
                <span className="portfolio-title">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="section-wrap testimonial-section">
        <span className="testimonial-quote-mark">&ldquo;</span>

        <blockquote className="testimonial-text">
          Without Journey Commerce, we would never have been able to implement
          this system ourselves. Being a small team we don&apos;t have enough
          hours in the day.
          <br /><br />
          <em>
            The team at Journey Commerce researched our brand, planned the
            content and provided weekly feedback to improve the performance.
            The results have been amazing and we couldn&apos;t ask for a
            better partner.
          </em>
        </blockquote>

        <div className="testimonial-author">
          <div className="author-avatar" />
          <span className="author-name">Dhimmo Reijnder</span>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <h2 className="contact-h2">
            Let&apos;s Connect<br />There
          </h2>
          <a href="mailto:hello@email.com" className="btn-contact">
            <span className="btn-contact-icon">&raquo;</span>
            Hire Me Now!
          </a>
        </div>
      </section>

    </main>
  );
}