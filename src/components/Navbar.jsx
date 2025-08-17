import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo + Name */}
        <Link to="/" className="navbar-logo">
          <img 
            src="https://static.vecteezy.com/system/resources/thumbnails/036/162/934/small_2x/university-college-graduate-campus-logo-design-inspiration-template-design-emblem-for-school-vector.jpg" 
            alt="College Logo" 
            className="logo-img" 
          />
          <span>GLOBAL UNIVERSITY</span>
        </Link>

        {/* Hamburger Menu Icon */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Nav Links */}
        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link to="/faculty" onClick={() => setMenuOpen(false)}>Faculty</Link>
          <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>Login</Link>
        </div>
      </div>
    </nav>
  );
}
