import React from 'react';
import './Button.css'; // Import CSS

// Accepts children for the button text/content, onClick handler,
// and an optional 'variant' prop (e.g., 'primary', 'secondary')
export default function Button({ children, onClick, variant = 'primary', type = 'button' }) {
  const buttonClasses = `btn ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'}`;
  const onClickHandler = () => {
    if (onClick) {
      onClick();
    } else {
      window.location.href = "https://book.squareup.com/appointments/22e54cea-00dd-45ab-ba40-225edc9d79db/location/C8VRR5692G797/services";
    }
    console.log('Button clicked!');
  }

  return (
    <button type={type} className={buttonClasses} onClick={onClickHandler}>
      {children}
    </button>
  );
}