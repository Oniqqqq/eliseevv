import React from 'react';

export default function Assumptions() {
  return (
    <section className="section assumptions" id="assumptions">
      <div className="container">
        <div className="assumptions-content">
          <h2 className="section-title">Допущения и факторы оценки</h2>
          <p className="assumptions-intro">Приведенная стоимость является коридорной и может уточняться по мере детализации состава работ.</p>
          <div className="assumptions-list-wrap">
            <h3 className="assumptions-subtitle">Факторы:</h3>
            <ul className="assumptions-list">
              <li>отсутствие финальных макетов на момент оценки</li>
              <li>сложность анимаций и интерактивных решений</li>
              <li>изменения структуры в процессе работы</li>
              <li>дополнительные итерации по дизайну и контенту</li>
              <li>количество вариаций шаблонов внутри портфолио</li>
              <li>объём ручной пересборки макетов при отсутствии редактируемых исходников</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
