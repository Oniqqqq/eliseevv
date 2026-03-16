import React from 'react';

export default function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <h2 className="section-title">Портфолио как ключевой раздел сайта</h2>
          <p className="portfolio-desc">Для архитектурного бюро портфолио является основной точкой восприятия уровня, подхода и визуального языка студии.</p>
        </div>
        <div className="portfolio-mock">
          <div className="mock-image-wrap">
            <img src="/assets/images/IMG_9787.PNG" alt="Eliseev Architects Portfolio" className="mock-actual-img" />
          </div>
          <div className="mock-content">
            <ul className="mock-list">
              <li>крупные изображения</li>
              <li>описание проекта и концепции</li>
              <li>галерею материалов</li>
              <li>дополнительные визуализации и детали</li>
            </ul>
          </div>
        </div>
        <p className="final-line portfolio-final">Проекты воспринимаются как полноценные архитектурные кейсы.</p>
      </div>
    </section>
  );
}
