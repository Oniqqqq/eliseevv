import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Background layer: architectural image + dark overlay */}
      <div className="footer-bg">
        <img src="/assets/images/10.jpg" alt="" className="footer-bg-img" />
        <div className="footer-bg-overlay"></div>
      </div>

      <div className="footer-inner">

        {/* Top: large statement */}
        <div className="footer-statement">
          <p className="footer-label">e-comexpert — digital production</p>
          <h2 className="footer-headline">
            Готовы сделать<br/>
            <em>сайт, который работает</em><br/>
            на уровень бюро.
          </h2>
        </div>

        {/* Middle: CTA strip */}
        <div className="footer-cta-strip">
          <div className="footer-cta-left">
            <span className="footer-cta-label">Следующий шаг</span>
            <p className="footer-cta-text">Обсудить проект, уточнить стоимость,<br/>выбрать платформу.</p>
          </div>
          <div className="footer-cta-right">
            <a href="https://t.me/nick_chumakov" target="_blank" rel="noreferrer" className="footer-cta-btn">
              Написать в Telegram →
            </a>
            <a href="https://e-comexpert.ru" target="_blank" rel="noreferrer" className="footer-cta-link">e-comexpert.ru</a>
          </div>
        </div>

        {/* Bottom: fine print */}
        <div className="footer-bottom">
          <span className="footer-copy">© 2025 e-comexpert</span>
          <span className="footer-divider">—</span>
          <span className="footer-note">Коммерческое предложение. Конфиденциально.</span>
        </div>

      </div>
    </footer>
  );
}
