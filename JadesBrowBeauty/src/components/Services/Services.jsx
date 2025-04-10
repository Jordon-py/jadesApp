import React, { useState, useEffect } from "react";
import './Services.css'; // Import CSS

// Single Service Item Component
function ServiceItem({ name, price, src }) {
  return (
    <li className="service-item">
      {/* Optional Image - check if src path is correct */}
      <img src={`/${src}`} alt={`${name} service visual`} className="service-image" />
      <div className="service-details">
        <h3 className="service-name">{name}</h3>
        <p className="service-price">${price}</p>
      </div>
    </li>
  );
}

export default function Services() {
  const serviceList = [
    { id: 1, name: "Eyebrow Shaping", price: 25 },
    { id: 2, name: "Eyebrow Tinting", price: 40 }, // Ensure this image exists in public/images
    { id: 3, name: "Eyebrow Threading", price: 35 },
    { id: 4, name: "Eyebrow Waxing", price: 30 },
    { id: 5, name: "Eyebrow Lamination", price: 50 },
    { id: 6, name: "Full Face Waxing", price: 60 },
    { id: 7, name: "Lip Waxing", price: 15 },
    { id: 8, name: "Chin Waxing", price: 20 },
    // Add more services if needed
  ];

  const [services, setServices] = useState(serviceList);

  // // Example useEffect for fetching data (keep commented if using static list)
  // useEffect(() => {
  //   fetch('/api/services') // Replace with your actual API endpoint
  //     .then(response => response.json())
  //     .then(data => setServices(data))
  //     .catch(error => console.error("Error fetching services:", error));
  // }, []);

  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <ul className="services-list">
        {services.map(service => (
          <ServiceItem
            key={service.id}
            name={service.name}
            price={service.price}
            src={service.src} // Pass src prop
          />
        ))}
      </ul>
    </section>
  );
}