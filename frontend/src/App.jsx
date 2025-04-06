import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Context Providers
import { ServicesProvider } from './contexts/ServicesContext';

import { Scrollbars } from 'react-custom-scrollbars-2';


// Use lazy loading for components
const Home = lazy(() => import('./components/Home/Home.jsx'));
const About = lazy(() => import('./components/About/About.jsx'));
const ServiceCard = lazy(() => import('./components/Services/ServiceCard.jsx'));
const BookingForm = lazy(() => import('./components/Booking/BookingForm.jsx'));
const Gallery = lazy(() => import('./components/Gallery/ImageGallery.jsx'));
const Nav = lazy(() => import('./components/Nav/Nav.jsx'));

// CSS imports
import './App.css';
import './index.css';
import Footer from './components/Footer/Footer.jsx';
import ServiceCard from './components/Services/ServiceCard.jsx';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black" style={{ zIndex: 9999 }}>
        <div className="text-center">
          <h1 className="text-3xl font-light text-white mb-4">Loading JadesBrowBeauty</h1>
          <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <ServicesProvider>
      <Router>
        {/* Scrollbars for the main content */}
        <Scrollbars
          style={{ height: '100vh' }}
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          renderThumbVertical={({ style, ...props }) => (
            <div {...props} style={{ ...style, backgroundColor: '#FFD700', borderRadius: '4px' }} />
          )}
          renderTrackVertical={({ style, ...props }) => (
            <div {...props} style={{ ...style, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '4px' }} />
          )}
          renderView={({ style, ...props }) => (
            <div {...props} style={{ ...style, padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.8)' }} />
          )}>
        {/* Background video with performance optimizations */}
        <video
          id="bgVideo"
          autoPlay
          muted
          playsInline
          onCanPlay={handleVideoLoad}
          className={`fixed inset-0 w-full h-full object-cover ${videoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
          style={{ zIndex: -1 }} 
        >
          <source src="/Ja.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Navigation */}
        <header className="relative z-20">
          <Suspense fallback={<div className="p-4 text-white">Loading navigation...</div>}>
            <Nav />
          </Suspense>
        </header>
          
        <div className="intro-section">
          {/* Main content */}
          <main className="flex-1 ml-64 p-6" style={{ position: 'relative', zIndex: 10 }}>
            <Suspense fallback={
              <div className="flex justify-center items-center h-64" style={{ zIndex: 15 }}>
                <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<ServiceCard />} />
                <Route path="/booking" element={<BookingForm />} />
                <Route path="/gallery" element={<Gallery />} />
              </Routes>
            </Suspense>
          </main>
          </div>
          
          {/* Service Card for the booking page */ }
          <ServiceCard />
        {/* Footer */}
        <Footer />
      </Scrollbars>
      </Router>
    </ServicesProvider>
  );
}