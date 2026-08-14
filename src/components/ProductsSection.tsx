import { useTranslation } from 'react-i18next';

export default function ProductsSection() {
  const { t } = useTranslation();

  const products = [
    {
      emoji: '🥜',
      name: t('products.p1_name'),
      desc: t('products.p1_desc'),
    },
    {
      emoji: '✨',
      name: t('products.p2_name'),
      desc: t('products.p2_desc'),
    },
    {
      emoji: '🔶',
      name: t('products.p3_name'),
      desc: t('products.p3_desc'),
    },
    {
      emoji: '🫘',
      name: t('products.p4_name'),
      desc: t('products.p4_desc'),
    },
    {
      emoji: '🥣',
      name: t('products.p5_name'),
      desc: t('products.p5_desc'),
    },
  ];

  return (
    <section className="products" id="products" aria-labelledby="products-title">
      <div className="container">
        <div className="products-header">
          <div>
            <p className="label-upper products-label">{t('products.tag')}</p>
            <h2 id="products-title" className="heading-section products-title">
              {t('products.title_main')}<br />
              <em>{t('products.title_sub')}</em>
            </h2>
          </div>
          <a href="#products" className="btn btn-outline btn-arrow">
            {t('products.view_all')}
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
