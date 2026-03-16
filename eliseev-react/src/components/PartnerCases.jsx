import React from 'react';

export default function PartnerCases() {
  return (
    <section className="section partner-cases" id="partner-cases">
      <div className="container">
        <div className="partner-header">
          <span className="partner-kicker">Digital collaboration</span>
          <p className="partner-desc">
            Для задач, связанных с 3D-визуализацией и&nbsp;motion-дизайном, мы подключаем профильных специалистов
            с&nbsp;релевантным опытом в&nbsp;архитектурной и&nbsp;визуально сложной digital-среде.
          </p>
          <p className="partner-desc partner-desc--secondary">
            Такой подход позволяет создавать сайты, где дизайн, архитектура и&nbsp;анимация работают как единая система.
          </p>
          <p className="partner-sub">Ниже приведены кейсы, близкие по уровню визуальной проработки.</p>
        </div>
        <div className="video-modules">
          <div className="video-module">
            <div className="video-wrap">
              <video autoPlay loop muted playsInline className="case-video">
                <source src="/assets/videos/Лендинг - (ЗМК) Завод Металлических Конструкций (1).mp4" type="video/mp4" />
              </video>
            </div>
            <p className="video-caption">Проект 1 — акцент на 3D-визуализации.</p>
          </div>
          
          <div className="video-module">
            <div className="video-wrap video-wrap-tall">
              <video autoPlay loop muted playsInline className="case-video">
                <source src="/assets/videos/Концепт лендинга для ЖК ОАЭ (1).mp4" type="video/mp4" />
              </video>
            </div>
            <p className="video-caption">Проект 2 — акцент на чистоте интерфейса и структуре.</p>
          </div>

          <div className="video-module">
            <div className="video-wrap">
              <video autoPlay loop muted playsInline className="case-video">
                <source src="/assets/videos/Лендинг - клиника-лаборатория.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="video-caption">Проект 3 — акцент на аккуратной анимации и общей digital-эстетике.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
