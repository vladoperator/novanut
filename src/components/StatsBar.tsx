import { useTranslation } from 'react-i18next';

export default function StatsBar() {
  const { t } = useTranslation();

  const stats = [
    { icon: '📦', number: t('stats.stat1_number'), label: t('stats.stat1_label') },
    { icon: '🌎', number: t('stats.stat2_number'), label: t('stats.stat2_label') },
    { icon: '🏆', number: t('stats.stat3_number'), label: t('stats.stat3_label') },
    { icon: '😊', number: t('stats.stat4_number'), label: t('stats.stat4_label') },
  ];

  return (
    <section className="stats-bar" aria-label="Company statistics">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item anim-hidden-scale">
              <span className="stat-icon" aria-hidden="true">{stat.icon}</span>
              <span className="stat-number" data-stat-value={stat.number}>
                {stat.number}
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
