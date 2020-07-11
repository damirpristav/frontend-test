import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileMenu = ({ onClose }) => {
  return(
    <div className="mobile-menu">
      <div className="mobile-menu__overlay" onClick={onClose}></div>
      <div className="mobile-menu__inner">
        <ul>
          <li><NavLink to="/" exact onClick={onClose}>Home</NavLink></li>
          <li><NavLink to="/contact" onClick={onClose}>Contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;