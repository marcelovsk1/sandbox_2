import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
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
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <span id="mobile-menu-icon" class="material-symbols-outlined">
        menu
        </span>
        <div className="mobile-menu">
          <ul style={{ listStyleType: 'none' }}>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
    </>
  );
};

export default Navbar;
