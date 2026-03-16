import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Cursor() {
  const cursorRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    // Touch devices — no custom cursor
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const cursor = cursorRef.current;
    const label = labelRef.current;
    if (!cursor) return;

    // Reveal cursor (starts invisible via CSS opacity:0)
    gsap.to(cursor, { opacity: 1, duration: 0.3, delay: 0.5 });

    // Hide the default pointer everywhere
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let curX = mouseX;
    let curY = mouseY;

    // Inertia — 0.10 = soft/editorial feel, 0.18 = snappier
    const LERP = 0.11;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener('mousemove', onMouseMove);

    // Smooth following via GSAP ticker
    const tickerFn = () => {
      curX += (mouseX - curX) * LERP;
      curY += (mouseY - curY) * LERP;
      gsap.set(cursor, { x: curX, y: curY });
    };
    gsap.ticker.add(tickerFn);

    // ---- Helper to register hover states ----
    const bindHover = (selector, stateClass, labelText = '') => {
      document.querySelectorAll(selector).forEach(el => {
        const enter = () => {
          cursor.classList.add(stateClass);
          if (labelText && label) label.textContent = labelText;
        };
        const leave = () => {
          cursor.classList.remove(stateClass);
          if (label) label.textContent = '';
        };
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
      });
    };

    // Link / button — subtle scale up
    bindHover('a, button', 'cursor--link');

    // Cards — slightly larger + softer fill
    bindHover('.approach-card, .platform-card', 'cursor--card');

    // Case items — largest state with label
    bindHover('.case-item', 'cursor--media', 'Explore');

    // Video wrappers
    bindHover('.video-wrap', 'cursor--media', 'Play');

    // Portfolio mock image
    bindHover('.mock-image-wrap', 'cursor--media', 'View');

    // Visual reference links
    bindHover('.ref-link', 'cursor--link');

    // ---- Adaptive colour: dark cursor on light sections ----
    const lightSections = document.querySelectorAll('.context, .result, .platform');
    lightSections.forEach(section => {
      section.addEventListener('mouseenter', () => cursor.classList.add('cursor--dark'));
      section.addEventListener('mouseleave', () => cursor.classList.remove('cursor--dark'));
    });

    // ---- Hide when leaving window ----
    const onLeave = () => cursor.classList.add('cursor--hidden');
    const onEnter = () => cursor.classList.remove('cursor--hidden');
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      gsap.ticker.remove(tickerFn);
      document.body.style.cursor = '';
      document.documentElement.style.cursor = '';
    };
  }, []);

  return (
    <div className="cursor" ref={cursorRef} aria-hidden="true">
      <span className="cursor-label" ref={labelRef}></span>
    </div>
  );
}
