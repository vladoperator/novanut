import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';

interface CertificationsPageProps {
  onNavigate?: (page: 'home' | 'products' | 'contact' | 'certifications') => void;
}

export default function CertificationsPage({ onNavigate }: CertificationsPageProps) {
  const { t } = useTranslation();

  const certificatesList = [
    {
      code: 'EU-BIO',
      title: t('certifications_page.cert_eu'),
      desc: t('certifications_page.cert_eu_desc'),
      badge: '🇪🇺 Organic EU',
      since: '2006',
    },
    {
      code: 'USDA-NOP',
      title: t('certifications_page.cert_usda'),
      desc: t('certifications_page.cert_usda_desc'),
      badge: '🇺🇸 USDA NOP',
      since: '2006',
    },
    {
      code: 'BioSuisse',
      title: t('certifications_page.cert_biosuisse'),
      desc: t('certifications_page.cert_biosuisse_desc'),
      badge: '🇨🇭 BioSuisse',
      since: '2006',
    },
    {
      code: 'KRAV',
      title: t('certifications_page.cert_krav'),
      desc: t('certifications_page.cert_krav_desc'),
      badge: '🇸🇪 KRAV Sweden',
      since: '2006',
    },
    {
      code: 'Naturland',
      title: t('certifications_page.cert_naturland'),
      desc: t('certifications_page.cert_naturland_desc'),
      badge: '🇩🇪 Naturland',
      since: '2006',
    },
    {
      code: 'IFS-FOOD',
      title: t('certifications_page.cert_ifs'),
      desc: t('certifications_page.cert_ifs_desc'),
      badge: '🇩🇪 IFS Food 6.1 (DQS)',
      since: '2006',
    },
    {
      code: 'HACCP',
      title: t('certifications_page.cert_haccp'),
      desc: t('certifications_page.cert_haccp_desc'),
      badge: '🛡️ HACCP & ISO',
      since: '2006',
    },
    {
      code: 'KOSHER',
      title: t('certifications_page.cert_kosher'),
      desc: t('certifications_page.cert_kosher_desc'),
      badge: '✡️ Kosher Certified',
      since: '2006',
    },
  ];

  return (
    <div className="page-wrapper page-certifications">
      <Navbar />

      <main className="certifications-page-main pt-28 pb-20">
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
              <span className="text-[#1a3a2a] font-bold">{t('certifications_page.title')}</span>
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
              <span>{t('certifications_page.back_home') || 'Înapoi'}</span>
            </a>
          </div>

          {/* Hero Header */}
          <div className="certifications-hero-card mb-12 p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#1a3a2a] via-[#153123] to-[#0f2419] text-white shadow-xl relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#c8a960] mb-3">
                {t('certifications_page.tag')}
              </span>
              <h1 className="heading-display text-3xl sm:text-5xl font-bold mb-4 tracking-tight">
                {t('certifications_page.title')}
              </h1>
              <p className="text-lg sm:text-xl text-[#f0ead8] font-serif italic mb-6">
                "{t('certifications_page.subtitle')}"
              </p>
              <div className="space-y-4 text-sm sm:text-base text-white/85 leading-relaxed">
                <p>{t('certifications_page.p1')}</p>
                <p>{t('certifications_page.p2')}</p>
              </div>
            </div>
          </div>

          {/* Official Certificates Graphic Banner */}
          <div className="official-cert-banner-card bg-white rounded-2xl p-6 sm:p-10 border border-[#1a3a2a]/10 shadow-md mb-14 text-center">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#a88b40] mb-4">
              Certificări Oficiale Acreditate
            </h3>
            <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-[#1a3a2a]/10 bg-[#faf6ee]/50 p-4">
              <img
                src="https://www.novanut.md/upfiles/menu/470a164b20979b35e4872c54933f292124608258.png"
                alt="NovaNut Official Certifications"
                className="w-full h-auto object-contain mx-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Detailed Certification Standards Grid */}
          <section className="certifications-grid-section mb-16" aria-label="Certifications Breakdown">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="label-upper text-xs text-[#a88b40] font-bold">Standarde Verificate</span>
              <h2 className="heading-section text-2xl sm:text-3xl text-[#1a3a2a] mt-1 mb-2">
                Conformitate & Audit Internațional
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certificatesList.map((cert, i) => (
                <div
                  key={i}
                  className="cert-card p-6 rounded-xl bg-white border border-[#1a3a2a]/10 hover:border-[#c8a960] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#1a3a2a]/5 text-[#1a3a2a] border border-[#1a3a2a]/10">
                        {cert.badge}
                      </span>
                      <span className="text-[11px] font-mono text-[#a88b40] font-bold">
                        Din {cert.since}
                      </span>
                    </div>
                    <h3 className="text-base font-serif font-bold text-[#1a3a2a] mb-2 group-hover:text-[#a88b40] transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-[#6b6b5e] leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#1a3a2a]/10 flex items-center justify-between text-[11px] text-[#8a8a7d]">
                    <span>Status:</span>
                    <span className="font-bold text-[#2d5a27] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a27] inline-block" />
                      Activ / Re-auditat
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Inspirational Quote Banner */}
          <div className="quote-banner-card p-8 sm:p-12 rounded-2xl bg-[#f0ead8] border border-[#c8a960]/30 text-center text-[#1a3a2a] mb-12 shadow-sm">
            <span className="text-3xl block mb-2 opacity-60">🌰</span>
            <blockquote className="font-serif italic text-lg sm:text-2xl max-w-3xl mx-auto leading-relaxed text-[#1a3a2a]">
              "{t('certifications_page.quote_banner')}"
            </blockquote>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
