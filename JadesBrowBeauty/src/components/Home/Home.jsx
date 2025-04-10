import React from 'react';
import Button from '../Button/Button'; 
import './Home.css'; // Ensure this CSS contains the .background-video styles

export default function Home() {
  return (
    <section id="home" className="home-section">
      {/* Fixed Background Video */}
      <video autoPlay muted playsInline className="background-video">
        <source src="Ja.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
    </section>
  );
}
