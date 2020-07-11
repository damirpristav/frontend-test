import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return(
    <nav className="navigation">
      <div className="container">
        <div className="navigation__brand">
          <NavLink to="/">Frontend Recruitment Test</NavLink>
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