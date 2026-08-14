import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollContext } from './SmoothScrollProvider';

gsap.registerPlugin(ScrollTrigger);

export default function StorytellingSection() {
  const { t } = useTranslation();
  const { lenisRef } = useScrollContext();
  const sectionRef = useRef<HTMLElement>(null);
  const qRef = useRef<HTMLDivElement>(null);
  const sRef = useRef<HTMLDivElement>(null);
  const aRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // The entire section is 300vh.
      // 0-33%: Quality (fade in then out)
      // 33-66%: Sustainability (fade in then out)
      // 66-100%: About Us (fade in)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.33) {
              setActiveStep(0);
            } else if (p < 0.66) {
              setActiveStep(1);
            } else {
              setActiveStep(2);
            }
          },
        },
      });

      // Quality block
      tl.to(qRef.current, { opacity: 1, y: 0, duration: 1 })
        .to(qRef.current, { opacity: 0, y: -20, duration: 1 })
        
      // Sustainability block
        .to(sRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
        .to(sRef.current, { opacity: 0, y: -20, duration: 1 })
        
      // About Us block
        .to(aRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
        // Hold the About Us visible until the section ends
        .to(aRef.current, { opacity: 1, duration: 1 });
        
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToStep = (stepIndex: number) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const currentScroll = window.scrollY;
    const sectionTop = currentScroll + rect.top;
    const sectionHeight = sectionRef.current.offsetHeight - window.innerHeight;

    // Progress target: 0.05 for step 0, 0.45 for step 1, 0.85 for step 2
    const targetFractions = [0.05, 0.48, 0.85];
    const targetScroll = sectionTop + sectionHeight * targetFractions[stepIndex];

    if (lenisRef?.current) {
      lenisRef.current.scrollTo(targetScroll, { duration: 1.2 });
    } else {
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  const bulletPoints = [
    t('story.bullet1'),
    t('story.bullet2'),
    t('story.bullet3'),
    t('story.bullet4'),
  ];

  const steps = [
    { index: 0, name: t('story.indicator_step1'), short: '01' },
    { index: 1, name: t('story.indicator_step2'), short: '02' },
    { index: 2, name: t('story.indicator_step3'), short: '03' },
  ];

  return (
    <section ref={sectionRef} className="storytelling-section" id="story">
      <div className="storytelling-sticky">
        <div className="container storytelling-layout">
          
          <div className="story-indicators-wrapper">
            {/* Step Navigation Dots on the Left */}
            <nav className="story-dots-nav" aria-label="Story steps navigation">
              {steps.map((s) => {
                const isActive = activeStep === s.index;
                return (
                  <button
                    key={s.index}
                    type="button"
                    onClick={() => scrollToStep(s.index)}
                    className={`story-dot-btn ${isActive ? 'active' : ''}`}
                    aria-label={`Go to ${s.name}`}
                    aria-current={isActive ? 'step' : undefined}
                  >
                    <div className="story-dot-pill" />
                    <span className="story-dot-tooltip">
                      {s.name}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Main Content Blocks */}
            <div className="storytelling-content">
              
              {/* QUALITY */}
              <div ref={qRef} id="quality" className="story-block">
                <p className="label-upper about-label">{t('story.step1_tag')}</p>
                <h2 className="heading-section about-title whitespace-pre-line">
                  {t('story.step1_title')}
                </h2>
                <p className="about-desc">
                  {t('story.step1_desc')}
                </p>
              </div>

              {/* SUSTAINABILITY */}
              <div ref={sRef} id="sustainability" className="story-block">
                <p className="label-upper about-label">{t('story.step2_tag')}</p>
                <h2 className="heading-section about-title whitespace-pre-line">
                  {t('story.step2_title')}
                </h2>
                <p className="about-desc">
                  {t('story.step2_desc')}
                </p>
              </div>

              {/* ABOUT US */}
              <div ref={aRef} id="about" className="story-block">
                <p className="label-upper about-label">{t('story.step3_tag')}</p>
                <h2 className="heading-section about-title whitespace-pre-line">
                  {t('story.step3_title')}
                </h2>
                <p className="about-desc">
                  {t('story.step3_desc')}
                </p>
                <ul className="about-list">
                  {bulletPoints.map((point, i) => (
                    <li key={i} className="about-list-item">
                      <span className="check" aria-hidden="true">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn-outline btn-arrow">
                  {t('story.contact_btn')}
                </a>
              </div>

            </div>
          </div>

          {/* The right side is intentionally left empty for the 3D Walnut */}
        </div>
      </div>
    </section>
  );
}
