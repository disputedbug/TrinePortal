import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Trine Engineering Private Limited">
          <span className="brand-icon" aria-hidden="true">
            <img src="/trine-logo.png" alt="" />
          </span>
          <span className="brand-text">
            <span className="brand-name">Trine Engineering</span>
            <span className="brand-sub">Private Limited</span>
          </span>
        </Link>
        <nav className="nav" aria-label="Primary">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/services" className="nav-link">
            Services
          </Link>
          <div className="nav-dropdown">
            <Link href="/contact/contact-us" className="nav-link nav-parent">
              Contact
            </Link>
            <div className="dropdown-menu" role="menu" aria-label="Contact submenu">
              <Link href="/contact/contact-us" className="dropdown-item" role="menuitem">
                Contact Us
              </Link>
              <Link href="/contact/key-personnel" className="dropdown-item" role="menuitem">
                Key Personnel
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
