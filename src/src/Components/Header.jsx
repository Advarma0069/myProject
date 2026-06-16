import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Left Side - Name / Logo */}
        <Link to="/" className="header-title">AdityaVS</Link>

        {/* Hamburger for Mobile */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span className={isMobileMenuOpen ? "bar rotate1" : "bar"}></span>
          <span className={isMobileMenuOpen ? "bar fade" : "bar"}></span>
          <span className={isMobileMenuOpen ? "bar rotate2" : "bar"}></span>
        </div>

        {/* Navigation Menu */}
        <nav className={isMobileMenuOpen ? "navbar active" : "navbar"}>
          <ul className="nav-list">
            <li><NavLink to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Me</NavLink></li>
            <li><NavLink to="/skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Skills</NavLink></li>
            <li><NavLink to="/experience" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Experience</NavLink></li> {/* Added Experience link */}
            <li><NavLink to="/projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</NavLink></li>
            <li><NavLink to="/achievements" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Achievements</NavLink></li>
            <li><NavLink to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
