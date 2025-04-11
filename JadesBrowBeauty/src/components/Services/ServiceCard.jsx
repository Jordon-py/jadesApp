import React, { useState, useEffect } from 'react';
import './Services.css'; // Import CSS
import Button from '../Button/Button';

// Single Service Item Component
function ServiceItem({ id, name, price, src, description, duration }) {
  // Determine image path based on service name or id
  const getImagePath = () => {
    // Map service IDs to appropriate images in public folder
    const imageMap = {
      1: '/Brow Wax & Shape.png',
      2: '/BrowtintShape.png',
      3: '/Browandlash.png',
      4: '/BrowtintShape.png', // Using tint shape for lamination as well
      5: '/BrowtintShape.png', // Using tint shape for lamination + tint
      6: '/Browandlash.png', // Brow & Lash Luxe
      7: '/ultimateBrowandLash.png',
      8: '/fullFaceWax.png',
      9: '/fullface.png', // Half face
      10: '/min.png', // Nose wax (using min.png as placeholder)
      11: '/min.png', // Lip wax (using min.png as placeholder)
      12: '/min.png', // Chin wax (using min.png as placeholder)
      13: '/underArm.png', // Underarm
      21: '/image (1).webp', // Bikini line
      22: '/image (2).webp', // Brazilian
    };
    
    return imageMap[id] || '/min.png'; // Default to min.png if no match
  };

  return (
    <li className="service-item">
      <img 
        src={getImagePath()} 
        alt={`${name} service`} 
        className="service-image"
        loading="lazy"
      />
      <div className="service-details">
        <h3 className="service-name">{name}</h3>
        <p className="service-price">${price}</p>
        {duration && <p className="service-duration">{duration}</p>}
        {description && <p className="service-description">{description}</p>}
      </div>
    </li>
  );
}

export default function Services() {
  const serviceList = [
    { id: 1,href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Brow Wax & Shape", price: 30, duration: "20 min", description: "Precision brow waxing to clean and shape your brows." },
    { id: 2,href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Brow Wax & Tint", price: 50, duration: "20 min", description: "Combine waxing with a tint for added definition." },
    { id: 3,href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Lash Lamination & Tint", price: 120, duration: "1 hr", description: "Enhance your lashes with lamination and tint for a natural lift." },
    { id: 4,href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Brow Wax & Lamination", price: 100, duration: "45 min", description: "Achieve styled brows with waxing and lamination." },
    { id: 5,href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Brow Wax, Lamination & Tint", price: 120, duration: "45 min", description: "Complete brow transformation with wax, lamination and tint." },
    { id: 6,href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Brow & Lash Luxe", price: 140, duration: "1 hr", description: "A premium treatment combining brow and lash services." },
    { id: 7,href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Brow & Lash Luxe + Jelly Mask & Globes", price: 160, duration: "1 hr 15 min", description: "Premium brow and lash treatment with hydrating jelly mask and cooling globes." },
    { id: 8,href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Full Face Waxing", price: 80, duration: "30 min", description: "Comprehensive waxing covering the entire face for a smooth finish." },
    { id: 9,href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Half Face Waxing", price: 60, duration: "20 min", description: "Partial facial waxing for unwanted hair removal." },
    { id: 10, href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Nose Waxing", price: 15, duration: "10 min", description: "Gentle waxing to remove nasal hair with minimal discomfort." },
    { id: 11, href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Lip Waxing", price: 15, duration: "10 min", description: "Quick and precise waxing for the upper lip." },
    { id: 12, href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Chin Waxing", price: 20, duration: "10 min", description: "Effective waxing for the chin area to enhance facial aesthetics." },
    { id: 13, href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Underarm Waxing", price: 30, duration: "15 min", description: "Smooth and hygienic waxing for the underarm area." },
    { id: 14, href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Full Arm Waxing", price: 60, duration: "30 min", description: "Complete arm waxing for hair-free smooth arms." },
    { id: 15, href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Half Arm Waxing", price: 40, duration: "20 min", description: "Targeted waxing for either upper or lower arm areas." },
    { id: 16, href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Full Leg Waxing", price: 80, duration: "40 min", description: "Complete leg waxing for long-lasting smoothness." },
    { id: 17, href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Lower Leg Waxing", price: 45, duration: "25 min", description: "Focused waxing on the lower leg for a neat finish." },
    { id: 18, href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Chest Waxing", price: 50, duration: "20 min", description: "Professional chest waxing for a clean appearance." },
    { id: 19, href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Full Back Waxing", price: 80, duration: "40 min", description: "Comprehensive waxing for a completely hair-free back." },
    { id: 20, href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Upper/Lower Back Waxing", price: 45, duration: "25 min", description: "Targeted back waxing for either upper or lower sections." },
    { id: 21, href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Bikini Line Waxing", price: 45, duration: "15 min", description: "Precision waxing for a well-groomed bikini line." },
    { id: 22, href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Brazilian Waxing", price: 60, duration: "30 min", description: "Full Brazilian waxing for complete hair removal." },
    { id: 23, href:"https://app.squareup.com/appointments/book/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797/start ", name: "Cool Globes Massage & Hydro Jelly Mask Add-on", price: 30, duration: "15 min", description: "Refreshing facial add-on with cooling globes and hydrating jelly mask." }
  ];

  // Featured services - you can modify this list to show different services
  const featuredServiceIds = [1, 22, 7];

  return (
    <section id="services" className="services-section">
      <h2 className='italianno-regular'>Our Services</h2>
      <ul className="services-list">
        {serviceList.map(service => {
          if (featuredServiceIds.includes(service.id)) {
            return (
              <>
                <ServiceItem
                  key={service.id}
                  id={service.id}
                  name={service.name}
                  price={service.price}
                  duration={service.duration}
                  description={ service.description }
                  bookNow={service.href}

                />
             
              </>
            );
          }
          return null; // Skip non-featured services
        })}
      </ul>
    </section>
  );
}
