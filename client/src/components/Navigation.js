import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ onMobileMenuOpen }) => {
  return(
    <nav className="navigation">
      <div className="container">
        <div className="navigation__brand">
          <NavLink to="/">Frontend Recruitment Test</NavLink>
        </div>
        <div className="navigation__bars" onClick={onMobileMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="navigation__list">
          <li className="navigation__list_item">
            <NavLink to="/" exact>Home</NavLink>
          </li>
          <li className="navigation__list_item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;