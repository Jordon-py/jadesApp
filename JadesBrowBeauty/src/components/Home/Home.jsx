import React from 'react';
import Button from '../Button/Button'; 
import './Home.css'; // Ensure this CSS contains the .background-video styles

export default function Home() {
  return (
    <>
      <div id="p" className="home-header">
        <img className="pic" src="underArm.png" alt="underarm" />
        <p id="p1">At Jade’s Brow Beauty, 
              We specialize in precision eyebrow waxing and full-body waxing services.<br />
              <br /> We offer a professional approach wrapped in genuine friendliness — so every appointment feels like catching up with a friend (who happens to be amazing at brows).
          </p>
      </div>
      <div className="home-container">
        
        <section id="home" className="home-section">
              {/* Fixed Background Video */}
              <video autoPlay muted playsInline className="background-video">
                <source src="Ja.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            
            </section>
          </div>
      </>
  );
}
