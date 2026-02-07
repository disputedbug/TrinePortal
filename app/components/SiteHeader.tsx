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
          <div className="nav-dropdown">
            <Link href="/about" className="nav-link nav-parent">
              About
            </Link>
            <div className="dropdown-menu" role="menu" aria-label="About submenu">
              <Link href="/about" className="dropdown-item" role="menuitem">
                About Us
              </Link>
              <Link href="/about/products" className="dropdown-item" role="menuitem">
                Products
              </Link>
              <Link href="/about/key-personnel" className="dropdown-item" role="menuitem">
                Key Personnel
              </Link>
              <Link href="/about/legal" className="dropdown-item" role="menuitem">
                Legal
              </Link>
            </div>
          </div>
          <Link href="/services" className="nav-link">
            Services
          </Link>
          <Link href="/contact/contact-us" className="nav-link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
