import React from 'react';

export default function Stages() {
  return (
    <section className="section stages" id="stages">
      <div className="container">
        <h2 className="section-title">Этапы реализации</h2>
        <p className="stages-intro">Проект предлагается реализовывать в два последовательных этапа.</p>
        
        <div className="stages-timeline">
          {/* Stage 1 */}
          <div className="stage-item">
            <div className="stage-num">01</div>
            <div className="stage-content">
              <h3 className="stage-title">Этап 1. Дизайн</h3>
              <p className="stage-desc">Перенос макетов в Figma, подготовка адаптивных версий, проработка анимаций и hover-эффектов.</p>
              <div className="stage-list-wrap">
                <h4 className="stage-list-title">Состав работ:</h4>
                <ul className="stage-list">
                  <li>перенос исходных макетов в Figma</li>
                  <li>подготовка адаптивных версий</li>
                  <li>проработка анимаций и интерактивных состояний</li>
                  <li>подготовка дизайн-макетов к передаче в разработку</li>
                </ul>
              </div>
              <div className="stage-note">
                <p><strong>Примечание:</strong> При наличии исходных файлов Adobe Illustrator перенос выполняется быстрее. Работа только с PDF требует ручной пересборки части макетов.</p>
              </div>
            </div>
          </div>
          
          {/* Stage 2 */}
          <div className="stage-item">
            <div className="stage-num">02</div>
            <div className="stage-content">
              <h3 className="stage-title">Этап 2. Верстка и разработка</h3>
              <p className="stage-desc">Разработка нового шаблона, вёрстка страниц, интеграция анимаций, перенос структуры портфолио, SEO-подготовка, тестирование и запуск.</p>
              <div className="stage-list-wrap">
                <h4 className="stage-list-title">Состав работ:</h4>
                <ul className="stage-list">
                  <li>разработка нового шаблона на 1С-Битрикс</li>
                  <li>вёрстка всех страниц</li>
                  <li>интеграция анимаций и интерактивных эффектов</li>
                  <li>перенос и реструктуризация портфолио</li>
                  <li>базовая SEO-подготовка</li>
                  <li>настройка редиректов</li>
                  <li>тестирование и запуск</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
