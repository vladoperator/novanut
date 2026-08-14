const bulletPoints = [
  'Carefully selected raw materials',
  'Advanced processing & strict quality control',
  'Sustainable & ethical practices',
  'Reliable logistics & timely delivery',
];

export default function AboutSection() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="anim-hidden-left">
          <p className="label-upper about-label">About NovaNut</p>
          <h2 id="about-title" className="heading-section about-title">
            Quality You Can Taste.<br />
            Partnerships You Can Trust.
          </h2>
          <p className="about-desc">
            With years of experience in walnut cultivation, processing and export, we deliver the finest
            walnut kernels to our global partners.
          </p>
          <ul className="about-list">
            {bulletPoints.map((point, i) => (
              <li key={i} className="about-list-item">
                <span className="check" aria-hidden="true">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <a href="#about" className="btn btn-outline btn-arrow">
            Learn More About Us
          </a>
        </div>
        
        {/* The right side is intentionally left empty so the Giant Walnut in the WebGL scene can be framed here */}
      </div>
    </section>
  );
}
