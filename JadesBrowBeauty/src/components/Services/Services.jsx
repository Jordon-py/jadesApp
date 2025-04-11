/** @format */

//////////////////////////////////////////////////////////////////////
// React Component to Render the Services
///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css'; // Import CSS

export default function Services() {
  return (
    <div className="services-container">
      <ServiceCard />
    </div>
  );
}
