import NavComponent from './Nav';
import { useState } from 'react';
import { useEffect } from 'react';	
import Button from '../Button/Button';


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
  *   <NavMenu Nav={MyNavigation} className="custom-nav" />
  * )*/
 
export default function NavMenu({ Nav, ...props }) {
	const [isOpen, setIsOpen] = useState(false);
	// Toggles the visibility of the navigation menu
	const toggleMenu = () => {
	  setIsOpen(!isOpen);
	};

	useEffect(() => {
	  const handleResize = () => {
		if (window.innerWidth > 768) {
		  setIsOpen(false);
		}
	  };
	  window.addEventListener('resize', handleResize);
	  return () => {
		window.removeEventListener('resize', handleResize);
	  };
	}, [isOpen]);
	
  return (
	  <><NavComponent { ...props } isOpen={ isOpen } toggleMenu={ toggleMenu } /></>
  );
}