import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" exact activeClassName="active-link" className="nav-link">
          Home
        </NavLink>
                <NavLink to="/watchlist" activeClassName="active-link" className="nav-link">
          Watchlist
        </NavLink>
        <NavLink to="/favorites" activeClassName="active-link" className="nav-link">
          Favoritos
        </NavLink>
        <NavLink to="/watched" activeClassName="active-link" className="nav-link">
          Watched
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;