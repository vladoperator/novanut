import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container">
        <a href="#" className="nav-logo" aria-label="NovaNut home">
          <div className="nav-logo-icon" aria-hidden="true">🌰</div>
          <div className="nav-logo-text">
            <span className="nav-logo-name">NovaNut</span>
            <span className="nav-logo-sub">Walnut Kernels Export</span>
          </div>
        </a>

        <div className="nav-links">
          <a href="#hero" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#quality" className="nav-link">Quality</a>
          <a href="#sustainability" className="nav-link">Sustainability</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div className="nav-right">
          <a href="#contact" className="btn btn-primary btn-arrow" style={{ fontSize: '0.75rem', padding: '0.5rem 1rem' }}>
            Request a Quote
          </a>
          <span className="nav-lang">EN</span>
        </div>
      </div>
    </nav>
  );
}
