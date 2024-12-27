import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';
import menuIcon from './images/hamburgerbutton.png';
import closeIcon from './images/xbutton.png';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className="hamburger-icon" onClick={toggleMenu}>
        <img src={isOpen ? closeIcon : menuIcon} alt="Menu Icon" />
      </button>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/about" onClick={toggleMenu}>About Me</Link>
        <Link to="/projects" onClick={toggleMenu}>Projects</Link>
        <Link to="/course-notes" onClick={toggleMenu}>Course Notes</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact Me</Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;