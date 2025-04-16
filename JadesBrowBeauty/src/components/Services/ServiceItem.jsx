// file path to app.jsx: ../../App.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Services.css'; // Styles for the item are in Services.css
import Button from '../Button/Button';

// Default image if service data doesn't provide one
const DEFAULT_IMAGE = 'browMenu.jpg';
// Default booking link if service data doesn't provide one
const DEFAULT_BOOKING_LINK = 'https://book.squareup.com/appointments/22e54cea-00dd-45ab-ba40-225edc9d79db/location/C8VRR5692G797/services';


/**
 * ServiceItem Component
 *
 * Renders a single service card with details and a booking button.
 * Receives all service data via props.
 */
function ServiceItem({ id, name, price, href, description, duration, image }) {
  // Handles the click event for the "Book Now" button.
  // Opens the specific service booking link or a default link in a new tab.
  const handleBookNow = () => {
    const bookingLink = href || DEFAULT_BOOKING_LINK;
    window.open(bookingLink, '_blank', 'noopener,noreferrer'); // Added rel attribute
  };

  return (
    <li className='service-item' data-service-id={id}> {/* Added data attribute */}
      {/* Image container */}
      <div className='service-image-container'>
        <img
          // Use image from prop, fallback to default
          src={image || DEFAULT_IMAGE}
          alt={`${name} service`}
          className='service-image'
          loading='lazy' // Lazy load images for performance
        />
      </div>
      {/* Details container */}
      <div className='service-details'>
        <h3 className='service-name'>{name}</h3>
        <p className='service-price'>${price}</p>
        {/* Conditionally render duration if provided */}
        {duration && <p className='service-duration'>{duration}</p>}
        {/* Conditionally render description if provided */}
        {description && <p className='service-description'>{description}</p>}
        {/* Use Button component, passing the specific handler */}
        <Button
          className='book-now-button' // Class for specific styling if needed
          onClick={handleBookNow}
          variant='secondary' // Example: Use secondary style for buttons in cards
        >
          Book Now
        </Button>
      </div>
    </li>
  );
}

// Define PropTypes for ServiceItem
ServiceItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  href: PropTypes.string, // Optional booking link per service
  description: PropTypes.string,
  duration: PropTypes.string,
  image: PropTypes.string, // Image path for the service
};

// Define default props for optional values
ServiceItem.defaultProps = {
  href: null,
  description: '',
  duration: '',
  image: DEFAULT_IMAGE, // Use the constant for default
};

export default ServiceItem;
