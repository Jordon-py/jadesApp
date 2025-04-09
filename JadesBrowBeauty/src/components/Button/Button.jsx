import React from 'react';
import './Button.css'; // Import CSS

// Accepts children for the button text/content, onClick handler,
// and an optional 'variant' prop (e.g., 'primary', 'secondary')
export default function Button({ children, onClick, variant = 'primary', type = 'button' }) {
  const buttonClasses = `btn ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'}`;

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}