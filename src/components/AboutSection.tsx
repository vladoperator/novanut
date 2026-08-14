import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation();

  const bulletPoints = [
    t('story.bullet1'),
    t('story.bullet2'),
    t('story.bullet3'),
    t('story.bullet4'),
  ];

  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="anim-hidden-left">
          <p className="label-upper about-label">{t('story.step3_tag')}</p>
          <h2 id="about-title" className="heading-section about-title">
            {t('story.step3_title')}
          </h2>
          <div className="about-paragraphs">
            <p className="about-desc">
              {t('story.step3_desc_p1')}
            </p>
            <p className="about-desc">
              {t('story.step3_desc_p2')}
            </p>
            <p className="about-desc">
              {t('story.step3_desc_p3')}
            </p>
          </div>
          <ul className="about-list">
            {bulletPoints.map((point, i) => (
              <li key={i} className="about-list-item">
                <span className="check" aria-hidden="true">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-outline btn-arrow">
            {t('story.contact_btn')}
          </a>
        </div>
        
        {/* The right side is intentionally left empty so the Giant Walnut in the WebGL scene can be framed here */}
      </div>
    </section>
  );
}
