export default function HomePage() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Trine Engineering Private Limited</p>
          <h1>Engineering confidence for critical industries.</h1>
          <p className="lead">
            <strong>Trine Engineering Private Limited</strong> provides practical and dependable
            engineering solutions across project maintenance, supply management, and Social Media
            engagement.
          </p>
          <p className="lead">
            We address real-world technical and operational challenges through structured
            processes, technical competence, and timely execution, with a strong focus on quality,
            safety, compliance, and continual improvement.
          </p>
          <p className="lead">
            By combining engineering expertise with disciplined project support, we help
            organizations maintain efficiency, reliability, and long-term value.
          </p>
          <div className="cta-group">
            <a href="/contact/contact-us" className="btn primary">
              Discuss a project
            </a>
            <a href="/services" className="btn ghost">
              View services
            </a>
          </div>
        </div>
        <div className="hero-card">
          <img
            className="hero-card-image"
            src="/hero-system.avif"
            alt="Warm industrial light above engineering workspace"
          />
          <div className="card-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64">
              <path d="M32 6 L36 6.6 L37.4 13.2 L43.6 15.4 L48.6 11.2 L52 14.4 L47.8 19.4 L50 25.6 L56.6 27 L57.2 32 L56.6 37 L50 38.4 L47.8 44.6 L52 49.6 L48.6 52.8 L43.6 48.6 L37.4 50.8 L36 57.4 L32 58 L28 57.4 L26.6 50.8 L20.4 48.6 L15.4 52.8 L12 49.6 L16.2 44.6 L14 38.4 L7.4 37 L6.8 32 L7.4 27 L14 25.6 L16.2 19.4 L12 14.4 L15.4 11.2 L20.4 15.4 L26.6 13.2 L28 6.6 Z" />
              <circle cx="32" cy="32" r="10" />
            </svg>
          </div>
          <h3>Systems you can trust</h3>
          <ul className="checklist">
            <li>Social media engagement</li>
            <li>Process engineering</li>
            <li>Safety-first delivery</li>
            <li>Lifecycle support</li>
          </ul>
        </div>
      </div>
      <div className="hero-glow" aria-hidden="true" />
      <div className="container customers">
        <p className="eyebrow">Our Customers</p>
        <h2>Trusted by teams that value reliability.</h2>
        <div className="customers-grid">
          <div className="customer-card">
            <img
              className="customer-photo"
              src="/customers/polaris.svg"
              alt="Polaris logo"
            />
            <div>
              <h3>Polaris</h3>
              <p>Engineering solutions partner</p>
            </div>
          </div>
          <div className="customer-card">
            <img
              className="customer-photo"
              src="/customers/uppcl.png"
              alt="UP Power Corporation Ltd. logo"
            />
            <div>
              <h3>UP Power Corporation Ltd.</h3>
              <p>Power distribution partner</p>
            </div>
          </div>
          <div className="customer-card">
            <img
              className="customer-photo"
              src="/customers/mib.svg"
              alt="Ministry of Information and Broadcasting, India logo"
            />
            <div>
              <h3>Ministry of Information and Broadcasting, India</h3>
              <p>Government communications partner</p>
            </div>
          </div>
          <div className="customer-card">
            <img
              className="customer-photo"
              src="/customers/up.png"
              alt="Uttar Pradesh Chief Minister Office logo"
            />
            <div>
              <h3>Uttar Pradesh Chief Minister Office</h3>
              <p>Public sector collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
