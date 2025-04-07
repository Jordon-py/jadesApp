import React, { useState } from 'react';
import BookingForm from '../Booking/BookingForm.jsx';
import PropTypes from 'prop-types';

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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-bg-dark backdrop-blur-md rounded-md p-6 shadow-medium max-w-md w-full mx-4">
            <span 
              className="text-2xl text-text-light absolute right-4 top-2 cursor-pointer hover:text-blue-silver transition-colors" 
              onClick={() => setSelectedService(null)}
            >
              &times;
            </span>
            <h2 className="text-xl font-semibold text-blue-silver mb-2">{selectedCard.title}</h2>
            <p className="text-text-light mb-4">{selectedCard.description}</p>
            <img 
              src={selectedCard.imageUrl} 
              alt={selectedCard.title} 
              className="w-full h-auto rounded-md mb-4 object-cover" 
            />
            <BookingForm />
          </div>
        </div>
      )}

      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-center mb-2 text-blue-silver">Get started with Jade's Brow Beauty</h2>
        <p className="text-text-light text-center mb-8">
          Professional brow waxing and skincare treatments to help you look and feel your best.
          <br />
          Follow us on Instagram at <strong>@jadesbrowbeauty</strong>!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(service => (
            <div 
              key={service.id}
              className="bg-bg-dark backdrop-blur-md rounded-md p-4 shadow-medium flex flex-col items-center transition-transform transform hover:-translate-y-1 hover:shadow-strong"
            >
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full h-48 object-cover rounded-md mb-4" 
              />
              <h3 className="text-lg font-medium text-blue-silver mb-2">{service.title}</h3>
              <p className="text-text-light mb-4 text-center">{service.description}</p>
              <button
                className="bg-blue-silver-light text-gray-800 border-none py-3 px-6 rounded-lg font-medium cursor-pointer transition-all hover:bg-blue-silver hover:shadow-medium hover:transform hover:scale-105"
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
