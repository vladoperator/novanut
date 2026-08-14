import { useState, useEffect } from 'react';
import SmoothScrollProvider from './components/SmoothScrollProvider';
import Canvas3D from './components/Canvas3D';
import UIOverlay from './components/UIOverlay';
import ProductsPage from './components/ProductsPage';
import ContactPage from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'products' | 'contact'>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | undefined>();

  useEffect(() => {
    const handleRoute = () => {
      const hash = window.location.hash || '#/';
      if (hash.startsWith('#/products')) {
        setCurrentPage('products');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash.startsWith('#/contact')) {
        setCurrentPage('contact');
        const queryPart = hash.split('?')[1];
        if (queryPart) {
          const urlParams = new URLSearchParams(queryPart);
          setSelectedProductId(urlParams.get('product') || undefined);
        } else {
          setSelectedProductId(undefined);
        }
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentPage('home');
        if (hash.includes('about') || hash.includes('quality')) {
          setTimeout(() => {
            const el = document.getElementById('story');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    handleRoute();
    window.addEventListener('hashchange', handleRoute);
    return () => window.removeEventListener('hashchange', handleRoute);
  }, []);

  const handleNavigate = (page: 'home' | 'products' | 'contact', productId?: string) => {
    setSelectedProductId(productId);
    if (page === 'products') {
      window.location.hash = '#/products';
    } else if (page === 'contact') {
      window.location.hash = productId ? `#/contact?product=${productId}` : '#/contact';
    } else {
      window.location.hash = '#/';
    }
  };

  if (currentPage === 'products') {
    return <ProductsPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'contact') {
    return <ContactPage initialProductId={selectedProductId} onNavigate={handleNavigate} />;
  }

  return (
    <SmoothScrollProvider>
      <Canvas3D />
      <UIOverlay />
    </SmoothScrollProvider>
  );
}
