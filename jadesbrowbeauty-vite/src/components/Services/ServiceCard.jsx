import React, { useState } from 'react';
import BookingForm from '../Booking/BookingForm.jsx';
import PropTypes from 'prop-types';
import './ServiceCard.css';

export default function ServiceCard() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Signature Brow Wax',
      description: 'Refine and shape your brows to perfection.',
      imageUrl: 'IMG_1AfterBre850.png',
      buttonText: 'Book Now',
    },
    {
      id: 2,
      title: 'Brow Tint & Shape',
      description: 'Enhance your natural arch with custom tinting and expert waxing.',
      imageUrl: 'BrowtintShape.png',
      buttonText: 'Book Now',
    },
    {
      id: 3,
      title: 'Full Face Wax',
      description: 'Smooth and radiant skin—forehead, cheeks, lip, and chin.',
      imageUrl: 'fullFaceWax.png',
      buttonText: 'Book Now',
    },
    {
      id: 4,
      title: 'Ultimate Brow & Lash Bundle',
      description: 'Transform your look with our combined brow + lash lift package.',
      imageUrl: 'ultimateBrowandLash.png',
      buttonText: 'Book Now',
    },
  ];

  const selectedCard = services.find(service => service.id === selectedService);

  return (
    <>
      {selectedService && selectedCard && (
        <div className="modal-overlay">
          <div className="modal-container">
            <span 
              className="modal-close" 
              onClick={() => setSelectedService(null)}
            >
              &times;
            </span>
            <h2 className="modal-title">{selectedCard.title}</h2>
            <p className="modal-description">{selectedCard.description}</p>
            <img 
              src={selectedCard.imageUrl} 
              alt={selectedCard.title} 
              className="modal-image" 
            />
            <BookingForm />
          </div>
        </div>
      )}

      <section className="services-section">
        <h2 className="services-heading">Get started with Jade's Brow Beauty</h2>
        <p className="services-subheading">
          Professional brow waxing and skincare treatments to help you look and feel your best.
          <br />
          Follow us on Instagram at <strong>@jadesbrowbeauty</strong>!
        </p>

        <div className="services-grid">
          {services.map(service => (
            <div 
              key={service.id}
              className="service-card"
            >
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="service-image" 
              />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button
                className="service-button"
                onClick={() => setSelectedService(service.id)}
              >
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// PropTypes for when this component is used elsewhere and receives props
ServiceCard.propTypes = {
  customServices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired,
    })
  ),
};
