import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { PRODUCTS, type ProductItem } from '@/data/products';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  Search,
  X,
  ShieldCheck,
  Heart,
  Brain,
  Activity,
  Sparkles,
  Droplets,
  Zap,
  Scale,
  Sun,
  Flame,
  Leaf,
  Award,
  Package,
  Globe2,
  ArrowRight,
  Maximize2,
  FileCheck,
  Sparkle
} from 'lucide-react';

interface ProductsPageProps {
  onNavigate?: (page: 'home' | 'products' | 'contact' | 'certifications', productId?: string) => void;
}

const BENEFIT_CARDS = [
  { icon: Leaf, titleKey: 'health_benefits.b1', tag: 'Polyphenols' },
  { icon: Droplets, titleKey: 'health_benefits.b2', tag: 'Omega-3 ALA' },
  { icon: Brain, titleKey: 'health_benefits.b3', tag: 'Cognition' },
  { icon: Heart, titleKey: 'health_benefits.b4', tag: 'Heart Health' },
  { icon: Activity, titleKey: 'health_benefits.b5', tag: 'Metabolism' },
  { icon: Flame, titleKey: 'health_benefits.b6', tag: 'Circulation' },
  { icon: ShieldCheck, titleKey: 'health_benefits.b7', tag: 'Cellular Defense' },
  { icon: Sparkles, titleKey: 'health_benefits.b8', tag: 'Mental Clarity' },
  { icon: Scale, titleKey: 'health_benefits.b9', tag: 'Satiety' },
  { icon: Zap, titleKey: 'health_benefits.b10', tag: 'Daily Vitality' },
  { icon: Sun, titleKey: 'health_benefits.b11', tag: 'Bone Density' },
  { icon: Award, titleKey: 'health_benefits.b12', tag: 'Longevity' },
];

export default function ProductsPage({ onNavigate }: ProductsPageProps) {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lightboxProduct, setLightboxProduct] = useState<ProductItem | null>(null);

  const categories = [
    { id: 'all', label: t('products_catalog.filter_all') || 'All Products' },
    { id: 'halves', label: t('products_catalog.filter_halves') || 'Light Halves' },
    { id: 'amber', label: t('products_catalog.filter_amber') || 'Light Amber' },
    { id: 'pieces', label: t('products_catalog.filter_pieces') || 'Quarters & Pieces' },
    { id: 'industrial', label: t('products_catalog.filter_industrial') || 'Industrial & Meal' },
    { id: 'inshell', label: t('products_catalog.filter_inshell') || 'In Shell Walnuts' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const translatedName = t(p.nameKey).toLowerCase();
      const translatedDesc = t(p.descKey).toLowerCase();
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        translatedName.includes(query) ||
        translatedDesc.includes(query) ||
        (p.specs.grade && p.specs.grade.toLowerCase().includes(query)) ||
        p.id.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, t]);

  const handleRequestQuote = (product: ProductItem) => {
    if (onNavigate) {
      onNavigate('contact', product.id);
    } else {
      window.location.hash = `#/contact?product=${product.id}`;
    }
  };

  return (
    <div className="page-wrapper page-products bg-[#faf6ee] text-[#1a3a2a] min-h-screen">
      <Navbar />

      <main className="products-page-main pt-28 pb-24 overflow-hidden relative">
        {/* Subtle Ambient Lighting Orbs */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-gradient-to-b from-[#1a3a2a]/5 via-[#c8a960]/5 to-transparent blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-80 right-0 w-[35vw] h-[35vw] rounded-full bg-[#c8a960]/10 blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-[1200px] left-0 w-[40vw] h-[40vw] rounded-full bg-[#1a3a2a]/5 blur-3xl pointer-events-none -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          
          {/* Breadcrumb Header */}
          <div className="page-breadcrumb flex items-center justify-between gap-4 mb-8 pt-2">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#6b6b5e]">
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
              <span className="text-[#c8a960]">/</span>
              <span className="text-[#1a3a2a] font-bold tracking-widest">{t('products_catalog.page_title') || 'Products'}</span>
            </div>

            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('home');
                else window.location.hash = '#/';
              }}
              className="btn btn-outline text-xs py-2 px-4 rounded-[4px] inline-flex items-center gap-2 hover:bg-[#1a3a2a] hover:text-white transition-all duration-200"
            >
              <span>←</span>
              <span>{t('contacts_page.back_home') || 'Înapoi'}</span>
            </a>
          </div>

          {/* Master Editorial Hero Banner */}
          <div className="products-hero-card mb-16 p-8 sm:p-14 lg:p-16 rounded-[4px] bg-[#12281d] text-white shadow-2xl relative overflow-hidden border border-[#c8a960]/20">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#c8a960]/25 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#c8a960]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Title & Story */}
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[4px] bg-white/10 backdrop-blur-md border border-white/15 text-[#c8a960] text-xs font-bold uppercase tracking-widest mb-6">
                  <Sparkle className="w-3.5 h-3.5 text-[#c8a960] animate-pulse" />
                  <span>{t('products_catalog.page_tag') || 'Export Grade Catalog'}</span>
                </div>

                <h1 className="heading-display text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.1] text-white font-serif">
                  {t('products_catalog.page_title') || 'Products'}
                </h1>

                <p className="text-lg sm:text-xl text-[#f0ead8] font-serif italic mb-6 border-l-2 border-[#c8a960] pl-4 py-0.5 leading-snug">
                  "{t('products_catalog.page_subtitle') || 'Our success is the result of our specialization'}"
                </p>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light max-w-3xl">
                  {t('products_catalog.intro_text')}
                </p>
              </div>

              {/* Right Column: Key Export Highlights */}
              <div className="lg:col-span-4 flex flex-col gap-3.5 bg-black/25 backdrop-blur-md p-6 rounded-[4px] border border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#c8a960] pb-1 border-b border-white/10">
                  Export Specifications
                </span>
                
                <div className="flex items-center gap-3 text-xs text-white/90">
                  <div className="w-7 h-7 rounded-[4px] bg-[#c8a960]/20 flex items-center justify-center text-[#c8a960] flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold block text-white">IFS Food 6.1 & HACCP</span>
                    <span className="text-white/60 text-[11px]">Certified Organic (BioSuisse, EU, NOP)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-white/90">
                  <div className="w-7 h-7 rounded-[4px] bg-[#c8a960]/20 flex items-center justify-center text-[#c8a960] flex-shrink-0">
                    <Package className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold block text-white">Vacuum Packed in Cartons</span>
                    <span className="text-white/60 text-[11px]">10 kg / 12.5 kg with modified atmosphere</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-white/90">
                  <div className="w-7 h-7 rounded-[4px] bg-[#c8a960]/20 flex items-center justify-center text-[#c8a960] flex-shrink-0">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold block text-white">Worldwide Delivery (FOB/CIF)</span>
                    <span className="text-white/60 text-[11px]">Full container load & combined orders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Luxury Health & Wellness Section */}
          <section className="health-benefits-section mb-20" aria-labelledby="health-benefits-title">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center justify-center gap-2 mb-2.5">
                <span className="w-8 h-px bg-[#c8a960]" />
                <span className="label-upper text-xs text-[#a88b40] font-bold tracking-widest">
                  Nutritional Excellence
                </span>
                <span className="w-8 h-px bg-[#c8a960]" />
              </div>
              
              <h2 id="health-benefits-title" className="heading-section text-2xl sm:text-4xl text-[#1a3a2a] font-serif font-bold tracking-tight mb-3">
                {t('health_benefits.section_title') || 'Health Benefits of Walnuts'}
              </h2>
              
              <p className="text-sm text-[#6b6b5e] max-w-xl mx-auto">
                {t('health_benefits.section_subtitle') || 'A nutritional powerhouse packed with essential polyphenols, healthy fats, and minerals.'}
              </p>
            </div>

            {/* Bespoke Editorial Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {BENEFIT_CARDS.map((benefit, i) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={i}
                    className="benefit-card p-5 rounded-[4px] bg-white/80 backdrop-blur-sm border border-[#1a3a2a]/10 hover:border-[#c8a960] hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="w-10 h-10 rounded-[4px] bg-[#1a3a2a]/5 group-hover:bg-[#1a3a2a] group-hover:text-[#c8a960] text-[#1a3a2a] flex items-center justify-center transition-colors duration-200 border border-[#1a3a2a]/10">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#a88b40] bg-[#faf6ee] px-2 py-0.5 rounded-[4px] border border-[#a88b40]/20">
                          {benefit.tag}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm font-semibold text-[#1a3a2a] leading-relaxed group-hover:text-[#1a3a2a] transition-colors">
                        {t(benefit.titleKey)}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-[#1a3a2a]/5 flex items-center text-[10px] text-[#8a8a7d] uppercase tracking-wider font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a27] mr-1.5" />
                      Scientifically Proven
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Product Catalog Section */}
          <section className="products-grid-section mb-20" aria-label="Product catalog list">
            {/* Section Header with Category & Search Controls */}
            <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-[4px] border border-[#1a3a2a]/10 shadow-sm mb-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#1a3a2a]/10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#a88b40] block mb-1">
                    Export Portfolio
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1a3a2a]">
                    Select Category & Specifications
                  </h3>
                </div>

                {/* Search Input */}
                <div className="relative max-w-md w-full">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a8a7d]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by caliber, grade, or cut..."
                    className="w-full bg-[#faf6ee] text-xs font-medium text-[#1a3a2a] pl-10 pr-9 py-2.5 rounded-[4px] border border-[#1a3a2a]/15 focus:outline-none focus:border-[#1a3a2a] focus:ring-1 focus:ring-[#1a3a2a] transition-all"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a8a7d] hover:text-[#1a3a2a]"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Category Segmented Controls */}
              <div className="flex flex-wrap items-center gap-2 pt-6">
                {categories.map((cat) => {
                  const active = selectedCategory === cat.id;
                  const count =
                    cat.id === 'all'
                      ? PRODUCTS.length
                      : PRODUCTS.filter((p) => p.category === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`group relative px-4 py-2 rounded-[4px] text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer inline-flex items-center gap-2 ${
                        active
                          ? 'bg-[#1a3a2a] text-white shadow-md'
                          : 'bg-[#faf6ee] text-[#3d4a3e] border border-[#1a3a2a]/10 hover:bg-white hover:border-[#1a3a2a]/30'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.2 rounded-[4px] ${
                          active
                            ? 'bg-[#c8a960] text-[#1a3a2a] font-bold'
                            : 'bg-[#1a3a2a]/10 text-[#1a3a2a]'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Results Counter */}
            <div className="flex items-center justify-between text-xs text-[#6b6b5e] font-semibold mb-6 px-1">
              <span>
                Showing <strong className="text-[#1a3a2a]">{filteredProducts.length}</strong> of {PRODUCTS.length} export specifications
              </span>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-[#a88b40] hover:underline"
                >
                  Clear search
                </button>
              )}
            </div>

            {/* No Results Fallback */}
            {filteredProducts.length === 0 && (
              <div className="bg-white rounded-[4px] p-12 text-center border border-[#1a3a2a]/10">
                <Search className="w-10 h-10 text-[#8a8a7d] mx-auto mb-3 opacity-50" />
                <h4 className="font-serif font-bold text-lg text-[#1a3a2a] mb-1">
                  No specifications match your search
                </h4>
                <p className="text-xs text-[#6b6b5e] mb-4">
                  Try searching for different terms or reset your active filters.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="btn btn-outline text-xs py-2 px-4 rounded-[4px]"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="product-catalog-card group bg-white rounded-[4px] overflow-hidden border border-[#1a3a2a]/10 hover:border-[#c8a960] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Preview Container */}
                      <div
                        className="relative aspect-[4/3] overflow-hidden bg-[#faf6ee] cursor-pointer"
                        onClick={() => setLightboxProduct(product)}
                      >
                        <img
                          src={product.image}
                          alt={t(product.nameKey)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#1a3a2a]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <span className="bg-white text-[#1a3a2a] text-xs font-bold px-3 py-1.5 rounded-[4px] shadow-md inline-flex items-center gap-1.5 transform group-hover:scale-100 scale-95 transition-transform">
                            <Maximize2 className="w-3.5 h-3.5 text-[#a88b40]" />
                            {t('products_catalog.view_image') || 'Quick View'}
                          </span>
                        </div>

                        {/* Top Category Badge */}
                        <span className="absolute top-3 left-3 bg-[#1a3a2a] text-[#c8a960] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[4px] shadow-sm border border-white/10">
                          {product.category}
                        </span>

                        {/* Caliber Pill Tag */}
                        {product.specs.grade && (
                          <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-[#1a3a2a] text-[10px] font-mono font-bold px-2 py-0.5 rounded-[4px] shadow-sm border border-[#1a3a2a]/10">
                            {product.specs.grade.split(' ')[0]}
                          </span>
                        )}
                      </div>

                      {/* Content Info */}
                      <div className="p-5">
                        <h3 className="text-base font-bold text-[#1a3a2a] font-serif mb-2 group-hover:text-[#a88b40] transition-colors leading-snug">
                          {t(product.nameKey)}
                        </h3>
                        
                        <p className="text-xs text-[#6b6b5e] leading-relaxed mb-4 line-clamp-2">
                          {t(product.descKey)}
                        </p>

                        {/* Detailed Spec Sheet */}
                        <div className="space-y-1.5 text-[11px] pt-3.5 border-t border-[#1a3a2a]/10 bg-[#faf6ee]/50 p-2.5 rounded-[4px]">
                          {product.specs.grade && (
                            <div className="flex justify-between items-center">
                              <span className="text-[#8a8a7d]">{t('products_catalog.specs_grade') || 'Grade'}:</span>
                              <span className="font-semibold text-right text-[#1a3a2a]">{product.specs.grade}</span>
                            </div>
                          )}
                          {product.specs.moisture && (
                            <div className="flex justify-between items-center">
                              <span className="text-[#8a8a7d]">{t('products_catalog.specs_moisture') || 'Moisture'}:</span>
                              <span className="font-semibold text-right text-[#2d5a27]">{product.specs.moisture}</span>
                            </div>
                          )}
                          {product.specs.packaging && (
                            <div className="flex justify-between items-center">
                              <span className="text-[#8a8a7d]">{t('products_catalog.specs_packaging') || 'Packaging'}:</span>
                              <span className="font-semibold text-right text-[#1a3a2a]">{product.specs.packaging}</span>
                            </div>
                          )}
                          {product.specs.origin && (
                            <div className="flex justify-between items-center">
                              <span className="text-[#8a8a7d]">{t('products_catalog.specs_origin') || 'Origin'}:</span>
                              <span className="font-semibold text-right text-[#1a3a2a]">{product.specs.origin}</span>
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
                        className="btn btn-primary w-full justify-center text-xs py-2.5 rounded-[4px] font-bold tracking-wider group-hover:bg-[#153123] transition-all duration-200 inline-flex items-center gap-2"
                      >
                        <span>{t('products_catalog.request_quote') || 'Request Quote'}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Wholesale Custom Orders & Packaging Banner */}
          <div className="wholesale-banner mb-16 p-8 sm:p-12 rounded-[4px] bg-white border border-[#1a3a2a]/10 shadow-md flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#a88b40] mb-2">
                <FileCheck className="w-4 h-4 text-[#a88b40]" />
                <span>Bespoke Export Solutions</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a3a2a] mb-3">
                Need Custom Calibers or Private Label Packaging?
              </h3>
              <p className="text-xs sm:text-sm text-[#6b6b5e] leading-relaxed">
                We calibrate cuts from 4mm up to jumbo in-shell sizes according to European importer requirements. Packaging options include 5kg, 10kg, 12.5kg cartons with vacuum inert gas or bulk big bags.
              </p>
            </div>

            <a
              href="#/contact"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('contact');
                else window.location.hash = '#/contact';
              }}
              className="btn btn-primary text-xs py-3.5 px-6 rounded-[4px] whitespace-nowrap font-bold tracking-wider inline-flex items-center gap-2"
            >
              <span>Contact Export Team</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Inspirational Quote Banner */}
          <div className="quote-banner-card p-10 sm:p-14 rounded-[4px] bg-[#1a3a2a] text-center text-white mb-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c8a960]/20 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10">
              <span className="text-3xl block mb-4 text-[#c8a960]">🌰</span>
              <blockquote className="font-serif italic text-lg sm:text-2xl max-w-3xl mx-auto leading-relaxed text-[#f0ead8] mb-4">
                "{t('products_catalog.quote_banner')}"
              </blockquote>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#c8a960]">
                NovaNut SRL • Quality Guaranteed Since 2005
              </span>
            </div>
          </div>

        </div>
      </main>

      {/* Fullscreen Technical Lightbox Modal */}
      {lightboxProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxProduct(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#12281d] text-white p-6 sm:p-8 rounded-[4px] overflow-hidden shadow-2xl border border-[#c8a960]/30 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#c8a960] block mb-1">
                  Technical Specification Sheet
                </span>
                <h4 className="font-serif font-bold text-xl sm:text-2xl text-white">
                  {t(lightboxProduct.nameKey)}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setLightboxProduct(null)}
                className="text-white/60 hover:text-[#c8a960] text-2xl font-bold p-1 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="bg-[#faf6ee] p-2 rounded-[4px] overflow-hidden">
                <img
                  src={lightboxProduct.image}
                  alt={t(lightboxProduct.nameKey)}
                  className="w-full h-auto object-cover rounded-[4px]"
                />
              </div>

              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  {t(lightboxProduct.descKey)}
                </p>

                <div className="space-y-2 text-xs bg-white/5 p-4 rounded-[4px] border border-white/10">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-white/60">Category:</span>
                    <span className="font-bold text-[#c8a960] uppercase">{lightboxProduct.category}</span>
                  </div>
                  {lightboxProduct.specs.grade && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-white/60">Grade / Caliber:</span>
                      <span className="font-semibold text-white">{lightboxProduct.specs.grade}</span>
                    </div>
                  )}
                  {lightboxProduct.specs.moisture && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-white/60">Moisture:</span>
                      <span className="font-semibold text-[#82ca9d]">{lightboxProduct.specs.moisture}</span>
                    </div>
                  )}
                  {lightboxProduct.specs.packaging && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-white/60">Packaging:</span>
                      <span className="font-semibold text-white">{lightboxProduct.specs.packaging}</span>
                    </div>
                  )}
                  {lightboxProduct.specs.origin && (
                    <div className="flex justify-between py-1">
                      <span className="text-white/60">Origin:</span>
                      <span className="font-semibold text-white">{lightboxProduct.specs.origin}</span>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const prod = lightboxProduct;
                    setLightboxProduct(null);
                    handleRequestQuote(prod);
                  }}
                  className="btn btn-primary w-full justify-center text-xs py-3 rounded-[4px] font-bold tracking-wider"
                >
                  Request Quote for this Batch →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
