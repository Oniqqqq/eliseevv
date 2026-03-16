// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis for Smooth Scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

// Update ScrollTrigger on Lenis scroll
lenis.on('scroll', ScrollTrigger.update);

// Hook Lenis into GSAP requestAnimationFrame
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// Initialize application on load
document.addEventListener("DOMContentLoaded", () => {
    
    // --- Hero Animations ---
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    heroTl.to(".hero-title", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.2
    })
    .to(".hero-subtitle", {
        y: 0,
        opacity: 1,
        duration: 1.2
    }, "-=1")
    .to(".hero-glass-panel", {
        y: 0,
        opacity: 1,
        duration: 1.2
    }, "-=0.8");

    // --- Hero Interactive Gallery (Mousemove parallax) ---
    const heroGalleryItems = document.querySelectorAll('.hero-gallery-item');
    const heroSection = document.querySelector('.hero');
    
    if (heroSection && heroGalleryItems.length > 0) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            // normalized coordinates from -0.5 to 0.5
            const xPos = (e.clientX - rect.left) / rect.width - 0.5;
            const yPos = (e.clientY - rect.top) / rect.height - 0.5;
            
            heroGalleryItems.forEach((item, index) => {
                const depth = (index % 3) + 1; // More chill depth scaling
                const movementX = xPos * 25 * depth; // reduced from 40
                const movementY = yPos * 25 * depth; 
                const rotationX = -yPos * 5 * depth; // reduced from 15
                const rotationY = xPos * 5 * depth; 
                
                gsap.to(item, {
                    x: movementX,
                    y: movementY,
                    rotationX: rotationX,
                    rotationY: rotationY,
                    duration: 1.5, // Increased duration for smoother, chill movement
                    ease: "power2.out",
                    overwrite: "auto"
                });
            });
        });
        
        // Reset on mouse leave
        heroSection.addEventListener('mouseleave', () => {
            gsap.to(heroGalleryItems, {
                x: 0,
                y: 0,
                rotationX: 0,
                rotationY: 0,
                duration: 2, // Slower return
                ease: "power2.out",
                overwrite: "auto"
            });
        });
    }

    // --- Hero Morph Transition to Context ---
    // Overlapping morph effect
    gsap.to(".hero-content", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        y: -150,
        scale: 0.95,
        opacity: 0,
        ease: "none"
    });

    // Scatter hero gallery on scroll
    gsap.to(".hero-gallery-item", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1
        },
        y: (i) => (i % 2 === 0 ? -200 : 200) - (i * 20),
        x: (i) => (i % 2 !== 0 ? -150 : 150),
        scale: 1.2,
        opacity: 0,
        rotationZ: (i) => (i % 2 === 0 ? 15 : -15),
        ease: "none"
    });

    gsap.to(".hero-bg", {
        yPercent: 15,
        scale: 0.95,
        opacity: 0.5,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // --- Context Block Overlay Entry ---
    // Creates the feeling that the context naturally slides over the hero seamlessly
    gsap.from(".context", {
        scrollTrigger: {
            trigger: ".context",
            start: "top bottom",
            end: "top center",
            scrub: true
        },
        y: 100,
        borderTopLeftRadius: "80px",
        borderTopRightRadius: "80px",
        boxShadow: "0 -30px 60px rgba(0,0,0,0.5)",
        ease: "power1.out"
    });

    // --- Apple-like Text Sequencing in Context ---
    const textElement = document.querySelector('.editorial-text');
    if (textElement) {
        const words = textElement.innerText.split(' ');
        textElement.innerHTML = '';
        words.forEach(word => {
            const span = document.createElement('span');
            // Use unicode non-breaking space to ensure HTML preserves the spacing between inline blocks
            span.textContent = word + '\u00A0';
            span.style.opacity = 0.2; // Dim initial state
            span.style.display = 'inline-block';
            textElement.appendChild(span);
        });

        const wordSpans = textElement.querySelectorAll('span');
        
        gsap.to(wordSpans, {
            scrollTrigger: {
                trigger: ".context",
                start: "top 60%", 
                end: "top 20%",   
                scrub: 1
            },
            opacity: 1,
            stagger: 0.1,
            ease: "none"
        });
    }

    gsap.from(".editorial-subtext, .final-line", {
        scrollTrigger: {
            trigger: ".context",
            start: "top 50%",
        },
        y: 40,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power3.out"
    });

    // --- Smooth Anchor Scrolling ---
    document.querySelectorAll('.nav-link').forEach(anchor => {
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

    // --- Header Adaptivity ---
    // Change header style when scrolling over light sections
    const lightSections = document.querySelectorAll('.context, .architecture, .visual, .result, .platform'); 
    
    lightSections.forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            start: "top 100px", // When top of section hits header area
            end: "bottom 100px", // When bottom of section leaves header area
            onEnter: () => document.querySelector(".header").classList.add("is-light-bg"),
            onLeave: () => document.querySelector(".header").classList.remove("is-light-bg"),
            onEnterBack: () => document.querySelector(".header").classList.add("is-light-bg"),
            onLeaveBack: () => document.querySelector(".header").classList.remove("is-light-bg")
        });
    });

    // --- Social Proof Count Up & Marquee ---
    const socialMetrics = document.querySelectorAll('.metric-number');
    if (socialMetrics.length > 0) {
        ScrollTrigger.create({
            trigger: ".social-proof",
            start: "top 75%",
            once: true,
            onEnter: () => {
                socialMetrics.forEach(metric => {
                    const target = parseFloat(metric.getAttribute('data-target'));
                    gsap.to(metric, {
                        innerHTML: target,
                        duration: 3,
                        ease: "power2.out",
                        snap: { innerHTML: 1 },
                        onUpdate: function() {
                            metric.innerHTML = Math.round(this.targets()[0].innerHTML);
                        }
                    });
                });
            }
        });

        gsap.from(".social-glass", {
            scrollTrigger: {
                trigger: ".social-proof",
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        });
    }

    const marqueeTrack = document.querySelector('.marquee-track');
    if (marqueeTrack) {
        // Clone items to ensure seamless loop
        const items = Array.from(marqueeTrack.children);
        items.forEach(item => {
            let clone = item.cloneNode(true);
            marqueeTrack.appendChild(clone);
        });
        
        gsap.to(marqueeTrack, {
            xPercent: -50,
            ease: "none",
            duration: 40, // Slow and premium
            repeat: -1
        });
    }

    // --- Controlled Convergence (Approach Section) ---
    // Instead of a simple fade up, cards start scattered and smoothly assemble into the grid
    const approachCards = document.querySelectorAll(".approach-card");
    if (approachCards.length > 0) {
        // Set initial scattered state
        gsap.set(approachCards, {
            x: (i) => (i % 2 === 0 ? -120 : 120), // Alternate left/right scatter
            y: (i) => (i < 2 ? 80 : 150), // Bottom cards start lower
            rotation: (i) => (i % 2 === 0 ? -4 : 4), // Slight tilt
            opacity: 0,
            scale: 0.95
        });

        gsap.to(approachCards, {
            scrollTrigger: {
                trigger: ".approach-grid",
                start: "top 85%",
                end: "top 35%", // Assembles slowly over the scroll range
                scrub: 1 // Controlled scrub, no jumps or bounce
            },
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            scale: 1,
            ease: "power2.out"
        });
    }

    // --- Architecture Linear Process Map ---
    // 1. Reveal track
    gsap.from(".process-track", {
        scrollTrigger: {
            trigger: ".process-map",
            start: "top 85%"
        },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.5,
        ease: "power3.inOut"
    });

    // 2. Sequential assembly of nodes
    gsap.from(".process-node", {
        scrollTrigger: {
            trigger: ".process-map",
            start: "top 75%",
        },
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out"
    });

    // --- Portfolio Parallax & Mask ---
    gsap.from(".mock-image-wrap", {
        scrollTrigger: {
            trigger: ".portfolio-mock",
            start: "top 80%",
        },
        clipPath: "inset(100% 0 0 0)", // Reveal bottom to top
        duration: 1.5,
        ease: "power4.inOut"
    });
    gsap.to(".mock-bg-image", {
        scrollTrigger: {
            trigger: ".portfolio-mock",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        yPercent: 20, // Parallax effect
        ease: "none"
    });

    // --- Visual Direction Links ---
    gsap.from(".ref-link", {
        scrollTrigger: {
            trigger: ".reference-wall",
            start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
    });

    // --- Visual Section: Subtle parallax on background columns ---
    // Moves column wrappers slightly in their own scroll direction
    // so the background deepens when the user scrolls through the section.
    const visualSection = document.querySelector('.visual');
    if (visualSection) {
        // Up-column: nudge further up on scroll (enhance CSS anim direction)
        gsap.to(".vbg-col--up", {
            scrollTrigger: {
                trigger: ".visual",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            },
            y: -80,
            ease: "none"
        });
        // Down-column: nudge further down on scroll
        gsap.to(".vbg-col--down", {
            scrollTrigger: {
                trigger: ".visual",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            },
            y: 80,
            ease: "none"
        });
    }

    // --- Cases Parallax ---
    document.querySelectorAll(".case-item").forEach(item => {
        // Image Parallax
        gsap.to(item.querySelector(".case-img"), {
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            },
            yPercent: 20,
            ease: "none"
        });
        
        // Text Reveal
        gsap.from(item.querySelector(".case-info > *"), {
            scrollTrigger: {
                trigger: item,
                start: "top 80%"
            },
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out"
        });
    });

    // --- Partner Cases Video Modules ---
    gsap.from(".video-wrap", {
        scrollTrigger: {
            trigger: ".video-modules",
            start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out"
    });

    // --- Stages Timeline Reveal ---
    let stagesTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".stages-timeline",
            start: "top 80%",
        }
    });
    document.querySelectorAll(".stage-item").forEach((stage, i) => {
        stagesTl.from(stage.querySelector(".stage-num"), {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.5)"
        }, i * 0.3)
        .from(stage.querySelector(".stage-content"), {
            x: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.4");
    });

    // --- Pricing Matrix: Animated Row Reveals with number animation ---
    const priceRows = document.querySelectorAll('[data-price-row]');
    priceRows.forEach((row, i) => {
        // Fade row in with stagger
        gsap.from(row, {
            scrollTrigger: {
                trigger: '.pricing-matrix',
                start: 'top 78%',
            },
            y: 20,
            opacity: 0,
            duration: 0.9,
            delay: i * 0.18,
            ease: 'power3.out',
        });

        // Animate price values by counting up slowly
        const priceSpans = row.querySelectorAll('.price-range');
        priceSpans.forEach((span, si) => {
            const fromVal  = parseInt(span.dataset.from,  10);
            const toVal    = parseInt(span.dataset.to,    10);
            const formatNum = n => n.toLocaleString('ru-RU');

            ScrollTrigger.create({
                trigger: '.pricing-matrix',
                start:   'top 78%',
                once:    true,
                onEnter: () => {
                    span.classList.add('visible');
                    const obj = { from: 0, to: 0 };
                    gsap.to(obj, {
                        from: fromVal,
                        to:   toVal,
                        duration: 1.6,
                        delay: i * 0.18 + si * 0.08,
                        ease: 'power2.out',
                        onUpdate() {
                            span.textContent =
                                formatNum(Math.round(obj.from)) + ' — ' + formatNum(Math.round(obj.to));
                        }
                    });
                }
            });
        });
    });

    // --- Generic Section Fade Ups ---
    const fadeSections = [".assumptions-list", ".result-grid", ".platform-grid"];
    fadeSections.forEach(selector => {
        gsap.from(selector, {
            scrollTrigger: {
                trigger: selector,
                start: "top 85%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    // --- Footer Statement Entrance ---
    gsap.from('.footer-headline', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out'
    });
    gsap.from('.footer-cta-strip', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 70%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

});
