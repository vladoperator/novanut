const stats = [
  { icon: '📦', number: '5000+', label: 'Tons Exported Annually' },
  { icon: '🌎', number: '30+', label: 'Countries Served' },
  { icon: '🏆', number: '100%', label: 'Quality Guaranteed' },
  { icon: '😊', number: '50+', label: 'Satisfied Partners' },
];

export default function StatsBar() {
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
