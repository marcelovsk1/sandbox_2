import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="name">
          <span className="first-name">Marcelo</span>
          <span className="last-name">Amaral</span>
        </div>
        {/* Ícone do hambúrguer aparece apenas em dispositivos móveis */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`hamburger-line ${showMenu ? 'active' : ''}`}></div>
          <div className={`hamburger-line ${showMenu ? 'active' : ''}`}></div>
          <div className={`hamburger-line ${showMenu ? 'active' : ''}`}></div>
        </div>
      </div>
      <div className={`n-right ${showMenu ? 'active' : ''}`}>
        <div className="n-list">
          <ul style={{listStyleType: 'none'}}>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
