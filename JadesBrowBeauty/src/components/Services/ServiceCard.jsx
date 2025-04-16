// file path to app.jsx: ../../App.jsx
import React from 'react'; // Keep React import
import PropTypes from 'prop-types'; // Import PropTypes
import './Services.css'; // Import CSS
import Button from '../Button/Button';
// Removed unused useState, useEffect, useLocation

// Define image map outside component or pass via props if dynamic
const imageMap = {
  1: '/BrowShape.png',
  2: '/BrowtintShape.png',
  3: '/Browandlash.png',
  4: '/BrowtintShape.png',
  5: '/BrowtintShape.png',
  6: '/Browandlash.png',
  7: '/ultimateBrowandLash.png',
  8: '/fullFaceWax.png',
  9: '/fullface.png',
  10: '/min.png',
  11: '/min.png',
  12: '/min.png',
  13: '/underArm.png',
  14: '/image (1).webp', // Assuming Full Arm maps here? Check IDs
  15: '/image (1).webp', // Assuming Half Arm maps here? Check IDs
  16: '/image (1).webp', // Assuming Full Leg maps here? Check IDs
  17: '/image (1).webp', // Assuming Lower Leg maps here? Check IDs
  18: '/image (1).webp', // Assuming Chest maps here? Check IDs
  19: '/image (1).webp', // Assuming Full Back maps here? Check IDs
  20: '/image (1).webp', // Assuming Upper/Lower Back maps here? Check IDs
  21: '/image (1).webp',
  22: '/image (2).webp',
  23: '/image (1).webp', // Assuming Add-on maps here? Check IDs
};

// Helper function to get image path
const getImagePath = (id) => {
  return imageMap[id] || '/min.png'; // Default image
};

// Single Service Item Component - Receives service data as props
function ServiceItem({ id, name, price, href, description, duration }) {
  const handleBookNow = () => {
    // Use the provided href or a default booking link
    const bookingLink = href || "https://book.squareup.com/appointments/22e54cea-00dd-45ab-ba40-225edc9d79db/location/C8VRR5692G797/services";
    window.open(bookingLink, '_blank'); // Open in new tab
  };

  return (
    <li className='service-item'>
      {/* Image container */}
      <div className='service-image-container'>
        <img
          src={getImagePath(id)}
          alt={`${name} service`}
          className='service-image'
          loading='lazy' // Lazy load images
        />
      </div>
      <div className='service-details'>
        <h3 className='service-name'>{name}</h3>
        <p className='service-price'>${price}</p>
        {duration && <p className='service-duration'>{duration}</p>}
        {description && <p className='service-description'>{description}</p>}
        {/* Use Button component */}
        <Button
          className='book-now-button' // Class for specific styling if needed
          onClick={handleBookNow}
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
};

// Main Services Component - Receives list of services as props
export default function Services({ services = [], featuredServiceIds = [1, 22, 7] }) {
  // Filter services to show only featured ones
  const featuredServices = services.filter(service => featuredServiceIds.includes(service.id));

  return (
    <section id='services' className='services-section'>
      {/* Use the semantic class name for the title */}
      <h2 className='services-title'>Our Services</h2>
      {featuredServices.length > 0 ? (
        <ul className='services-list'>
          {featuredServices.map(service => (
            <ServiceItem
              key={service.id}
              id={service.id}
              name={service.name}
              price={service.price}
              duration={service.duration}
              description={service.description}
              href={service.href} // Pass specific booking link if available
            />
          ))}
        </ul>
      ) : (
        <p>Loading services...</p> // Placeholder while data loads or if empty
      )}
    </section>
  );
}

// Define PropTypes for Services component
Services.propTypes = {
  services: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    href: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.string,
  })),
  featuredServiceIds: PropTypes.arrayOf(PropTypes.number),
};
