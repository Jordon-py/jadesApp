import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <>
      <div className='container'>
          <div className='hero-section'>
          <h1>JadesBrowBeauty</h1>
          <h2>Expert Eyebrow & Waxing Services</h2>
          <p>Experience the perfect blend of artistry and care for your beauty needs</p>
          <div className='cta-buttons'>
            <a href="/booking" className="primary-button">Book Now</a>
            <a href="/services" className="secondary-button">Our Services</a>
          </div>
          </div>
          <div className='intro-section'>
            <p>
              At JadesBrowBeauty, we believe beauty should feel effortless — and empowering.
              With a focus on precise eyebrow waxing, custom microblading, and full-body waxing services, 
              our mission is simple: to help you look and feel your absolute best.
            </p>
          </div>
        </div>
    </>
  );
}
