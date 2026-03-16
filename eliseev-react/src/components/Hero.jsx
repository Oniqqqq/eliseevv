import React from 'react';

export default function Hero() {
  return (
    <section className="section hero" id="hero">
      <div className="hero-bg">
        <div className="hero-image-overlay"></div>
      </div>

      {/* Layer 0 (backdrop): Floating Gallery Images */}
      <div className="hero-gallery" aria-hidden="true">
        <div className="hero-gallery-item item-1"><img src="/assets/images/1.jpg" alt="" /></div>
        <div className="hero-gallery-item item-2"><img src="/assets/images/2.jpg" alt="" /></div>
        <div className="hero-gallery-item item-3"><img src="/assets/images/3.jpg" alt="" /></div>
        <div className="hero-gallery-item item-4"><img src="/assets/images/4.jpg" alt="" /></div>
        <div className="hero-gallery-item item-5"><img src="/assets/images/5.jpg" alt="" /></div>
        <div className="hero-gallery-item item-6"><img src="/assets/images/6.jpg" alt="" /></div>
        <div className="hero-gallery-item item-7"><img src="/assets/images/7.jpg" alt="" /></div>
        <div className="hero-gallery-item item-8"><img src="/assets/images/8.jpg" alt="" /></div>
        <div className="hero-gallery-item item-9"><img src="/assets/images/9.jpg" alt="" /></div>
      </div>

      {/* Layer 1 (top): Text and UI content */}
      <div className="hero-content">
        <div className="hero-text-wrap">
          <h1 className="hero-title">Цифровая архитектура<br/>для Eliseev Architects</h1>
          <p className="hero-subtitle">
            Концепция редизайна сайта архитектурного бюро<br/>
            с акцентом на визуальный язык архитектуры<br/>
            и чистую цифровую эстетику.
          </p>
        </div>
        <div className="hero-glass-panel">
          <ul className="hero-list">
            <li>Редизайн сайта eliseev-architects.ru</li>
            <li>Новая структура</li>
            <li>Переосмысленное портфолио</li>
            <li>Сдержанные анимации</li>
            <li>Удобная CMS для работы с контентом</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
