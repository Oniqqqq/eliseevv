import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isMenuOpen ? 'is-menu-open' : ''}`}>
      <div className="header-inner">
        <div className="header-logo">
          <span className="logo-text">e-comexpert</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="header-nav">
          <a href="#context" className="nav-link">Контекст</a>
          <a href="#structure" className="nav-link">Структура</a>
          <a href="#visual" className="nav-link">Визуальное направление</a>
          <a href="#cases" className="nav-link">Клиенты и кейсы</a>
          <a href="#stages" className="nav-link">Этапы и стоимость</a>
          <a href="#platform" className="nav-link">Платформа</a>
        </nav>

        {/* Mobile Burger Button */}
        <button className="burger-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className="mobile-nav-overlay">
        <nav className="mobile-nav">
          <a href="#context" className="mobile-nav-link" onClick={closeMenu}>Контекст</a>
          <a href="#structure" className="mobile-nav-link" onClick={closeMenu}>Структура</a>
          <a href="#visual" className="mobile-nav-link" onClick={closeMenu}>Визуальное направление</a>
          <a href="#cases" className="mobile-nav-link" onClick={closeMenu}>Клиенты и кейсы</a>
          <a href="#stages" className="mobile-nav-link" onClick={closeMenu}>Этапы и стоимость</a>
          <a href="#platform" className="mobile-nav-link" onClick={closeMenu}>Платформа</a>
        </nav>
      </div>
    </header>
  );
}
