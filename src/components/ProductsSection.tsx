import { useTranslation } from 'react-i18next';
import { PRODUCTS } from '@/data/products';

export default function ProductsSection() {
  const { t } = useTranslation();

  // Show top featured products on homepage
  const featuredProducts = PRODUCTS.slice(0, 6);

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
          <a href="#/products" className="btn btn-outline btn-arrow">
            {t('products_catalog.page_tag') || 'Vezi Toate Cele 12 Produse'} (12)
          </a>
        </div>

        <div className="products-grid">
          {featuredProducts.map((product, i) => (
            <a
              key={product.id}
              href="#/products"
              className="product-card anim-hidden-scale block group cursor-pointer"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="product-image relative overflow-hidden bg-[#faf6ee]">
                <img
                  src={product.image}
                  alt={t(product.nameKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="product-info p-4">
                <h3 className="product-name font-serif font-bold text-sm text-[#1a3a2a] group-hover:text-[#a88b40] transition-colors">
                  {t(product.nameKey)}
                </h3>
                <p className="product-desc text-xs text-[#6b6b5e] line-clamp-2 mt-1">
                  {t(product.descKey)}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#/products" className="btn btn-primary btn-arrow px-8 py-3.5 text-xs font-bold tracking-wider">
            {t('products_catalog.page_tag') || 'Explorează Catalogul Complet'} (12 Produse)
          </a>
        </div>
      </div>
    </section>
  );
}
