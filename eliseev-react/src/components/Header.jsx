import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const NAV_LINKS = [
  { href: '#context',    label: 'Контекст' },
  { href: '#structure',  label: 'Структура' },
  { href: '#visual',     label: 'Визуальное направление' },
  { href: '#cases',      label: 'Клиенты и кейсы' },
  { href: '#stages',     label: 'Этапы и стоимость' },
  { href: '#platform',   label: 'Платформа' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu  = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  // ---- Portal overlay (rendered to <body> to avoid stacking-context issues) ----
  const overlay = createPortal(
    <div className={`mobile-nav-overlay${isMenuOpen ? ' is-open' : ''}`}>
      <nav className="mobile-nav">
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href} className="mobile-nav-link" onClick={closeMenu}>
            {label}
          </a>
        ))}
      </nav>
    </div>,
    document.body
  );

  return (
    <>
      {/* Header bar — always on top, never contains the overlay */}
      <header className="header">
        <div className="header-inner">
          <div className="header-logo">
            <span className="logo-text">e-comexpert</span>
          </div>

          {/* Desktop nav */}
          <nav className="header-nav">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className="nav-link">{label}</a>
            ))}
          </nav>

          {/* Burger button — always interactive, highest possible z */}
          <button
            className={`burger-btn${isMenuOpen ? ' is-active' : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
          >
            <span className="burger-line" />
            <span className="burger-line" />
          </button>
        </div>
      </header>

      {/* Mobile overlay — portalled to <body>, z-index independent */}
      {overlay}
    </>
  );
}
