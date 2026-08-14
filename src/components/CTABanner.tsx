import { useTranslation } from 'react-i18next';

export default function CTABanner() {
  const { t } = useTranslation();

  return (
    <section className="cta-banner" id="contact" aria-label="Contact us">
      <div className="container">
        <div className="cta-content">
          <h2>{t('cta.title')}</h2>
          <p>{t('cta.subtitle')}</p>
        </div>

        <div className="cta-actions">
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', maxWidth: 260 }}>
            {t('cta.desc')}
          </p>
          <a href="mailto:office@novanutexport.com" className="btn btn-accent btn-arrow">
            {t('cta.btn')}
          </a>
        </div>

        <div className="cta-contact">
          <a href="tel:+40745123456">+40 745 123 456</a>
          <a href="mailto:office@novanutexport.com">office@novanutexport.com</a>
        </div>
      </div>
    </section>
  );
}
