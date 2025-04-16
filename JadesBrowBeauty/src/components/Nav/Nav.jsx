// file path to app.jsx: ../../App.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Nav.css'; // Import the CSS for styling

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Removed unused activeDropdown state and toggleDropdown function

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // setActiveDropdown(null); // No longer needed
  };

  // Close mobile menu on window resize (if screen becomes larger)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
        // setActiveDropdown(null); // No longer needed
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  return (
    <nav className='main-nav'>
      <a href='/' className='nav-logo'>
        <img src='/Ja.svg' alt='Logo' className='nav-logo-img' />
      </a>

      <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${mobileMenuOpen ? 'show' : ''}`}>
        <li><a href='#home' className='nav-link'>Home</a></li>
        <li><a href='#contact' className='nav-link'>Contact</a></li>
        <li><a href='https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start' className='nav-link book-now' target='_blank' rel='noopener noreferrer'>Book Now</a></li> {/* Added target and rel */}
      </ul>
    </nav>
  );
}

// Define PropTypes (currently none needed)
Nav.propTypes = {
  // No props currently accepted
};