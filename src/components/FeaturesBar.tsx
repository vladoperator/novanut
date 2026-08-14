import { useTranslation } from 'react-i18next';

export default function FeaturesBar() {
  const { t } = useTranslation();

  const features = [
    {
      icon: '🌿',
      title: t('features.f1_title'),
      desc: t('features.f1_desc'),
    },
    {
      icon: '⭐',
      title: t('features.f2_title'),
      desc: t('features.f2_desc'),
    },
    {
      icon: '🌍',
      title: t('features.f3_title'),
      desc: t('features.f3_desc'),
    },
    {
      icon: '🤝',
      title: t('features.f4_title'),
      desc: t('features.f4_desc'),
    },
    {
      icon: '🛡️',
      title: t('features.f5_title'),
      desc: t('features.f5_desc'),
    },
    {
      icon: '📦',
      title: t('features.f6_title'),
      desc: t('features.f6_desc'),
    },
  ];

  return (
    <section className="features-bar" aria-label="Key features">
      <div className="container">
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card anim-hidden" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="feature-icon" aria-hidden="true">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
