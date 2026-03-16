import React from 'react';

export default function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <h2 className="section-title">Стоимость и сроки реализации</h2>
        <p className="pricing-subtitle">Точная стоимость уточняется после утверждения финальных макетов дизайна от Заказчика.</p>
        
        <div className="pricing-matrix">
          <div className="matrix-header">
            <div className="matrix-col">Этап работ</div>
            <div className="matrix-col matrix-price-col">С AI-файлами, ₽</div>
            <div className="matrix-col matrix-price-col">PDF-версия, ₽</div>
          </div>
          <div className="matrix-row" data-price-row>
            <div className="matrix-col">Этап 1 — Дизайн</div>
            <div className="matrix-col matrix-price-col"><span className="price-range" data-from="295000" data-to="395000">295 000 — 395 000</span></div>
            <div className="matrix-col matrix-price-col"><span className="price-range" data-from="445000" data-to="545000">445 000 — 545 000</span></div>
          </div>
          <div className="matrix-row" data-price-row>
            <div className="matrix-col">Этап 2 — Верстка и разработка</div>
            <div className="matrix-col matrix-price-col"><span className="price-range" data-from="740000" data-to="890000">740 000 — 890 000</span></div>
            <div className="matrix-col matrix-price-col"><span className="price-range" data-from="740000" data-to="890000">740 000 — 890 000</span></div>
          </div>
          <div className="matrix-row matrix-total" data-price-row>
            <div className="matrix-col">Итого</div>
            <div className="matrix-col matrix-price-col"><span className="price-range accent" data-from="1035000" data-to="1285000">1 035 000 — 1 285 000</span></div>
            <div className="matrix-col matrix-price-col"><span className="price-range accent" data-from="1185000" data-to="1435000">1 185 000 — 1 435 000</span></div>
          </div>
        </div>
        
        <div className="pricing-footer">
          <p className="pricing-time">Общий срок реализации проекта: <strong>6–9 недель.</strong></p>
          <p className="pricing-link-wrapper">КП в PDF формате доступно по ссылке: <a href="https://drive.google.com/file/d/1GwnnLzLhiLgL4l81zYI8uTnaW6WCdfQZ/view?usp=sharing" target="_blank" rel="noreferrer" className="pdf-link">Скачать PDF</a></p>
          <p className="pricing-note">Пояснение: Разница в стоимости первого этапа связана с наличием или отсутствием редактируемых исходных файлов.</p>
        </div>
      </div>
    </section>
  );
}
