import React from 'react';

export default function Cases() {
  return (
    <section className="section cases" id="cases">
      <div className="container">
        <div className="cases-header">
          <h2 className="section-title">Клиенты и реализованные решения</h2>
          <p className="cases-intro">Опыт работы включает корпоративные сайты, сложные каталожные решения и длительное развитие цифровых продуктов для компаний с разным масштабом и структурой бизнеса.</p>
        </div>
        <div className="cases-list">
          
          <div className="case-item">
            <div className="case-info">
              <h3 className="case-name">STORE77</h3>
              <p className="case-status">Интернет-магазин электроники с каталожной логикой, поиском и интеграцией с 1С.</p>
              <a href="https://store77.net" target="_blank" rel="noreferrer" className="case-link">store77.net</a>
            </div>
            <div className="case-image-wrap">
              <div className="case-img" style={{backgroundImage: "url('/assets/images/store77.png')"}}></div>
            </div>
          </div>

          <div className="case-item case-reverse">
            <div className="case-info">
              <h3 className="case-name">Лаборатория Умного Вождения</h3>
              <p className="case-status">Корпоративный сайт технологической компании с обновлением структуры и внедрением конструктора тарифов.</p>
              <a href="https://smartdriving.io" target="_blank" rel="noreferrer" className="case-link">smartdriving.io</a>
            </div>
            <div className="case-image-wrap">
              <div className="case-img" style={{backgroundImage: "url('/assets/images/smart-driving.png')"}}></div>
            </div>
          </div>

          <div className="case-item">
            <div className="case-info">
              <h3 className="case-name">АВТОРУСЬ</h3>
              <p className="case-status">Комплексное развитие цифрового проекта для крупной группы компаний в розничном и оптовом направлении.</p>
            </div>
            <div className="case-image-wrap">
              <div className="case-img" style={{backgroundImage: "url('/assets/images/autorus-ecommerce.jpg')"}}></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
