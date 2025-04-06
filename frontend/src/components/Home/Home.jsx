import React from 'react';
import './Home.css';
import About from '../About/About.jsx';
import Footer from '../Footer/Footer.jsx';
import Gallery from '../Gallery/ImageGallery.jsx';

export default function Home() {
  return (
    <div className='home-layout'>
      <section className='home-hero'>
        <div className='home-hero-content'>
          <h1 className='home-title'>JadesBrowBeauty</h1>
          <h2 className='home-subtitle'>Expert Eyebrow & Waxing Services</h2>
          <p className='home-tagline'>Experience the perfect blend of artistry and care for your beauty needs</p>
          
          <div className='home-cta'>
            <a href="/booking" className="btn-primary">Book Now</a>
            <a href="/services" className="btn-secondary">Our Services</a>
          </div>
        </div>
      </section>
      
      <section className='home-gallery'>
        <Gallery />
      </section>
      
      <section className='home-about'>
        <About />
      </section>
    </div>
  );
}
