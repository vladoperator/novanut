import { useTranslation } from 'react-i18next';
import { COMPANY_CONTACT } from '@/data/products';

export default function CTABanner() {
  const { t } = useTranslation();

  return (
    <section className="cta-banner" id="contact" aria-label="Contact us">
      <div className="container">
        <div className="cta-content">
          <h2>{t('cta.title')}</h2>
          <p>{t('cta.subtitle')}</p>
          <p className="text-xs text-white/70 mt-2 font-mono">
            📍 {COMPANY_CONTACT.address}
          </p>
        </div>

        <div className="cta-actions">
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.875rem', maxWidth: 280 }}>
            {t('cta.desc')}
          </p>
          <a href="#/contact" className="btn btn-accent btn-arrow text-xs font-bold tracking-wider">
            {t('contacts_page.title') || 'Pagina de Contact'} & {t('cta.btn')}
          </a>
        </div>

        <div className="cta-contact">
          <a href={`tel:${COMPANY_CONTACT.phoneClean}`}>{COMPANY_CONTACT.phone}</a>
          <a href={`mailto:${COMPANY_CONTACT.email2}`}>{COMPANY_CONTACT.email2}</a>
        </div>
      </div>
    </section>
  );
}
