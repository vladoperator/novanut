import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container">
        
        {/* Left: Logo */}
        <a href="#hero" className="nav-logo pointer-events-auto group" aria-label="NovaNut home">
          <div className="nav-logo-icon shadow-md border border-[#c8a960]/30 transition-transform group-hover:scale-105">
            🌰
          </div>
          <div className="nav-logo-text">
            <span className="nav-logo-name">NovaNut</span>
            <span className="nav-logo-sub">Walnut Kernels Export</span>
          </div>
        </a>

        {/* Center: Navigation Links */}
        <ul className="nav-links hidden lg:flex">
          <li><a href="#hero" className="nav-link">{t('nav.home') || 'Home'}</a></li>
          <li><a href="#quality" className="nav-link">{t('nav.story') || 'About Us'}</a></li>
          <li><a href="#products" className="nav-link">{t('nav.products') || 'Products'}</a></li>
          <li><a href="#quality" className="nav-link">{t('nav.quality') || 'Quality'}</a></li>
          <li><a href="#sustainability" className="nav-link">{t('nav.sustainability') || 'Sustainability'}</a></li>
          <li><a href="#contact" className="nav-link">{t('nav.contact') || 'Contact'}</a></li>
        </ul>

        {/* Right: Actions & Language Switcher */}
        <div className="nav-right flex items-center gap-4 sm:gap-6">
          <a
            href="#contact"
            className="btn btn-primary btn-arrow hidden sm:inline-flex text-[11px] px-6 py-3 shadow-sm hover:shadow-md tracking-wider"
          >
            {t('nav.quote') || 'REQUEST A QUOTE'}
          </a>

          {/* Premium Language Switcher */}
          <LanguageSwitcher />
        </div>
        
      </div>
    </nav>
  );
}
