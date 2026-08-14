import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StorytellingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const qRef = useRef<HTMLDivElement>(null);
  const sRef = useRef<HTMLDivElement>(null);
  const aRef = useRef<HTMLDivElement>(null);

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

  const bulletPoints = [
    'Carefully selected raw materials',
    'Advanced processing & strict quality control',
    'Sustainable & ethical practices',
    'Reliable logistics & timely delivery',
  ];

  return (
    <section ref={sectionRef} className="storytelling-section">
      <div className="storytelling-sticky">
        <div className="container storytelling-layout">
          <div className="storytelling-content">
            
            {/* QUALITY */}
            <div ref={qRef} id="quality" className="story-block">
              <p className="label-upper about-label">Step 1: Quality</p>
              <h2 className="heading-section about-title">
                The Perfect Nut,<br />Straight From The Source.
              </h2>
              <p className="about-desc">
                Every NovaNut begins in the world's finest orchards. We select only the highest-grade walnuts, still protected in their natural shells, ensuring maximum freshness and nutritional value before they even reach our facilities.
              </p>
            </div>

            {/* SUSTAINABILITY */}
            <div ref={sRef} id="sustainability" className="story-block">
              <p className="label-upper about-label">Step 2: Sustainability</p>
              <h2 className="heading-section about-title">
                Ethical Practices.<br />Zero Waste.
              </h2>
              <p className="about-desc">
                Our extraction process is fully sustainable. The shells are completely recycled for biomass energy, and every drop of water is reclaimed. We believe premium quality should not cost the earth.
              </p>
            </div>

            {/* ABOUT US */}
            <div ref={aRef} id="about" className="story-block">
              <p className="label-upper about-label">About NovaNut</p>
              <h2 className="heading-section about-title">
                Quality You Can Taste.<br />
                Partnerships You Can Trust.
              </h2>
              <p className="about-desc">
                With years of experience in walnut cultivation, processing and export, we deliver the finest walnut kernels to our global partners.
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
                Contact Us
              </a>
            </div>

          </div>
          {/* The right side is intentionally left empty for the 3D Walnut */}
        </div>
      </div>
    </section>
  );
}
