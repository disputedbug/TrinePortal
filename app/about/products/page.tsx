export default function ProductsPage() {
  return (
    <section className="content-section">
      <div className="container">
        <p className="eyebrow">About</p>
        <h1>Products</h1>
        <p className="lead">
          Trine Engineering has a talented software development team that has built a suite of
          in-house tools, some of which are listed below. We also design custom media and AI
          solutions tailored to client needs.
        </p>
        <div className="content-grid">
          <div className="content-card">
            <h3>Aquila - Social Media Dashboard</h3>
            <p>
              Aquila is our in-house platform, built by the Trine Engineering software team to
              help organizations manage, monitor, and analyze their social media reach.
            </p>
          </div>
          <div className="content-card">
            <h3>ReachX</h3>
            <p>
              ReachX is an in-house product designed to help teams improve, track, and manage
              their reach on X (Twitter).
            </p>
          </div>
          <div className="content-card">
            <h3>VidX</h3>
            <p>
              VidX is an in-house product that sends personalized video messages to prospective
              customers and clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
