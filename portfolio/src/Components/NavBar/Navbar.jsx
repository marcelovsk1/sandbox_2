import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

  const menuShow = () => {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
    } else {
      menuMobile.classList.add('open');
    }
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
        <div>
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
      <span id="mobile-menu-icon" className="material-symbols-outlined" onClick={menuShow}>
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
