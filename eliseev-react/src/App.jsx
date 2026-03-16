import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

// Import all sections
import Header from './components/Header';
import Hero from './components/Hero';
import Context from './components/Context';
import SocialProof from './components/SocialProof';
import Approach from './components/Approach';
import Architecture from './components/Architecture';
import Portfolio from './components/Portfolio';
import Visual from './components/Visual';
import Cases from './components/Cases';
import PartnerCases from './components/PartnerCases';
import Stages from './components/Stages';
import Pricing from './components/Pricing';
import Assumptions from './components/Assumptions';
import Result from './components/Result';
import Platform from './components/Platform';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

gsap.registerPlugin(ScrollTrigger);

function App() {

  useLayoutEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Context definition for GSAP to cleanly revert animations on unmount
    let ctx = gsap.context(() => {
      
      // --- Hero Animations ---
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl.to(".hero-title", { y: 0, opacity: 1, duration: 1.2, delay: 0.2 })
            .to(".hero-subtitle", { y: 0, opacity: 1, duration: 1.2 }, "-=1")
            .to(".hero-glass-panel", { y: 0, opacity: 1, duration: 1.2 }, "-=0.8");

      // --- Hero Interactive Gallery (Mousemove parallax) ---
      const heroGalleryItems = document.querySelectorAll('.hero-gallery-item');
      const heroSection = document.querySelector('.hero');
      
      let handleMouseMove, handleMouseLeave;

      if (heroSection && heroGalleryItems.length > 0) {
        handleMouseMove = (e) => {
          const rect = heroSection.getBoundingClientRect();
          const xPos = (e.clientX - rect.left) / rect.width - 0.5;
          const yPos = (e.clientY - rect.top) / rect.height - 0.5;
          
          heroGalleryItems.forEach((item, index) => {
            const depth = (index % 3) + 1;
            const movementX = xPos * 25 * depth;
            const movementY = yPos * 25 * depth; 
            const rotationX = -yPos * 5 * depth;
            const rotationY = xPos * 5 * depth; 
            
            gsap.to(item, {
              x: movementX, y: movementY, rotationX, rotationY,
              duration: 1.5, ease: "power2.out", overwrite: "auto"
            });
          });
        };

        handleMouseLeave = () => {
          gsap.to(heroGalleryItems, {
            x: 0, y: 0, rotationX: 0, rotationY: 0,
            duration: 2, ease: "power2.out", overwrite: "auto"
          });
        };

        heroSection.addEventListener('mousemove', handleMouseMove);
        heroSection.addEventListener('mouseleave', handleMouseLeave);
      }

      // --- Hero Matrix & Scroll Animations (Desktop/Tablet only) ---
      let mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        // --- Hero Morph Transition to Context ---
        gsap.to(".hero-content", {
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
          y: -150, scale: 0.95, opacity: 0, ease: "none"
        });

        gsap.to(".hero-gallery-item", {
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 },
          y: (i) => (i % 2 === 0 ? -200 : 200) - (i * 20),
          x: (i) => (i % 2 !== 0 ? -150 : 150),
          scale: 1.2, opacity: 0, rotationZ: (i) => (i % 2 === 0 ? 15 : -15), ease: "none"
        });

        gsap.to(".hero-bg", {
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
          yPercent: 15, scale: 0.95, opacity: 0.5, ease: "none"
        });
        
        // --- Header Adaptivity (Dark text on light sections) ---
        const lightSections = document.querySelectorAll('.context, .architecture, .visual, .result, .platform'); 
        lightSections.forEach(section => {
          ScrollTrigger.create({
            trigger: section,
            start: "top 100px", end: "bottom 100px",
            onEnter: () => document.querySelector(".header").classList.add("is-light-bg"),
            onLeave: () => document.querySelector(".header").classList.remove("is-light-bg"),
            onEnterBack: () => document.querySelector(".header").classList.add("is-light-bg"),
            onLeaveBack: () => document.querySelector(".header").classList.remove("is-light-bg")
          });
        });

        return () => {
          // cleanup function for matchMedia if needed
          document.querySelector(".header").classList.remove("is-light-bg");
        };
      });

      mm.add("(max-width: 768px)", () => {
        // Simple hero fade out on mobile to keep it clean
        gsap.to(".hero-content", {
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
          y: -50, opacity: 0, ease: "none"
        });
        
        // Small parallax for the remaining 2 corner images
        gsap.to(".hero-gallery-item", {
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 },
          y: -100, opacity: 0, ease: "none"
        });
      });

      // --- Context Block Overlay Entry ---
      gsap.from(".context", {
        scrollTrigger: { trigger: ".context", start: "top bottom", end: "top center", scrub: true },
        y: 100, borderTopLeftRadius: "80px", borderTopRightRadius: "80px",
        boxShadow: "0 -30px 60px rgba(0,0,0,0.5)", ease: "power1.out"
      });

      // --- Apple-like Text Sequencing in Context ---
      const textElement = document.querySelector('.editorial-text');
      if (textElement && !textElement.classList.contains('split-done')) {
        const words = textElement.innerText.split(' ');
        textElement.innerHTML = '';
        words.forEach(word => {
          const span = document.createElement('span');
          span.textContent = word + '\u00A0';
          span.style.opacity = 0.2;
          span.style.display = 'inline-block';
          textElement.appendChild(span);
        });
        textElement.classList.add('split-done');

        const wordSpans = textElement.querySelectorAll('span');
        gsap.to(wordSpans, {
          scrollTrigger: { trigger: ".context", start: "top 60%", end: "top 20%", scrub: 1 },
          opacity: 1, stagger: 0.1, ease: "none"
        });
      }

      gsap.from(".editorial-subtext, .final-line", {
        scrollTrigger: { trigger: ".context", start: "top 50%" },
        y: 40, opacity: 0, duration: 1.5, stagger: 0.3, ease: "power3.out"
      });

      // --- Active Menu Item Logic ---
      const sectionsObj = document.querySelectorAll("section[id]");
      sectionsObj.forEach(section => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onToggle: self => {
            if (self.isActive) {
              document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('is-active'));
              const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
              if (activeLink) activeLink.classList.add('is-active');
            }
          }
        });
      });

      // Header Adaptivity handled in matchMedia above

      // --- Social Proof Count Up & Marquee ---
      const socialMetrics = document.querySelectorAll('.metric-number');
      if (socialMetrics.length > 0) {
        ScrollTrigger.create({
          trigger: ".social-proof", start: "top 75%", once: true,
          onEnter: () => {
            socialMetrics.forEach(metric => {
              const target = parseFloat(metric.getAttribute('data-target'));
              gsap.to(metric, {
                innerHTML: target, duration: 3, ease: "power2.out", snap: { innerHTML: 1 },
                onUpdate: function() { metric.innerHTML = Math.round(this.targets()[0].innerHTML); }
              });
            });
          }
        });

        gsap.from(".social-glass", {
          scrollTrigger: { trigger: ".social-proof", start: "top 80%" },
          y: 50, opacity: 0, duration: 1.2, ease: "power3.out"
        });
      }

      const marqueeTrack = document.querySelector('.marquee-track');
      if (marqueeTrack) {
        gsap.to(marqueeTrack, {
          xPercent: -50, ease: "none", duration: 40, repeat: -1
        });
      }

      // --- Approach Section Convergence ---
      const approachCards = document.querySelectorAll(".approach-card");
      if (approachCards.length > 0) {
        gsap.set(approachCards, {
          x: (i) => (i % 2 === 0 ? -120 : 120),
          y: (i) => (i < 2 ? 80 : 150),
          rotation: (i) => (i % 2 === 0 ? -4 : 4),
          opacity: 0, scale: 0.95
        });

        gsap.to(approachCards, {
          scrollTrigger: { trigger: ".approach-grid", start: "top 85%", end: "top 35%", scrub: 1 },
          x: 0, y: 0, rotation: 0, opacity: 1, scale: 1, ease: "power2.out"
        });
      }

      // --- Architecture Linear Process Map ---
      gsap.from(".process-track", {
        scrollTrigger: { trigger: ".process-map", start: "top 85%" },
        scaleX: 0, transformOrigin: "left center", duration: 1.5, ease: "power3.inOut"
      });

      gsap.from(".process-node", {
        scrollTrigger: { trigger: ".process-map", start: "top 75%" },
        y: 20, opacity: 0, duration: 1, stagger: 0.15, ease: "power2.out"
      });

      // --- Portfolio Parallax & Mask ---
      gsap.from(".mock-image-wrap", {
        scrollTrigger: { trigger: ".portfolio-mock", start: "top 80%" },
        clipPath: "inset(100% 0 0 0)", duration: 1.5, ease: "power4.inOut"
      });
      gsap.to(".mock-bg-image", {
        scrollTrigger: { trigger: ".portfolio-mock", start: "top bottom", end: "bottom top", scrub: true },
        yPercent: 20, ease: "none"
      });

      // --- Visual Direction Links ---
      gsap.from(".ref-link", {
        scrollTrigger: { trigger: ".reference-wall", start: "top 80%" },
        y: 30, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out"
      });

      // --- Visual Section: Subtle parallax on background columns ---
      const visualSection = document.querySelector('.visual');
      if (visualSection) {
        gsap.to(".vbg-col--up", {
          scrollTrigger: { trigger: ".visual", start: "top bottom", end: "bottom top", scrub: true },
          y: -80, ease: "none"
        });
        gsap.to(".vbg-col--down", {
          scrollTrigger: { trigger: ".visual", start: "top bottom", end: "bottom top", scrub: true },
          y: 80, ease: "none"
        });
      }

      // --- Cases Parallax ---
      document.querySelectorAll(".case-item").forEach(item => {
        gsap.to(item.querySelector(".case-img"), {
          scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: true },
          yPercent: 20, ease: "none"
        });
        gsap.from(item.querySelector(".case-info > *"), {
          scrollTrigger: { trigger: item, start: "top 80%" },
          y: 40, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out"
        });
      });

      // --- Partner Cases Video Modules ---
      gsap.from(".video-wrap", {
        scrollTrigger: { trigger: ".video-modules", start: "top 80%" },
        y: 60, opacity: 0, duration: 1.2, stagger: 0.2, ease: "power3.out"
      });

      // --- Stages Timeline Reveal ---
      let stagesTl = gsap.timeline({ scrollTrigger: { trigger: ".stages-timeline", start: "top 80%" } });
      document.querySelectorAll(".stage-item").forEach((stage, i) => {
        stagesTl.from(stage.querySelector(".stage-num"), {
          scale: 0, opacity: 0, duration: 0.6, ease: "back.out(1.5)"
        }, i * 0.3)
        .from(stage.querySelector(".stage-content"), {
          x: 40, opacity: 0, duration: 0.8, ease: "power3.out"
        }, "-=0.4");
      });

      // --- Pricing Matrix ---
      const priceRows = document.querySelectorAll('[data-price-row]');
      priceRows.forEach((row, i) => {
        gsap.from(row, {
          scrollTrigger: { trigger: '.pricing-matrix', start: 'top 78%' },
          y: 20, opacity: 0, duration: 0.9, delay: i * 0.18, ease: 'power3.out'
        });

        const priceSpans = row.querySelectorAll('.price-range');
        priceSpans.forEach((span, si) => {
          const fromVal  = parseInt(span.dataset.from,  10);
          const toVal    = parseInt(span.dataset.to,    10);
          const formatNum = n => n.toLocaleString('ru-RU');

          ScrollTrigger.create({
            trigger: '.pricing-matrix', start: 'top 78%', once: true,
            onEnter: () => {
              span.classList.add('visible');
              const obj = { from: 0, to: 0 };
              gsap.to(obj, {
                from: fromVal, to: toVal, duration: 1.6, delay: i * 0.18 + si * 0.08, ease: 'power2.out',
                onUpdate() { span.textContent = formatNum(Math.round(obj.from)) + ' — ' + formatNum(Math.round(obj.to)); }
              });
            }
          });
        });
      });

      // --- Generic Section Fade Ups ---
      const fadeSections = [".assumptions-list", ".result-grid", ".platform-grid"];
      fadeSections.forEach(selector => {
        gsap.from(selector, {
          scrollTrigger: { trigger: selector, start: "top 85%" },
          y: 50, opacity: 0, duration: 1, ease: "power3.out"
        });
      });

      // --- Footer Statement Entrance ---
      gsap.from('.footer-headline', {
        scrollTrigger: { trigger: '.footer', start: 'top 85%' },
        y: 60, opacity: 0, duration: 1.4, ease: 'power3.out'
      });
      gsap.from('.footer-cta-strip', {
        scrollTrigger: { trigger: '.footer', start: 'top 70%' },
        y: 30, opacity: 0, duration: 1, ease: 'power3.out'
      });

      // --- Smooth Anchor Scrolling (Hooked to Lenis) ---
      document.querySelectorAll('.nav-link').forEach(anchor => {
        // Need to clean up these listeners too later
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if(targetId && targetId !== '#') {
            const target = document.querySelector(targetId);
            if (target) {
              lenis.scrollTo(target, { offset: -80, duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
            }
          }
        });
      });

    }); // end ctx

    // Cleanup on unmount
    return () => {
      ctx.revert(); // kills all GSAP animations/ScrollTriggers created inside ctx
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };

  }, []); // Run once on mount

  return (
    <>
      <Cursor />
      <Header />
      <main id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Context />
          <SocialProof />
          <Approach />
          <Architecture />
          <Portfolio />
          <Visual />
          <Cases />
          <PartnerCases />
          <Stages />
          <Pricing />
          <Assumptions />
          <Result />
          <Platform />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
