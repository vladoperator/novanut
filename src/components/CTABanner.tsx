export default function CTABanner() {
  return (
    <section className="cta-banner" id="contact" aria-label="Contact us">
      <div className="container">
        <div className="cta-content">
          <h2>Let's Grow Together</h2>
          <p>Strong Partnerships. Lasting Success.</p>
        </div>

        <div className="cta-actions">
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', maxWidth: 260 }}>
            We are ready to build strong and long-term partnerships worldwide.
          </p>
          <a href="mailto:office@novanutexport.com" className="btn btn-accent btn-arrow">
            Request a Quote
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
