import React from 'react';

export default function Visual() {
  return (
    <section className="section visual" id="visual">

      {/* Animated Background Gallery */}
      <div className="visual-bg-gallery" aria-hidden="true">
        {/* Column 1: wider, moves UP */}
        <div className="vbg-col vbg-col--up vbg-col--wide">
          <div className="vbg-strip">
            <div className="vbg-img"><img src="/assets/images/3.jpg" alt="" /></div>
            <div className="vbg-img"><img src="/assets/images/7.jpg" alt="" /></div>
            <div className="vbg-img"><img src="/assets/images/1.jpg" alt="" /></div>
            <div className="vbg-img"><img src="/assets/images/5.jpg" alt="" /></div>
            {/* Duplicated for seamless loop */}
            <div className="vbg-img"><img src="/assets/images/3.jpg" alt="" /></div>
            <div className="vbg-img"><img src="/assets/images/7.jpg" alt="" /></div>
            <div className="vbg-img"><img src="/assets/images/1.jpg" alt="" /></div>
            <div className="vbg-img"><img src="/assets/images/5.jpg" alt="" /></div>
          </div>
        </div>

        {/* Column 2: narrower, moves DOWN */}
        <div className="vbg-col vbg-col--down vbg-col--narrow">
          <div className="vbg-strip">
            <div className="vbg-img"><img src="/assets/images/4.jpg" alt="" /></div>
            <div className="vbg-img"><img src="/assets/images/9.jpg" alt="" /></div>
            <div className="vbg-img"><img src="/assets/images/2.jpg" alt="" /></div>
            <div className="vbg-img"><img src="/assets/images/6.jpg" alt="" /></div>
            <div className="vbg-img"><img src="/assets/images/8.jpg" alt="" /></div>
            {/* Duplicated for seamless loop */}
            <div className="vbg-img"><img src="/assets/images/4.jpg" alt="" /></div>
            <div className="vbg-img"><img src="/assets/images/9.jpg" alt="" /></div>
            <div className="vbg-img"><img src="/assets/images/2.jpg" alt="" /></div>
            <div className="vbg-img"><img src="/assets/images/6.jpg" alt="" /></div>
            <div className="vbg-img"><img src="/assets/images/8.jpg" alt="" /></div>
          </div>
        </div>
      </div>

      {/* Subtle white overlay so text stays readable */}
      <div className="visual-bg-overlay" aria-hidden="true"></div>

      {/* Text content above everything */}
      <div className="visual-content">
        <div className="container">
          <div className="visual-header">
            <h2 className="section-title">Визуальное направление сайта</h2>
            <p className="visual-desc">Визуальная концепция строится на сочетании архитектурной фотографии, спокойной типографики, чистой композиции и сдержанной анимации.</p>
          </div>
          <div className="reference-wall">
            <div className="ref-intro">
              <h3 className="ref-title">Референсы</h3>
              <p className="ref-text">
                В качестве визуальных ориентиров используются сайты, в которых особенно хорошо решены:<br/>
                — подача проектов через крупный визуальный контент<br/>
                — чистая композиция без перегрузки<br/>
                — сдержанный интерактив<br/>
                — ощущение премиального digital-опыта
              </p>
            </div>
            <div className="ref-links">
              <a href="https://yodezeen.com" target="_blank" rel="noreferrer" className="ref-link">Yodezeen<span className="ref-domain">yodezeen.com</span></a>
              <a href="https://www.snohetta.com" target="_blank" rel="noreferrer" className="ref-link">Snøhetta<span className="ref-domain">snohetta.com</span></a>
              <a href="https://www.archidomo.fr/en/projects/" target="_blank" rel="noreferrer" className="ref-link">archidomo<span className="ref-domain">archidomo.fr</span></a>
              <a href="https://fluid.glass/" target="_blank" rel="noreferrer" className="ref-link">fluid glass<span className="ref-domain">fluid.glass</span></a>
              <a href="https://hitoba-office.com/" target="_blank" rel="noreferrer" className="ref-link">hitoba design<span className="ref-domain">hitoba-office.com</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
