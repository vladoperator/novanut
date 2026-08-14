import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';
import { Leaf, ShieldCheck, Shield, Star, Award, CheckCircle2, Globe2, FileBadge } from 'lucide-react';

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
      badge: 'Organic EU',
      icon: <Leaf className="w-6 h-6 text-[#1a3a2a]" />,
      since: '2006',
    },
    {
      code: 'USDA-NOP',
      title: t('certifications_page.cert_usda'),
      desc: t('certifications_page.cert_usda_desc'),
      badge: 'USDA NOP',
      icon: <Globe2 className="w-6 h-6 text-[#1a3a2a]" />,
      since: '2006',
    },
    {
      code: 'BioSuisse',
      title: t('certifications_page.cert_biosuisse'),
      desc: t('certifications_page.cert_biosuisse_desc'),
      badge: 'BioSuisse',
      icon: <CheckCircle2 className="w-6 h-6 text-[#1a3a2a]" />,
      since: '2006',
    },
    {
      code: 'KRAV',
      title: t('certifications_page.cert_krav'),
      desc: t('certifications_page.cert_krav_desc'),
      badge: 'KRAV Sweden',
      icon: <Award className="w-6 h-6 text-[#1a3a2a]" />,
      since: '2006',
    },
    {
      code: 'Naturland',
      title: t('certifications_page.cert_naturland'),
      desc: t('certifications_page.cert_naturland_desc'),
      badge: 'Naturland',
      icon: <Leaf className="w-6 h-6 text-[#1a3a2a]" />,
      since: '2006',
    },
    {
      code: 'IFS-FOOD',
      title: t('certifications_page.cert_ifs'),
      desc: t('certifications_page.cert_ifs_desc'),
      badge: 'IFS Food 6.1',
      icon: <ShieldCheck className="w-6 h-6 text-[#1a3a2a]" />,
      since: '2006',
    },
    {
      code: 'HACCP',
      title: t('certifications_page.cert_haccp'),
      desc: t('certifications_page.cert_haccp_desc'),
      badge: 'HACCP & ISO',
      icon: <Shield className="w-6 h-6 text-[#1a3a2a]" />,
      since: '2006',
    },
    {
      code: 'KOSHER',
      title: t('certifications_page.cert_kosher'),
      desc: t('certifications_page.cert_kosher_desc'),
      badge: 'Kosher',
      icon: <Star className="w-6 h-6 text-[#1a3a2a]" />,
      since: '2006',
    },
  ];

  return (
    <div className="page-wrapper page-certifications">
      <Navbar />

      <main className="certifications-page-main pt-28 pb-20 overflow-hidden relative">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#1a3a2a]/10 to-transparent pointer-events-none -z-10" />
        <div className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#c8a960]/10 blur-3xl pointer-events-none -z-10" />
        
        <div className="container relative z-10">
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
              <span className="text-[#c8a960]">/</span>
              <span className="text-[#1a3a2a] font-bold">{t('certifications_page.title')}</span>
            </div>

            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('home');
                else window.location.hash = '#/';
              }}
              className="btn btn-outline text-xs py-2 px-4 inline-flex items-center gap-2 hover:bg-[#1a3a2a] hover:text-white transition-all duration-300"
            >
              <span>←</span>
              <span>{t('certifications_page.back_home') || 'Înapoi'}</span>
            </a>
          </div>

          {/* Premium Hero Header */}
          <div className="certifications-hero-card mb-16 p-10 sm:p-16 rounded-3xl bg-[#1a3a2a] text-white shadow-2xl relative overflow-hidden group">
            {/* Hero Graphic Overlays */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#c8a960]/30 via-transparent to-transparent opacity-80" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700" />
            
            <div className="max-w-3xl relative z-10 flex flex-col justify-center h-full">
              <div className="inline-flex items-center gap-2 mb-4">
                <FileBadge className="w-5 h-5 text-[#c8a960]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#c8a960]">
                  {t('certifications_page.tag')}
                </span>
              </div>
              <h1 className="heading-display text-4xl sm:text-6xl font-bold mb-6 tracking-tight leading-tight">
                {t('certifications_page.title')}
              </h1>
              <p className="text-xl sm:text-2xl text-[#f0ead8] font-serif italic mb-8 border-l-4 border-[#c8a960] pl-4">
                "{t('certifications_page.subtitle')}"
              </p>
              <div className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed font-light max-w-2xl">
                <p>{t('certifications_page.p1')}</p>
                <p>{t('certifications_page.p2')}</p>
              </div>
            </div>
          </div>

          {/* Official Certificates Graphic Banner */}
          <div className="official-cert-banner-card bg-white/60 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-20 text-center relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1a3a2a] text-[#c8a960] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
              Oficial recunoscut
            </div>
            <div className="max-w-5xl mx-auto flex items-center justify-center p-4">
              <img
                src="https://www.novanut.md/upfiles/menu/470a164b20979b35e4872c54933f292124608258.png"
                alt="NovaNut Official Certifications"
                className="w-full h-auto object-contain mx-auto mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          </div>

          {/* Detailed Certification Standards Grid */}
          <section className="certifications-grid-section mb-20" aria-label="Certifications Breakdown">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-12 h-px bg-[#c8a960]/50"></span>
                <span className="label-upper text-[11px] text-[#a88b40] font-bold tracking-widest">Standarde Verificate</span>
                <span className="w-12 h-px bg-[#c8a960]/50"></span>
              </div>
              <h2 className="heading-section text-3xl sm:text-4xl text-[#1a3a2a] font-bold">
                Conformitate & Audit Internațional
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {certificatesList.map((cert, i) => (
                <div
                  key={i}
                  className="cert-premium-card group relative p-8 rounded-2xl bg-white border border-[#1a3a2a]/10 overflow-hidden flex flex-col justify-between"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#faf6ee] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                  
                  {/* Decorative top border */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#1a3a2a]/10 group-hover:bg-[#c8a960] transition-colors duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#faf6ee] flex items-center justify-center border border-[#1a3a2a]/10 group-hover:border-[#c8a960]/30 group-hover:scale-110 transition-all duration-300 shadow-sm">
                        {cert.icon}
                      </div>
                      <span className="text-[10px] font-mono text-[#a88b40] font-bold uppercase bg-[#a88b40]/10 px-2.5 py-1 rounded-full">
                        Din {cert.since}
                      </span>
                    </div>
                    
                    <div className="inline-block px-2.5 py-1 rounded bg-[#1a3a2a] text-white text-[10px] font-bold tracking-wider uppercase mb-4 shadow-sm">
                      {cert.badge}
                    </div>
                    
                    <h3 className="text-lg font-serif font-bold text-[#1a3a2a] mb-3 group-hover:text-[#a88b40] transition-colors">
                      {cert.title}
                    </h3>
                    
                    <p className="text-xs text-[#6b6b5e] leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                  
                  <div className="relative z-10 mt-6 pt-4 border-t border-[#1a3a2a]/10 flex items-center justify-between text-[11px] font-medium text-[#8a8a7d]">
                    <span>Status Acreditare:</span>
                    <span className="font-bold text-[#2d5a27] flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2d5a27] opacity-40"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2d5a27]"></span>
                      </span>
                      Activ
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Inspirational Quote Banner */}
          <div className="quote-banner-premium p-10 sm:p-16 rounded-3xl bg-[#1a3a2a] relative overflow-hidden text-center text-white mb-12 shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#c8a960]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#c8a960]/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <Award className="w-12 h-12 text-[#c8a960] mx-auto mb-6 opacity-80" />
              <blockquote className="font-serif italic text-xl sm:text-3xl max-w-4xl mx-auto leading-relaxed text-[#f0ead8]">
                "{t('certifications_page.quote_banner')}"
              </blockquote>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
