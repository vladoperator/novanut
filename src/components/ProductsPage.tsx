import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { PRODUCTS, HEALTH_BENEFITS, type ProductItem } from '@/data/products';
import Navbar from './Navbar';
import Footer from './Footer';

interface ProductsPageProps {
  onNavigate?: (page: 'home' | 'products' | 'contact', productId?: string) => void;
}

export default function ProductsPage({ onNavigate }: ProductsPageProps) {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  const categories = [
    { id: 'all', label: t('products_catalog.filter_all') },
    { id: 'halves', label: t('products_catalog.filter_halves') },
    { id: 'amber', label: t('products_catalog.filter_amber') },
    { id: 'pieces', label: t('products_catalog.filter_pieces') },
    { id: 'industrial', label: t('products_catalog.filter_industrial') },
    { id: 'inshell', label: t('products_catalog.filter_inshell') },
  ];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleRequestQuote = (product: ProductItem) => {
    if (onNavigate) {
      onNavigate('contact', product.id);
    } else {
      window.location.hash = `#/contact?product=${product.id}`;
    }
  };

  return (
    <div className="page-wrapper page-products">
      <Navbar />

      <main className="products-page-main pt-28 pb-20">
        <div className="container">
          {/* Breadcrumb & Navigation */}
          <div className="page-breadcrumb flex items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6b6b5e]">
              <a
                href="#/"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('home');
                  else window.location.hash = '#/';
                }}
                className="hover:text-[#1a3a2a] transition-colors"
              >
                {t('nav.home') || 'Acasă'}
              </a>
              <span>/</span>
              <span className="text-[#1a3a2a] font-bold">{t('products_catalog.page_title')}</span>
            </div>

            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('home');
                else window.location.hash = '#/';
              }}
              className="btn btn-outline text-xs py-2 px-4 inline-flex items-center gap-2"
            >
              <span>←</span>
              <span>{t('contacts_page.back_home') || 'Înapoi'}</span>
            </a>
          </div>

          {/* Hero Header */}
          <div className="products-hero-card mb-16 p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#1a3a2a] via-[#153123] to-[#0f2419] text-white shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none bg-[radial-gradient(#c8a960_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="max-w-3xl relative z-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#c8a960] mb-3">
                {t('products_catalog.page_tag')}
              </span>
              <h1 className="heading-display text-3xl sm:text-5xl font-bold mb-4 tracking-tight">
                {t('products_catalog.page_title')}
              </h1>
              <p className="text-lg sm:text-xl text-[#f0ead8] font-serif italic mb-6">
                "{t('products_catalog.page_subtitle')}"
              </p>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                {t('products_catalog.intro_text')}
              </p>
            </div>
          </div>

          {/* Health Benefits Section */}
          <section className="health-benefits-section mb-16" aria-labelledby="health-benefits-title">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="label-upper text-xs text-[#a88b40] font-bold">NovaNut Health</span>
              <h2 id="health-benefits-title" className="heading-section text-2xl sm:text-3xl text-[#1a3a2a] mt-1 mb-2">
                {t('health_benefits.section_title')}
              </h2>
              <p className="text-sm text-[#6b6b5e]">
                {t('health_benefits.section_subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {HEALTH_BENEFITS.map((benefit, i) => (
                <div
                  key={i}
                  className="benefit-card p-4 sm:p-5 rounded-xl bg-white/70 backdrop-blur-md border border-[#1a3a2a]/10 hover:border-[#c8a960] hover:shadow-md transition-all duration-200 flex items-start gap-3.5 group"
                >
                  <span className="benefit-icon text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#1a3a2a] leading-snug">
                    {t(benefit.titleKey)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Products Catalog Filter & Grid */}
          <section className="products-grid-section mb-20" aria-label="Product catalog list">
            {/* Filter Tabs */}
            <div className="catalog-filters flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
              {categories.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                      active
                        ? 'bg-[#1a3a2a] text-white shadow-md'
                        : 'bg-white/70 text-[#3d4a3e] border border-[#1a3a2a]/10 hover:bg-white hover:border-[#1a3a2a]/20'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {filteredProducts.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="product-catalog-card group bg-white rounded-xl overflow-hidden border border-[#1a3a2a]/10 hover:border-[#c8a960]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Preview Container */}
                      <div className="relative aspect-4/3 overflow-hidden bg-[#faf6ee] cursor-pointer" onClick={() => setLightboxImage({ src: product.image, title: t(product.nameKey) })}>
                        <img
                          src={product.image}
                          alt={t(product.nameKey)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-white/90 text-[#1a3a2a] text-xs font-bold px-3 py-1.5 rounded-md shadow-sm">
                            🔍 {t('products_catalog.view_image') || 'Mărește'}
                          </span>
                        </div>
                        <span className="absolute top-3 left-3 bg-[#1a3a2a]/85 backdrop-blur-md text-[#f0ead8] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                          {product.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="text-base sm:text-lg font-bold text-[#1a3a2a] font-serif mb-2 group-hover:text-[#a88b40] transition-colors">
                          {t(product.nameKey)}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#6b6b5e] leading-relaxed mb-4">
                          {t(product.descKey)}
                        </p>

                        {/* Specs Table */}
                        <div className="space-y-1.5 text-[11px] pt-3 border-t border-[#1a3a2a]/10 text-[#4a544e]">
                          {product.specs.grade && (
                            <div className="flex justify-between">
                              <span className="text-[#8a8a7d]">{t('products_catalog.specs_grade')}:</span>
                              <span className="font-semibold text-right">{product.specs.grade}</span>
                            </div>
                          )}
                          {product.specs.packaging && (
                            <div className="flex justify-between">
                              <span className="text-[#8a8a7d]">{t('products_catalog.specs_packaging')}:</span>
                              <span className="font-semibold text-right">{product.specs.packaging}</span>
                            </div>
                          )}
                          {product.specs.origin && (
                            <div className="flex justify-between">
                              <span className="text-[#8a8a7d]">{t('products_catalog.specs_origin')}:</span>
                              <span className="font-semibold text-right">{product.specs.origin}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="p-5 pt-0">
                      <button
                        type="button"
                        onClick={() => handleRequestQuote(product)}
                        className="btn btn-primary w-full justify-center text-xs py-2.5 font-bold tracking-wider"
                      >
                        {t('products_catalog.request_quote') || 'Cere Ofertă'} →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Inspirational Quote Banner */}
          <div className="quote-banner-card p-8 sm:p-12 rounded-2xl bg-[#f0ead8] border border-[#c8a960]/30 text-center text-[#1a3a2a] mb-12 shadow-sm">
            <span className="text-3xl block mb-2 opacity-60">🌰</span>
            <blockquote className="font-serif italic text-lg sm:text-2xl max-w-3xl mx-auto leading-relaxed text-[#1a3a2a]">
              "{t('products_catalog.quote_banner')}"
            </blockquote>
          </div>
        </div>
      </main>

      {/* Fullscreen Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#1a3a2a] p-4 rounded-xl overflow-hidden shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex justify-between items-center pb-3 text-white">
              <h4 className="font-serif font-bold text-lg">{lightboxImage.title}</h4>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="text-white hover:text-[#c8a960] text-2xl font-bold p-1"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
