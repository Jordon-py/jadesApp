import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "@/components/Home/Home.jsx";
import About from "@/components/About/About.jsx";
import Services from "@/components/Services/Services.jsx";
import BookingForm from "@/components/Booking/BookingForm.jsx";
import "./App.css";
import "./index.css";
import RotatingImageGallery from './components/Gallery/RotatingImageGallery.jsx'; // Adjust path as needed
import "./components/Gallery/RotatingImageGallery.css"; // Adjust path as needed
import "./components/Nav/Nav.css"; // Adjust path as needed
import Nav from "./components/Nav/Nav.jsx"; // Adjust path as needed
import Gallery from "./components/Gallery/ImageGallery.jsx"; // Adjust path as needed

export default function App() {
  const [loading, setLoading] = useState(true);
  const [galleryImages, setGalleryImages] = useState([]);
  
  let images = [
    { src: 'before_3.png', alt: 'Placeholder Silver Image 1' },
    { src: 'img_3After.png', alt: 'Placeholder Black Image 2' },
    { src: 'IMG_2Before.png', alt: 'Placeholder White Image 3' },
    { src: 'IMG_2After.JPG', alt: 'Placeholder Gold Image 4' },
    { src: '/IMG_2before.JPG', alt: 'Placeholder Grey Image 5' },
    { src: 'IMG_1AfterBre850.png', alt: 'Placeholder Dark Image 6' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time
    
    // Set the gallery images after loading
    setGalleryImages(images);
    
    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <nav className="main-navigation">
          <Nav />
        </nav>
        
        <div className="content-container">
          <aside className="sidebar">
            <h2>Quick Links</h2>
            <ul>
              <li>Book an Appointment</li>
              <li>Services & Prices</li>
              <li>Before & After Gallery</li>
              <li>Contact Us</li>
            </ul>
          </aside>
          
          <main className="main-content">
            {/* Define routes for different pages */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/booking" element={<BookingForm />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
            
            <div className="gallery-container">
              <h1>Eyebrow Gallery</h1>
              <RotatingImageGallery
                images={galleryImages}
                interval={4000} // Rotate every 4 seconds
                showControls={true}
                pauseOnHover={true}
              />
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}