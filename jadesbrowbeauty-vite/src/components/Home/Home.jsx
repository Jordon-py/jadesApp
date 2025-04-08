import React from 'react';
import About from '../About/About.jsx';
import Footer from '../Footer/Footer.jsx';
import Gallery from '../Gallery/ImageGallery.jsx';

export default function Home() {
  return (
    <div className='home-layout'>
      <section className='home-hero'>
        <div className='home-hero-content'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl mb-4 text-blue-silver font-bold'>JadesBrowBeauty</h1>
          <h2 className='text-xl md:text-2xl font-normal text-blue-silver my-2'>Expert Eyebrow & Waxing Services</h2>
          <p className='text-base md:text-lg text-text-light my-4 leading-relaxed'>Experience the perfect blend of artistry and care for your beauty needs</p>
          
          <div className='home-cta'>
            <a 
              href="/booking" 
              className="btn-primary">
              Book Now
            </a>
            <a 
              href="/services" 
              className="btn-secondary">
              Our Services
            </a>
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
