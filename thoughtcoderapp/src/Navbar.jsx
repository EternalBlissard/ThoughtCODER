import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>ThoughtCODER</h1>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
      </div>
    </nav>
  );
}

export default Navbar;
