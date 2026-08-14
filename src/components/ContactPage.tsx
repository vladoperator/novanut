import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { COMPANY_CONTACT, PRODUCTS } from '@/data/products';
import Navbar from './Navbar';
import Footer from './Footer';

interface ContactPageProps {
  initialProductId?: string;
  onNavigate?: (page: 'home' | 'products' | 'contact' | 'certifications') => void;
}

export default function ContactPage({ initialProductId, onNavigate }: ContactPageProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: initialProductId || '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialProductId) {
      setFormData((prev) => ({ ...prev, product: initialProductId }));
    }
  }, [initialProductId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        product: '',
        message: '',
      });
    }, 800);
  };

  return (
    <div className="page-wrapper page-contact">
      <Navbar />

      <main className="contact-page-main pt-28 pb-20">
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
              <span className="text-[#1a3a2a] font-bold">{t('contacts_page.title')}</span>
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

          {/* Page Hero Header */}
          <div className="contact-hero-card mb-12 p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#1a3a2a] via-[#153123] to-[#0f2419] text-white shadow-xl relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#c8a960] mb-3">
                {t('contacts_page.tag')}
              </span>
              <h1 className="heading-display text-3xl sm:text-5xl font-bold mb-4 tracking-tight">
                {t('contacts_page.title')}
              </h1>
              <p className="text-lg sm:text-xl text-[#f0ead8] font-serif italic">
                "{t('contacts_page.subtitle')}"
              </p>
            </div>
          </div>

          {/* Interactive Google Map */}
          <div className="map-container rounded-2xl overflow-hidden shadow-lg border border-[#1a3a2a]/15 mb-14 bg-[#faf6ee]">
            <div className="p-4 bg-white/80 border-b border-[#1a3a2a]/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1a3a2a]">
                <span>📍</span>
                <span>{COMPANY_CONTACT.address}</span>
              </div>
              <a
                href="https://maps.google.com/?q=47.119636,28.717952"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline text-xs py-1.5 px-3.5"
              >
                {t('contacts_page.directions_btn') || 'Google Maps'} ↗
              </a>
            </div>
            <div className="relative aspect-21/9 min-h-[360px] w-full">
              <iframe
                title="NovaNut Sireți Location Map"
                src={COMPANY_CONTACT.googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          {/* Contact Details & Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-16">
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-[#1a3a2a]/10 shadow-sm space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-serif text-[#1a3a2a] mb-2">
                    {COMPANY_CONTACT.name}
                  </h3>
                  <p className="text-xs text-[#a88b40] font-bold uppercase tracking-wider mb-4">
                    Unitate de Procesare & Export
                  </p>
                  <p className="text-sm text-[#4a544e] leading-relaxed">
                    {COMPANY_CONTACT.address}
                  </p>
                </div>

                <hr className="border-[#1a3a2a]/10" />

                {/* Direct Phone & Fax */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">📞</span>
                    <div>
                      <span className="block text-xs font-bold text-[#8a8a7d] uppercase">{t('contacts_page.phone_label')}</span>
                      <a href={`tel:${COMPANY_CONTACT.phoneClean}`} className="font-semibold text-[#1a3a2a] hover:text-[#a88b40] transition-colors">
                        {COMPANY_CONTACT.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-lg">📠</span>
                    <div>
                      <span className="block text-xs font-bold text-[#8a8a7d] uppercase">{t('contacts_page.fax_label')}</span>
                      <div className="text-[#4a544e]">
                        <span>{COMPANY_CONTACT.fax1}</span>
                        <span className="mx-1.5">•</span>
                        <span>{COMPANY_CONTACT.fax2}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="border-[#1a3a2a]/10" />

                {/* Direct Emails */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">✉️</span>
                    <div>
                      <span className="block text-xs font-bold text-[#8a8a7d] uppercase">{t('contacts_page.email_label')}</span>
                      <div className="space-y-1 mt-0.5">
                        <a href={`mailto:${COMPANY_CONTACT.email1}`} className="block font-semibold text-[#1a3a2a] hover:text-[#a88b40] transition-colors">
                          {COMPANY_CONTACT.email1}
                        </a>
                        <a href={`mailto:${COMPANY_CONTACT.email2}`} className="block font-semibold text-[#1a3a2a] hover:text-[#a88b40] transition-colors">
                          {COMPANY_CONTACT.email2}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-lg">🕒</span>
                    <div>
                      <span className="block text-xs font-bold text-[#8a8a7d] uppercase">{t('contacts_page.hours_label')}</span>
                      <span className="text-xs text-[#4a544e] font-medium">{t('contacts_page.hours_val')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact & Quote Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#1a3a2a]/10 shadow-md">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-serif text-[#1a3a2a] mb-2">
                    {t('contacts_page.form_title')}
                  </h3>
                  <p className="text-sm text-[#6b6b5e]">
                    {t('contacts_page.form_subtitle')}
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-6 rounded-xl bg-[#1a3a2a]/5 border border-[#1a3a2a]/15 text-center space-y-3">
                    <span className="text-3xl block">✓</span>
                    <h4 className="text-lg font-bold text-[#1a3a2a]">
                      {t('contacts_page.success_msg')}
                    </h4>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="btn btn-outline text-xs py-2 px-4 mt-2"
                    >
                      Trimite un alt mesaj
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1a3a2a] uppercase tracking-wider mb-1.5">
                          {t('contacts_page.name_placeholder')} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-2.5 rounded-lg border border-[#1a3a2a]/20 bg-[#faf6ee]/50 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#1a3a2a] focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1a3a2a] uppercase tracking-wider mb-1.5">
                          {t('contacts_page.email_placeholder')} *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. john@company.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-[#1a3a2a]/20 bg-[#faf6ee]/50 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#1a3a2a] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1a3a2a] uppercase tracking-wider mb-1.5">
                          {t('contacts_page.phone_placeholder')}
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+40 / +373 / +49..."
                          className="w-full px-4 py-2.5 rounded-lg border border-[#1a3a2a]/20 bg-[#faf6ee]/50 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#1a3a2a] focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1a3a2a] uppercase tracking-wider mb-1.5">
                          {t('contacts_page.product_interest')}
                        </label>
                        <select
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-[#1a3a2a]/20 bg-[#faf6ee]/50 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#1a3a2a] focus:bg-white transition-colors"
                        >
                          <option value="">{t('contacts_page.product_select_default')}</option>
                          {PRODUCTS.map((p) => (
                            <option key={p.id} value={p.id}>
                              {t(p.nameKey)}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1a3a2a] uppercase tracking-wider mb-1.5">
                        Mesaj / Volum Dorit *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t('contacts_page.message_placeholder')}
                        className="w-full px-4 py-2.5 rounded-lg border border-[#1a3a2a]/20 bg-[#faf6ee]/50 text-sm text-[#1a1a1a] focus:outline-none focus:border-[#1a3a2a] focus:bg-white transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full justify-center text-sm py-3 font-bold tracking-wider shadow-md hover:shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? t('contacts_page.sending') : t('contacts_page.submit_btn')} →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Inspirational Quote Banner */}
          <div className="quote-banner-card p-8 sm:p-12 rounded-2xl bg-[#f0ead8] border border-[#c8a960]/30 text-center text-[#1a3a2a] mb-12 shadow-sm">
            <span className="text-3xl block mb-2 opacity-60">🌰</span>
            <blockquote className="font-serif italic text-lg sm:text-2xl max-w-3xl mx-auto leading-relaxed text-[#1a3a2a]">
              "{t('contacts_page.quote_banner')}"
            </blockquote>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
