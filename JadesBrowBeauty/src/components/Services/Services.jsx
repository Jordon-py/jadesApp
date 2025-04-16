// file path to app.jsx: ../../App.jsx
/** @format */

import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import ServiceItem from './ServiceItem'; // Import the item component
import './Services.css'; // Import CSS

/**
 * ServicesSection Component
 *
 * Renders a section displaying a list of service items.
 * It receives the list of services to display as a prop.
 */
export default function ServicesSection({ services = [] }) {
  return (
    <div id='services' className='services-container'>
        <section id='services' className='services-section'>
          {/* Use the semantic class name for the title */}
          <h2 className='services-title'>Our Services</h2>
          {services.length > 0 ? (
            <ul className='services-list'>
              {services.map(service => (
                <ServiceItem
                  key={service.id}
                  id={service.id}
                  name={service.name}
                  price={service.price}
                  duration={service.duration}
                  description={service.description}
                  href={service.href} // Pass specific booking link if available
                  image={service.image} // Pass image path from service object
                />
              ))}
            </ul>
          ) : (
            // Display a message if no services are passed or data is loading
            <p>No featured services available at this moment.</p>
          )}
        </section>
      
        <p className='home-intro-text'>
          At Jade’s Brow Beauty, we specialize in precision eyebrow waxing and full-body waxing services.
          <br /><br />
          We offer a professional approach wrapped in genuine friendliness — so every appointment feels like catching up with a friend (who happens to be amazing at brows).
        </p>
      </div>
  
  );
}

// Define PropTypes for ServicesSection component
ServicesSection.propTypes = {
  services: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    href: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.string,
    image: PropTypes.string, // Expect image path in data
  })),
};
