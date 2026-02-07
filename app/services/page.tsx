export default function ServicesPage() {
  return (
    <section className="content-section">
      <div className="container">
        <p className="eyebrow">Services</p>
        <h1>End-to-end engineering services.</h1>
        <p className="lead">We undertake following services.</p>
        <div className="content-grid">
          <div className="content-card">
            <h3>Media Related</h3>
            <ul className="checklist">
              <li>Digital Media and PR consultancy Advertising</li>
              <li>Social Media monitoring and handling</li>
              <li>Brand Building</li>
            </ul>
          </div>
          <div className="content-card">
            <h3>Electricity Related</h3>
            <ul className="checklist">
              <li>Electricity transmission system establishment and maintenance</li>
              <li>Electric system integration and low voltage system projects</li>
              <li>Establishment of Solar power units and power grid Substation</li>
              <li>Street light system installation and maintenance.</li>
            </ul>
          </div>
          <div className="content-card">
            <h3>Construction</h3>
            <ul className="checklist">
              <li>Civil Construction and Civil Electric work</li>
              <li>Remodeling and renovation</li>
            </ul>
          </div>
          <div className="content-card">
            <h3>Managed Services Offerings (Skilled/Unskilled manpower supply)</h3>
            <ul className="checklist">
              <li>Providing Skilled/Unskilled manpower with Managed Services Offering</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
