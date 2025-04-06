import React from 'react';
import './ServiceCard.css'; // or any stylesheet name

const ServiceCard = () => {
  // Example data array to map over
  const services = [
    {
      id: 1,
      title: 'Signature Brow Wax',
      description: 'Refine and shape your brows to perfection.',
      imageUrl: 'https://via.placeholder.com/300?text=Brow+Wax', // replace with real images
      buttonText: 'Book Now',
    },
    {
      id: 2,
      title: 'Brow Tint & Shape',
      description: 'Enhance your natural arch with custom tinting and expert waxing.',
      imageUrl: 'https://via.placeholder.com/300?text=Brow+Tint',
      buttonText: 'Book Now',
    },
    {
      id: 3,
      title: 'Full Face Wax',
      description: 'Smooth and radiant skin—forehead, cheeks, lip, and chin.',
      imageUrl: 'https://via.placeholder.com/300?text=Face+Wax',
      buttonText: 'Book Now',
    },
    {
      id: 4,
      title: 'Ultimate Brow & Lash Bundle',
      description: 'Transform your look with our combined brow + lash lift package.',
      imageUrl: 'https://via.placeholder.com/300?text=Brow+%26+Lash',
      buttonText: 'Book Now',
    },
  ];

  return (
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
              onClick={() => {
                // You can integrate your booking or shop link here
                // e.g., navigate to a booking page or open a product link
                alert(`Navigating to ${service.title} booking/shopping page...`);
              }}
            >
              {service.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
