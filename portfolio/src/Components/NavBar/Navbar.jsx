import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = window.innerWidth <= 600; // Definindo um valor de largura para determinar dispositivos móveis

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="name">
          <span className="first-name">Marcelo</span>
          <span className="last-name">Amaral</span>
        </div>
      </div>
      <div className={`n-right ${isMobile ? (showMenu ? 'active' : '') : ''}`}>
        <div className="n-list">
          {isMobile ? (
            <span id="burger" className="material-symbols-outlined" onClick={toggleMenu}>
              menu
            </span>
          ) : (
            <ul style={{ listStyleType: 'none' }}>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          )}
          {isMobile && showMenu && (
            <div id="itens" className="menu-items">
              <span className="material-symbols-outlined close-btn" onClick={closeMenu}>
                close
              </span>

              <ul style={{ listStyleType: 'none' }}>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
