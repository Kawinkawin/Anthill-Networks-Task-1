import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span>Car</span>
        </Link>

        <div className="navbar-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item dropdown">
            <span className="navbar-link">
              Explore <ChevronDown size={16} />
            </span>
            <div className="dropdown-content">
              <Link to="/certified-pre-owned">Certified Pre-Owned</Link>
              <Link to="/">New Cars</Link>
              <Link to="/">Used Cars</Link>
            </div>
          </li>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Services</Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Contact</Link>
          </li>
        </ul>

        <div className="navbar-buttons">
          {/* <button className="btn-secondary">Sign In</button> */}
          <Link to="src\pages\login\login.tsx">
            <button className="btn-secondary">Login</button>
          </Link>

          <button className="btn-primary">Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;