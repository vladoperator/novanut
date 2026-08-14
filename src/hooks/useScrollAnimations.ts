import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useScrollAnimations — GSAP ScrollTrigger-based section entrance animations
 *
 * Animation philosophy (Emil Kowalski / Apple Design):
 * - ease-out for entrances (starts fast, feels responsive)
 * - Stagger 50-80ms between items
 * - Duration 300-500ms for section reveals
 * - Reduced motion: opacity-only, no transforms
 */
export default function useScrollAnimations() {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // ===== Hero Section =====
      gsap.from('.hero .anim-hidden', {
        y: prefersReducedMotion ? 0 : 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.3,
      });

      // ===== Hero Badge =====
      gsap.from('.hero-badge', {
        scale: prefersReducedMotion ? 1 : 0.8,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.5)',
        delay: 0.9,
      });

      // ===== Feature Cards =====
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: '.features-bar',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: prefersReducedMotion ? 0 : 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power3.out',
      });

      // ===== Stats Bar =====
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: '.stats-bar',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: prefersReducedMotion ? 0 : 20,
        scale: prefersReducedMotion ? 1 : 0.9,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
      });

      // ===== Product Cards =====
      gsap.from('.product-card', {
        scrollTrigger: {
          trigger: '.products',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        y: prefersReducedMotion ? 0 : 30,
        scale: prefersReducedMotion ? 1 : 0.95,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
      });

      // ===== Products Header =====
      gsap.from('.products-header', {
        scrollTrigger: {
          trigger: '.products',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: prefersReducedMotion ? 0 : 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      });

      // ===== CTA Banner =====
      gsap.from('.cta-banner .cta-content, .cta-banner .cta-actions, .cta-banner .cta-contact', {
        scrollTrigger: {
          trigger: '.cta-banner',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: prefersReducedMotion ? 0 : 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // ===== Footer =====
      gsap.from('.footer-top > *', {
        scrollTrigger: {
          trigger: '.footer',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: prefersReducedMotion ? 0 : 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);
}
