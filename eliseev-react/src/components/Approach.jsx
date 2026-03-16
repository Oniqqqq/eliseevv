import React from 'react';

export default function Approach() {
  return (
    <section className="section approach" id="approach">
      <div className="container">
        <div className="approach-header">
          <h2 className="section-title">Подход к созданию сайта</h2>
          <p className="approach-intro">Будущий сайт рассматривается как цифровое продолжение архитектурного языка бюро.</p>
        </div>
        <div className="approach-grid">
          <div className="approach-card">
            <span className="card-num">01</span>
            <h3 className="card-title">Визуальность</h3>
          </div>
          <div className="approach-card">
            <span className="card-num">02</span>
            <h3 className="card-title">Минимализм</h3>
          </div>
          <div className="approach-card">
            <span className="card-num">03</span>
            <h3 className="card-title">Сдержанная динамика</h3>
          </div>
          <div className="approach-card">
            <span className="card-num">04</span>
            <h3 className="card-title">Структурность</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
