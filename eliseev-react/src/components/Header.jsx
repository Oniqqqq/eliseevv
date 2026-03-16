import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
          <span className="logo-text">e-comexpert</span>
        </div>
        <nav className="header-nav">
          <a href="#context" className="nav-link">Контекст</a>
          <a href="#structure" className="nav-link">Структура</a>
          <a href="#visual" className="nav-link">Визуальное направление</a>
          <a href="#cases" className="nav-link">Клиенты и кейсы</a>
          <a href="#stages" className="nav-link">Этапы и стоимость</a>
          <a href="#platform" className="nav-link">Платформа</a>
        </nav>
      </div>
    </header>
  );
}
