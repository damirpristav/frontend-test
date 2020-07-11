import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

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

Navigation.propTypes = {
  onMobileMenuOpen: PropTypes.func.isRequired
}

export default Navigation;