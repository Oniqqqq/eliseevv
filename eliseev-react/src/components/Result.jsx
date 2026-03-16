import React from 'react';

export default function Result() {
  return (
    <section className="section result" id="result">
      <div className="container">
        <div className="result-content">
          <h2 className="section-title">Результат проекта</h2>
          <div className="result-grid">
            <p className="result-intro">После запуска Eliseev Architects получает:</p>
            <ul className="result-list">
              <li>современный имиджевый сайт</li>
              <li>более выразительную подачу портфолио</li>
              <li>чистую и понятную структуру разделов</li>
              <li>удобную CMS для дальнейшей работы с контентом</li>
              <li>платформу для дальнейшего развития сайта</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
