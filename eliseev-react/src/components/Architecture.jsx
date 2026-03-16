import React from 'react';

export default function Architecture() {
  return (
    <section className="section architecture" id="structure">
      {/* Background Layer */}
      <div className="architecture-bg">
        <img src="/assets/images/11.jpg" alt="" className="architecture-bg-img" />
        <div className="architecture-bg-overlay"></div>
      </div>
      
      <div className="container">
        <div className="arch-header">
          <h2 className="section-title">Предлагаемая структура сайта</h2>
          <p className="arch-desc">Структура сайта выстраивается вокруг портфолио как ключевого раздела, при этом сохраняет понятную иерархию и удобную точку входа в основные разделы.</p>
        </div>
        <div className="arch-glass">
        <div className="process-map">
          <div className="process-track"></div>
          <div className="process-columns">
            
            <div className="process-col">
              <div className="process-node">
                <div className="node-header">
                  <span className="node-id">00</span>
                  <h4 className="node-name">Главная</h4>
                </div>
              </div>
            </div>
            
            <div className="process-col">
              <div className="process-node">
                <div className="node-header">
                  <span className="node-id">01</span>
                  <h4 className="node-name">О Бюро</h4>
                </div>
                <div className="node-branches">
                  <div className="branch-item">Философия</div>
                </div>
              </div>
            </div>
            
            <div className="process-col">
              <div className="process-node">
                <div className="node-header">
                  <span className="node-id">02</span>
                  <h4 className="node-name">Услуги</h4>
                </div>
                <div className="node-branches">
                  <div className="branch-item">Шаблон страницы</div>
                </div>
              </div>
            </div>
            
            <div className="process-col highlight-col">
              <div className="process-node">
                <div className="node-header">
                  <span className="node-id">03</span>
                  <h4 className="node-name">Портфолио</h4>
                </div>
                <div className="node-branches">
                  <div className="branch-item">Общая категория</div>
                  <div className="branch-item">Архитектурный кейс</div>
                </div>
              </div>
            </div>
            
            <div className="process-col">
              <div className="process-node">
                <div className="node-header">
                  <span className="node-id">04</span>
                  <h4 className="node-name">Контакты</h4>
                </div>
                <div className="node-branches">
                  <div className="branch-item">Модальное окно заявки</div>
                </div>
              </div>
            </div>

          </div>
        </div>
        </div>{/* /arch-glass */}
        <p className="final-line arch-final">Основной акцент сайта — раздел портфолио, который должен работать как полноценный каталог архитектурных проектов.</p>
      </div>
    </section>
  );
}
