import React from 'react';
import './Nav.css'; // Import the CSS for styling

export default function Nav() {
  return (
    <nav className="main-nav">
      <a href="/" className="nav-logo">
        {/* You can put your logo text or an img tag here */}
        <img src="/Ja.svg" alt="Logo" className="nav-logo" />
      </a>
      <ul className="nav-links">
        <li><a href="#home" className="nav-link">Home</a></li>
        <li><a href="#services" className="nav-link">Services</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}