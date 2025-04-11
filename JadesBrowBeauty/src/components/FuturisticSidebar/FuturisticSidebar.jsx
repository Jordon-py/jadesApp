// path to app.jsx: ../../App.jsx
import React, { useState, useEffect } from 'react';

/**
 * FuturisticSidebar - A modern overlay dropdown sidebar with animation
 * 
 * This component creates an overlay sidebar with glassmorphism effects,
 * animated transitions, and dropdown menus, without affecting page layout.
 */
const FuturisticSidebar = ({ 
  menuItems = [], 
  logo = null, 
  title = 'Dashboard', 
  onItemClick = () => {},
  isOpen = false,
  onToggle = () => {}
}) => {
  // State for open dropdown
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Toggle dropdown open/closed
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Handle menu item click
  const handleMenuItemClick = (item) => {
    onItemClick(item);
    
    // On mobile, close the sidebar when an item is clicked
    if (isMobile) {
      onToggle();
    }
  };

  // CSS styles for the sidebar component
  const styles = {
    backdrop: {
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 20, 0.5)',
      backdropFilter: 'blur(3px)',
      WebkitBackdropFilter: 'blur(3px)',
      zIndex: 40,
      opacity: isOpen ? 1 : 0,
      pointerEvents: isOpen ? 'auto' : 'none',
      transition: 'opacity 0.3s ease'
    },
    sidebar: {
      position: 'fixed',
      height: '100vh',
      width: '240px', // Reduced from 280px
      left: 0,
      top: 0,
      backgroundColor: 'rgba(10, 10, 20, 0.75)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderRight: '1px solid rgba(255, 255, 255, 0.08)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 50,
      boxShadow: '0 0 25px rgba(0, 0, 10, 0.3)',
      overflowX: 'hidden',
      overflowY: 'auto',
      color: 'lch(90% 0 250)',
      transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '1.1rem',
      fontWeight: '600',
      color: 'lch(90% 0 250)'
    },
    logoImg: {
      maxHeight: '1.5rem', // Reduced from 2.5rem
      width: 'auto'
    },
    toggle: {
      width: '36px',
      height: '36px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '5px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      position: 'relative',
      transition: 'all 0.3s ease',
      overflow: 'hidden',
      outline: 'none'
    },
    toggleLine: (index) => ({
      display: 'block',
      width: '20px',
      height: '2px',
      background: 'lch(90% 0 250)',
      transition: 'all 0.4s ease',
      transformOrigin: 'center',
      ...(isOpen && index === 0 && { transform: 'translateY(7px) rotate(45deg)' }),
      ...(isOpen && index === 1 && { opacity: 0 }),
      ...(isOpen && index === 2 && { transform: 'translateY(-7px) rotate(-45deg)' })
    }),
    menuContainer: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0.75rem',
      overflow: 'hidden',
      flex: 1
    },
    dropdownItem: {
      marginBottom: '0.5rem',
      borderRadius: '8px',
      overflow: 'hidden'
    },
    dropdownHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.6rem 0.75rem',
      background: 'rgba(255, 255, 255, 0.05)',
      color: 'lch(85% 0 250)',
      cursor: 'pointer',
      borderRadius: '6px',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(255, 255, 255, 0.08)'
    },
    dropdownContent: (isOpen) => ({
      maxHeight: isOpen ? '500px' : '0',
      overflow: 'hidden',
      transition: 'max-height 0.5s ease-in-out',
      background: 'rgba(0, 0, 30, 0.6)',
      borderRadius: '0 0 6px 6px',
      ...(isOpen && {
        borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
        borderRight: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      })
    }),
    menuItem: (active) => ({
      padding: '0.6rem 1.25rem',
      display: 'flex',
      alignItems: 'center',
      color: active ? 'lch(95% 0 250)' : 'lch(80% 0 250)',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      background: active ? 'rgba(100, 140, 255, 0.15)' : 'transparent'
    }),
    menuItemIndicator: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '3px',
      height: '100%',
      background: 'linear-gradient(180deg, rgba(100, 220, 255, 0.8), rgba(120, 120, 255, 0.8))',
      boxShadow: '0 0 8px rgba(100, 200, 255, 0.6)',
      opacity: 0,
      transition: 'opacity 0.3s ease'
    },
    menuItemActive: {
      background: 'rgba(100, 140, 255, 0.15)',
      color: 'lch(95% 0 250)'
    },
    chevron: (isOpen) => ({
      transition: 'transform 0.3s ease',
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
    })
  };

  return (
    <>
      {/* Backdrop overlay - shown when sidebar is open */}
      <div 
        style={styles.backdrop}
        onClick={onToggle}
      />
      
      {/* Main sidebar container */}
      <div style={styles.sidebar}>
        {/* Header with logo and toggle button */}
        <div style={styles.header}>
          <div style={styles.logo}>
            {logo && <img src={logo} alt={title} style={styles.logoImg} />}
            <span>{title}</span>
          </div>
          <button style={styles.toggle} onClick={onToggle}>
            <span style={styles.toggleLine(0)}></span>
            <span style={styles.toggleLine(1)}></span>
            <span style={styles.toggleLine(2)}></span>
          </button>
        </div>
        
        {/* Menu items container */}
        <div style={styles.menuContainer}>
          {menuItems.map((menuGroup, groupIndex) => (
            <div style={styles.dropdownItem} key={`group-${groupIndex}`}>
              {/* Dropdown header/trigger */}
              <div 
                style={styles.dropdownHeader}
                onClick={() => toggleDropdown(groupIndex)}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(120, 120, 250, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span>{menuGroup.label}</span>
                <span style={styles.chevron(openDropdown === groupIndex)}>▼</span>
              </div>
              
              {/* Dropdown content */}
              <div style={styles.dropdownContent(openDropdown === groupIndex)}>
                {menuGroup.items?.map((item, itemIndex) => (
                  <div 
                    key={`item-${itemIndex}`}
                    style={styles.menuItem(item.active)}
                    onClick={() => handleMenuItemClick(item)}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.color = 'lch(95% 0 250)';
                      const indicator = e.currentTarget.querySelector('.indicator');
                      if (indicator) indicator.style.opacity = '1';
                    }}
                    onMouseOut={(e) => {
                      if (!item.active) {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'lch(80% 0 250)';
                      } else {
                        e.currentTarget.style.background = 'rgba(100, 140, 255, 0.15)';
                      }
                      const indicator = e.currentTarget.querySelector('.indicator');
                      if (indicator) indicator.style.opacity = '0';
                    }}
                  >
                    <div className="indicator" style={styles.menuItemIndicator}></div>
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

export default FuturisticSidebar;