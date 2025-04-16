// path to app.jsx: ../../App.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './FuturisticSidebar.css'; // All styles moved here

/**
 * FuturisticSidebar - A modern overlay dropdown sidebar with animation
 *
 * Creates an overlay sidebar with glassmorphism effects, animated transitions,
 * and dropdown menus. Styling is handled entirely by FuturisticSidebar.css.
 */
const FuturisticSidebar = ({
  menuItems = [],
  logo = null,
  title = 'Dashboard', // Changed to single quotes
  onItemClick = () => {},
  isOpen = false, // Control visibility via prop
  onToggle = () => {}
}) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Effect to detect mobile viewport
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggles the currently open dropdown menu
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Handles clicking on a menu item
  const handleMenuItemClick = (item) => {
    onItemClick(item); // Call the callback prop
    // Close sidebar on mobile after item click
    if (isMobile) {
      onToggle();
    }
  };

  // CSS classes are dynamically applied based on state
  const backdropClass = `sidebar-backdrop ${isOpen && isMobile ? 'active' : ''}`;
  // Use 'collapsed' class when isOpen is false
  const sidebarClass = `futuristic-sidebar ${isOpen ? '' : 'collapsed'}`;

  return (
    <>
      {/* Backdrop overlay for mobile */}
      <div
        className={backdropClass}
        onClick={onToggle} // Click backdrop to close
        aria-hidden='true' // Hide from screen readers
      />

      {/* Main sidebar container */}
      {/* All styling is now controlled by CSS classes */}
      <div className={sidebarClass}>
        {/* Sidebar Header */}
        <div className='sidebar-header'>
          <div className='sidebar-logo'>
            {logo && <img src={logo} alt={`${title} logo`} className='sidebar-logo-img' />} {/* Kept template literal, quotes inside are fine */}
            <span>{title}</span>
          </div>
          {/* Animated Toggle Button */}
          <button className='sidebar-toggle' onClick={onToggle} aria-label='Toggle Sidebar'> {/* Changed to single quotes */}
            {/* Spans for hamburger/close icon animation */}
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Sidebar Menu */}
        <div className='sidebar-menu'>
          {menuItems.map((menuGroup, groupIndex) => (
            <div className='dropdown-container' key={`group-${groupIndex}`}>
              {/* Dropdown Header (Trigger) */}
              <div
                className='dropdown-header'
                onClick={() => toggleDropdown(groupIndex)}
                role='button'
                tabIndex={0} // Make it focusable
                aria-expanded={openDropdown === groupIndex}
                onKeyDown={(e) => e.key === 'Enter' && toggleDropdown(groupIndex)} // Keyboard accessibility
              >
                <span>{menuGroup.label}</span>
                <span className={`icon ${openDropdown === groupIndex ? 'open' : ''}`} aria-hidden='true'>▼</span>
              </div>

              {/* Dropdown Content */}
              <div className={`dropdown-content ${openDropdown === groupIndex ? 'open' : ''}`}>
                {menuGroup.items?.map((item, itemIndex) => (
                  <div
                    key={`item-${itemIndex}`}
                    className={`menu-item ${item.active ? 'active' : ''}`}
                    onClick={() => handleMenuItemClick(item)}
                    role='button'
                    tabIndex={0} // Make items focusable
                    onKeyDown={(e) => e.key === 'Enter' && handleMenuItemClick(item)} // Keyboard accessibility
                  >
                    {/* ::before pseudo-element handles the indicator line via CSS */}
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Define PropTypes for the component
FuturisticSidebar.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
      active: PropTypes.bool,
    })),
  })),
  logo: PropTypes.string,
  title: PropTypes.string,
  onItemClick: PropTypes.func,
  isOpen: PropTypes.bool, // Prop to control open/closed state
  onToggle: PropTypes.func, // Callback to toggle the state in parent
};

// Default props
FuturisticSidebar.defaultProps = {
  menuItems: [],
  logo: null,
  title: 'Menu', // Changed to single quotes
  onItemClick: () => {},
  isOpen: false,
  onToggle: () => {},
};

export default FuturisticSidebar;