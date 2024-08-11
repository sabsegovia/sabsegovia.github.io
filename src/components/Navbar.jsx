import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-toggle" onClick={toggleNavbar}>
          &#9776; {}
        </button>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
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
      </div>
    </nav>
  );
};

export default Navbar;


export default Navbar;
