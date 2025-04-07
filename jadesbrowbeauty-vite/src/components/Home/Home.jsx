import React from 'react';
import About from '../About/About.jsx';
import Footer from '../Footer/Footer.jsx';
import Gallery from '../Gallery/ImageGallery.jsx';

export default function Home() {
  return (
    <div className='flex flex-col items-center w-full max-w-7xl mx-auto px-4'>
      <section className='w-full mb-8'>
        <div className='bg-bg-dark backdrop-blur-md rounded-md p-6 md:p-8 text-center shadow-medium w-full max-w-3xl mx-auto'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl mb-4 text-blue-silver font-bold'>JadesBrowBeauty</h1>
          <h2 className='text-xl md:text-2xl font-normal text-blue-silver my-2'>Expert Eyebrow & Waxing Services</h2>
          <p className='text-base md:text-lg text-text-light my-4 leading-relaxed'>Experience the perfect blend of artistry and care for your beauty needs</p>
          
          <div className='flex flex-wrap justify-center gap-4 md:gap-6 my-6'>
            <a 
              href="/booking" 
              className="bg-blue-silver-light text-gray-800 py-3 px-6 rounded-lg font-medium transition-all hover:bg-blue-silver hover:transform hover:scale-105 hover:shadow-strong"
            >
              Book Now
            </a>
            <a 
              href="/services" 
              className="bg-transparent border border-blue-silver-dark text-blue-silver-dark py-3 px-6 rounded-lg font-medium transition-all hover:bg-blue-silver-dark hover:text-text-light hover:transform hover:scale-105 hover:shadow-medium"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>
      
      <section className='w-full my-8'>
        <Gallery />
      </section>
      
      <section className='w-full my-8'>
        <About />
      </section>
    </div>
  );
}
