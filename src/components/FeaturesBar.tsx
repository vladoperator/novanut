const features = [
  {
    icon: '🌿',
    title: '100% Natural',
    desc: 'Pure walnut kernels with no additives or preservatives.',
  },
  {
    icon: '⭐',
    title: 'Premium Quality',
    desc: 'Carefully selected and processed to ensure the highest standards.',
  },
  {
    icon: '🌍',
    title: 'Global Export',
    desc: 'Supplying premium walnuts to markets worldwide.',
  },
  {
    icon: '🤝',
    title: 'Trusted Partner',
    desc: 'Long-term partnerships built on trust and reliability.',
  },
  {
    icon: '🛡️',
    title: 'Food Safety',
    desc: 'Strict quality control and food safety management.',
  },
  {
    icon: '📦',
    title: 'Custom Packaging',
    desc: 'Tailored packaging solutions to meet your specific needs.',
  },
];

export default function FeaturesBar() {
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
