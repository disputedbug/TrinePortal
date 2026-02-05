export default function ServicesPage() {
  return (
    <section className="content-section">
      <div className="container">
        <p className="eyebrow">Services</p>
        <h1>End-to-end engineering services.</h1>
        <p className="lead">We undertake following services.</p>
        <div className="content-grid">
          <div className="content-card">
            <h3>Engineering Design</h3>
            <p>Design, modeling, and systems integration.</p>
          </div>
          <div className="content-card">
            <h3>Project Delivery</h3>
            <p>Project management, execution, and commissioning.</p>
          </div>
          <div className="content-card">
            <h3>Maintenance & Support</h3>
            <p>Lifecycle services and performance optimization.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
