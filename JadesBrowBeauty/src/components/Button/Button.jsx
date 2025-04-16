// file path to app.jsx: ../../App.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Button.css'; // Import CSS

/**
 * Button Component
 *
 * A reusable button component with primary and secondary variants.
 * Accepts children for text/content, an onClick handler, variant, and type.
 * The specific action (e.g., navigation) should be defined in the onClick prop
 * passed by the parent component.
 */
export default function Button({ children, onClick, variant = 'primary', type = 'button', className = '' }) {
  // Combine base class, variant class, and any additional classes passed via props
  const buttonClasses = `btn ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'} ${className}`.trim();

  // Handles the button click. Executes the passed onClick function if provided.
  const onClickHandler = (event) => {
    if (onClick) {
      onClick(event); // Pass the event object to the handler
    }
    // Removed hardcoded fallback navigation
    console.log('Button clicked!');
  };

  return (
    <button type={type} className={buttonClasses} onClick={onClickHandler}>
      {children}
    </button>
  );
}

// Define PropTypes for the component
Button.propTypes = {
  children: PropTypes.node.isRequired, // Button content (text, icon, etc.)
  onClick: PropTypes.func, // Optional click handler function
  variant: PropTypes.oneOf(['primary', 'secondary']), // Style variant
  type: PropTypes.string, // Button type (button, submit, reset)
  className: PropTypes.string, // Allow passing additional CSS classes
};

// Define default props for optional ones
Button.defaultProps = {
  onClick: null,
  variant: 'primary',
  type: 'button',
  className: '',
};