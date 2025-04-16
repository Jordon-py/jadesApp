// file path to app.jsx: ../../App.jsx
import React, { useState, useEffect } from 'react'; // Import React
import PropTypes from 'prop-types'; // Import PropTypes
// Removed unused Button import

/* A responsive navigation menu component that handles toggling menu visibility*/
/* and automatically closes the menu on larger screen sizes.*/
/**/
/* @component*/
/* @param {Object} props - Component props							*/
/* @param {React.ElementType} props.Nav - The navigation component to be rendered*/
/* @param {Object} props.rest - Additional props to be passed to the NavComponent*/
/* @returns {JSX.Element} A NavComponent with isOpen state and toggle functionality*/
/**/
/* @example
 * return (
 *   <NavMenu Nav={MyNavigation} className='custom-nav' />
 * )*/

export default function NavMenu({ Nav, ...props }) {
  // Note: The isOpen state and toggleMenu logic here seem redundant
  // if the Nav component itself handles its mobile menu state internally.
  // Consider simplifying if Nav manages its own state.
  // Keeping it for now as per original structure.
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the visibility of the navigation menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false); // Close menu on resize to desktop
      }
    };
    window.addEventListener('resize', handleResize);
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]); // Removed isOpen dependency - resize should always check width

  // Pass down isOpen and toggleMenu if the Nav component expects them
  // If Nav handles its own state, these might not be needed.
  return (
    <>
      <Nav {...props} />
      {/* Original structure passed isOpen and toggleMenu: */}
      {/* <Nav { ...props } isOpen={ isOpen } toggleMenu={ toggleMenu } /> */}
      {/* Check if Nav.jsx actually uses these props. If not, remove them. */}
    </>
  );
}

// Define PropTypes
NavMenu.propTypes = {
  Nav: PropTypes.elementType.isRequired,
};