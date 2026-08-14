import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

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
            <h4 className="footer-col-title">{t('footer.col_company')}</h4>
            <a href="#/about" className="footer-link">{t('footer.about_us')}</a>
            <a href="#/quality" className="footer-link">{t('footer.our_process')}</a>
            <a href="#/sustainability" className="footer-link">{t('footer.sustainability')}</a>
            <a href="#/contact" className="footer-link">{t('footer.careers')}</a>
          </div>

          {/* Products */}
          <div>
            <h4 className="footer-col-title">{t('footer.col_products')}</h4>
            <a href="#/products" className="footer-link">{t('footer.walnut_kernels')}</a>
            <a href="#/products" className="footer-link">{t('footer.walnut_meal')}</a>
            <a href="#/products" className="footer-link">{t('footer.packaging')}</a>
            <a href="#/products" className="footer-link">{t('footer.catalog')}</a>
          </div>

          {/* Support */}
          <div>
            <h4 className="footer-col-title">{t('footer.col_support')}</h4>
            <a href="#/quality" className="footer-link">{t('footer.food_safety')}</a>
            <a href="#/about" className="footer-link">{t('footer.certifications_link')}</a>
            <a href="#/contact" className="footer-link">{t('footer.faq')}</a>
            <a href="#/contact" className="footer-link">{t('footer.contact')}</a>
          </div>

          {/* Certifications & Social */}
          <div>
            <h4 className="footer-col-title">{t('footer.col_certifications')}</h4>
            <div className="footer-certs">
              {certifications.map((cert) => (
                <div key={cert.name} className="footer-cert-badge" aria-label={cert.name}>
                  {cert.label}
                </div>
              ))}
            </div>
            <h4 className="footer-col-title" style={{ marginTop: '1.5rem' }}>{t('footer.col_follow')}</h4>
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
          <p>© {new Date().getFullYear()} {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
