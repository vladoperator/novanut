export default function HeroSection() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-content">
          <p className="label-upper hero-label anim-hidden">Premium Quality</p>
          <h1 id="hero-title" className="heading-display hero-title anim-hidden">
            NovaNut<br />
            Walnut Kernels<br />
            <em>From Nature. To The World.</em>
          </h1>
          <p className="hero-subtitle anim-hidden">
            We export premium quality walnut kernels sourced from the best origins to the world.
            Natural. Delicious. Trusted.
          </p>
          <div className="hero-actions anim-hidden">
            <a href="#products" className="btn btn-primary btn-arrow">
              Explore Our Products
            </a>
            <button className="hero-play-btn" aria-label="Watch our story video">
              <span className="hero-play-icon" aria-hidden="true">▶</span>
              Watch Our Story
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-badge anim-hidden-scale">
            <span className="hero-badge-number">100%</span>
            <span className="hero-badge-text">Natural<br />Premium<br />Walnut Kernels</span>
          </div>
        </div>
      </div>
    </section>
  );
}
