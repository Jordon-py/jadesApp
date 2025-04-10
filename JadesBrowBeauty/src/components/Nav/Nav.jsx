import React, { useState, useEffect } from 'react';
import './Nav.css'; // Import the CSS for styling

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close any open dropdowns when toggling the menu
    setActiveDropdown(null);
  };

  const toggleDropdown = (index, event) => {
    // Only toggle dropdowns on mobile
    if (window.innerWidth <= 768) {
      event.preventDefault();
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  // Close mobile menu on window resize (if screen becomes larger)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  return (
    <nav className="main-nav">
      <a href="/" className="nav-logo">
        <img src="/Ja.svg" alt="Logo" className="nav-logo-img" />
      </a>
      
      <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={`nav-links ${mobileMenuOpen ? 'show' : ''}`}>
        <li><a href="#home" className="nav-link">Home</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
        <li><a href="#booking" className="nav-link book-now">Book Now</a></li>
      </ul>
    </nav>
  );
}