import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-content">
          <p className="label-upper hero-label anim-hidden">{t('hero.badge_tag')}</p>
          <h1 id="hero-title" className="heading-display hero-title anim-hidden">
            {t('hero.title_line1')}<br />
            {t('hero.title_line2')}<br />
            <em>{t('hero.title_italic')}</em>
          </h1>
          <p className="hero-subtitle anim-hidden">
            {t('hero.subtitle')}
          </p>
          <div className="hero-actions anim-hidden">
            <a href="#products" className="btn btn-primary btn-arrow">
              {t('hero.explore_btn')}
            </a>
            <a href="#quality" className="hero-play-btn" aria-label={t('hero.watch_story')}>
              <span className="hero-play-icon" aria-hidden="true">▶</span>
              {t('hero.watch_story')}
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-badge anim-hidden-scale">
            <span className="hero-badge-number">{t('hero.badge_percent')}</span>
            <span className="hero-badge-text whitespace-pre-line">{t('hero.badge_text')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
