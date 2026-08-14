const products = [
  {
    emoji: '🥜',
    name: 'Light Halves',
    desc: 'High quality, light color, great taste.',
  },
  {
    emoji: '✨',
    name: 'Extra Light',
    desc: 'Premium selection for the most demanding markets.',
  },
  {
    emoji: '🔶',
    name: 'Quarters & Pieces',
    desc: 'Perfect for industrial use and food manufacturing.',
  },
  {
    emoji: '🫘',
    name: 'Walnut Meal',
    desc: 'Finely ground walnut for various food applications.',
  },
  {
    emoji: '🥣',
    name: 'Mixed Kernels',
    desc: 'A perfect blend of halves and pieces for your needs.',
  },
];

export default function ProductsSection() {
  return (
    <section className="products" id="products" aria-labelledby="products-title">
      <div className="container">
        <div className="products-header">
          <div>
            <p className="label-upper products-label">Our Products</p>
            <h2 id="products-title" className="heading-section products-title">
              Premium Walnut Kernels 🌰<br />
              <em>For Every Market</em>
            </h2>
          </div>
          <a href="#products" className="btn btn-outline btn-arrow">
            View All Products
          </a>
        </div>

        <div className="products-grid">
          {products.map((product, i) => (
            <div key={i} className="product-card anim-hidden-scale" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="product-image">
                <span style={{ fontSize: '3rem' }} aria-hidden="true">{product.emoji}</span>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
