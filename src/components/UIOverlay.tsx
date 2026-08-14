import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesBar from './FeaturesBar';
import StorytellingSection from './StorytellingSection';
import StatsBar from './StatsBar';
import CTABanner from './CTABanner';
import Footer from './Footer';
import useScrollAnimations from '../hooks/useScrollAnimations';

export default function UIOverlay() {
  useScrollAnimations();

  return (
    <div className="overlay-root">
      <a href="#hero" className="sr-only" style={{ pointerEvents: 'auto' }}>
        Skip to main content
      </a>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesBar />
        <StorytellingSection />
        <StatsBar />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
