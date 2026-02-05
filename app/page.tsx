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
          <div className="card-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64">
              <path d="M12 44 L32 12 L52 44" />
              <circle cx="32" cy="46" r="10" />
            </svg>
          </div>
          <h3>Systems you can trust</h3>
          <ul className="checklist">
            <li>Process engineering</li>
            <li>Safety-first delivery</li>
            <li>Lifecycle support</li>
          </ul>
        </div>
      </div>
      <div className="hero-glow" aria-hidden="true" />
    </section>
  );
}
