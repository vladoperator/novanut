const companyLinks = ['About Us', 'Our Process', 'Sustainability', 'Careers'];
const productLinks = ['Walnut Kernels', 'Walnut Meal', 'Packaging', 'Catalog'];
const supportLinks = ['Quality & Food Safety', 'Certifications', 'FAQ', 'Contact'];

const certifications = [
  { name: 'HACCP', label: 'HACCP' },
  { name: 'ISO 22000', label: 'ISO\n22000' },
  { name: 'BRC', label: 'BRC' },
];

const socialLinks = [
  { icon: 'in', label: 'LinkedIn', href: '#' },
  { icon: 'f', label: 'Facebook', href: '#' },
  { icon: '📷', label: 'Instagram', href: '#' },
  { icon: '▶', label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="nav-logo" style={{ marginBottom: '1rem' }}>
              <div className="nav-logo-icon" aria-hidden="true">🌰</div>
              <div className="nav-logo-text">
                <span className="nav-logo-name" style={{ color: '#fff' }}>NovaNut</span>
                <span className="nav-logo-sub">Walnut Kernels Export</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="footer-col-title">Company</h4>
            {companyLinks.map((link) => (
              <a key={link} href="#" className="footer-link">{link}</a>
            ))}
          </div>

          {/* Products */}
          <div>
            <h4 className="footer-col-title">Products</h4>
            {productLinks.map((link) => (
              <a key={link} href="#" className="footer-link">{link}</a>
            ))}
          </div>

          {/* Support */}
          <div>
            <h4 className="footer-col-title">Support</h4>
            {supportLinks.map((link) => (
              <a key={link} href="#" className="footer-link">{link}</a>
            ))}
          </div>

          {/* Certifications & Social */}
          <div>
            <h4 className="footer-col-title">Certifications</h4>
            <div className="footer-certs">
              {certifications.map((cert) => (
                <div key={cert.name} className="footer-cert-badge" aria-label={cert.name}>
                  {cert.label}
                </div>
              ))}
            </div>
            <h4 className="footer-col-title" style={{ marginTop: '1.5rem' }}>Follow Us</h4>
            <div className="footer-social">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} className="footer-social-link" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} NovaNut Walnut Kernels Export. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
