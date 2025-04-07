import React, { useState } from 'react';
import './ServiceCard.css';
import BookingForm from '../BookingForm/BookingForm.jsx';

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
      imageUrl: 'https://github.com/Jordon-py/jadesApp/blob/e8eadd24a448c8079138caf8fc7950ef540e9298/frontend/public/IMG_3FaceWax.png',
      buttonText: 'Book Now',
    },
    {
      id: 4,
      title: 'Ultimate Brow & Lash Bundle',
      description: 'Transform your look with our combined brow + lash lift package.',
      imageUrl: 'https://github.com/Jordon-py/jadesApp/blob/e8eadd24a448c8079138caf8fc7950ef540e9298/frontend/public/IMG_4BrowLash.png',
      buttonText: 'Book Now',
    },
  ];

  const selectedCard = services.find(service => service.id === selectedService);

  return (
    <>
      {selectedService && selectedCard && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedService(null)}>&times;</span>
            <h2>{selectedCard.title}</h2>
            <p>{selectedCard.description}</p>
            <img src={selectedCard.imageUrl} alt={selectedCard.title} className="modal-image" />
            <BookingForm />
          </div>
        </div>
      )}

      <section className="service-section">
        <h2 className="section-title">Get started with Jade’s Brow Beauty</h2>
        <p className="section-subtitle">
          Professional brow waxing and skincare treatments to help you look and feel your best.
          <br />
          Follow us at <strong>@jadesbrowbeauty</strong>!
        </p>

        <div className="service-Card">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <img src={service.imageUrl} alt={service.title} className="service-image" />
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
