import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false); // Fecha o menu móvel quando um link é clicado
  };

  return (
    <>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="name">
            <span className="first-name">Marcelo</span>
            <span className="last-name">Amaral</span>
          </div>
        </div>
        <div className={`n-right ${showMenu ? 'active' : ''}`}>
          <div className="n-list">
            <ul style={{ listStyleType: 'none' }}>
              <li><a href="#about" onClick={handleLinkClick}>About</a></li>
              <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
              <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
              <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <span id="mobile-menu-icon" className="material-symbols-outlined" onClick={toggleMenu}>
        {showMenu ? (
          <span className="material-symbols-outlined" onClick={toggleMenu}>
            close
          </span>
        ) : (
          <span className="material-symbols-outlined" onClick={toggleMenu}>
            menu
          </span>
        )}
      </span>
      <div className={`mobile-menu ${showMenu ? 'open' : ''}`}>
        <ul style={{ listStyleType: 'none' }}>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
