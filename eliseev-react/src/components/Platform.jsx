import React from 'react';

export default function Platform() {
  return (
    <section className="section platform" id="platform">
      <div className="container">
        <p className="platform-intro">По Вашей просьбе подготовили отдельное краткое сравнение платформ для реализации проекта.</p>
        <h2 className="section-title">Технологическая платформа</h2>
        
        <div className="platform-main-desc">
          <p>Базовым вариантом реализации проекта рассматривается <strong>1С-Битрикс</strong>.<br/>
          Дополнительно, по Вашей просьбе, в оценку включен вариант реализации на <strong>WordPress</strong>.</p>
          <p className="platform-choice">Проект может быть реализован на:<br/><span className="highlight">1С-Битрикс</span> или <span className="highlight">WordPress</span></p>
          <p>Сроки и стоимость реализации в рамках текущего объема работ принимаются одинаковыми.</p>
        </div>

        <div className="platform-grid">
          <div className="platform-card">
            <h3 className="platform-name">Особенности WordPress</h3>
            <p className="platform-desc">WordPress может рассматриваться как альтернативный вариант для имиджевого сайта с относительно простой контентной структурой и без сложной внутренней бизнес-логики.</p>
            <h4 className="platform-list-title">Преимущества:</h4>
            <ul className="platform-list">
              <li>простое управление контентом</li>
              <li>отсутствие лицензионных платежей</li>
              <li>гибкость дальнейших доработок</li>
              <li>удобство переноса и администрирования</li>
            </ul>
          </div>
          <div className="platform-card platform-primary">
            <h3 className="platform-name">Когда целесообразно использовать 1С-Битрикс</h3>
            <p className="platform-desc">1С-Битрикс является приоритетным вариантом в случаях, если:</p>
            <ul className="platform-list">
              <li>инфраструктура Заказчика уже связана с 1С-Битрикс</li>
              <li>требуется интеграция с внутренними системами</li>
              <li>со стороны Заказчика есть внутренняя команда или подрядчик, работающий с 1С-Битрикс</li>
              <li>для проекта важна стандартизация на используемом в компании технологическом стеке</li>
            </ul>
          </div>
        </div>
        
        <p className="final-line platform-final">Таким образом, <strong>1С-Битрикс</strong> рассматривается как основной вариант реализации проекта, а <strong>WordPress</strong> — как дополнительная альтернатива.</p>
      </div>
    </section>
  );
}
