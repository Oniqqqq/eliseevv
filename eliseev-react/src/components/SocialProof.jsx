import React from 'react';

export default function SocialProof() {
  return (
    <section className="section social-proof" id="social-proof">
      <div className="social-proof-bg">
        <video autoPlay loop muted playsInline className="social-bg-video">
          <source src="/assets/videos/QslAQDcK.mp4" type="video/mp4" />
        </video>
        <div className="social-bg-overlay"></div>
      </div>
      <div className="container">
        <div className="social-glass">
          <div className="social-header">
            <h2>Почему с нами удобно и надёжно</h2>
            <p>Опыт и масштаб</p>
          </div>
          
          <div className="metrics-grid">
            <div className="metric-item">
              <div className="metric-number-wrap">
                <span className="metric-number" data-target="7">0</span>
                <span className="metric-plus">+</span>
              </div>
              <p className="metric-label">лет — средний срок сотрудничества</p>
            </div>
            <div className="metric-item">
              <div className="metric-number-wrap">
                <span className="metric-number" data-target="30">0</span>
                <span className="metric-plus">+</span>
              </div>
              <p className="metric-label">специалистов в штате</p>
            </div>
            <div className="metric-item">
              <div className="metric-number-wrap">
                <span className="metric-number" data-target="250">0</span>
                <span className="metric-plus">+</span>
              </div>
              <p className="metric-label">клиентов из стран СНГ и Европы</p>
            </div>
            <div className="metric-item">
              <div className="metric-number-wrap">
                <span className="metric-plus" style={{marginLeft: 0, marginRight: '0.5rem'}}>&gt;</span>
                <span className="metric-number" data-target="19">0</span>
              </div>
              <p className="metric-label">лет на рынке разработки</p>
            </div>
          </div>

          <p className="social-footer">Мы не просто делаем сайт — мы решаем задачи бизнеса</p>
        </div>
      </div>
      
      <div className="marquee-section">
        <div className="marquee-track">
          <div className="marquee-item">React</div>
          <div className="marquee-item">1C-Битрикс</div>
          <div className="marquee-item">Vue.js</div>
          <div className="marquee-item">Next.js</div>
          <div className="marquee-item">Wordpress</div>
          <div className="marquee-item">Node.js</div>
          <div className="marquee-item">Laravel</div>
          {/* Дублируем элементы для зацикливания без DOM-манипуляций */}
          <div className="marquee-item" aria-hidden="true">React</div>
          <div className="marquee-item" aria-hidden="true">1C-Битрикс</div>
          <div className="marquee-item" aria-hidden="true">Vue.js</div>
          <div className="marquee-item" aria-hidden="true">Next.js</div>
          <div className="marquee-item" aria-hidden="true">Wordpress</div>
          <div className="marquee-item" aria-hidden="true">Node.js</div>
          <div className="marquee-item" aria-hidden="true">Laravel</div>
        </div>
      </div>
    </section>
  );
}
