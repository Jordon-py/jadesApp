import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "@/components/Home/Home.jsx";
import About from "@/components/About/About.jsx";
import Services from "@/components/Services/Services.jsx";
import BookingForm from "@/components/Booking/BookingForm.jsx";
import "./App.css";
import  "./index.css";
import RotatingImageGallery from './components/Gallery/RotatingImageGallery.jsx'; // Adjust path as needed
import "./components/Gallery/RotatingImageGallery.css"; // Adjust path as needed
import "./components/Nav/Nav.css"; // Adjust path as needed
import Gallery from "./components/Gallery/ImageGallery.jsx"; // Adjust path as needed

export default function App() {
  const [loading, setLoading] = useState(true);
  const [galleryImages, setGalleryImages] = useState([]);
  
  let images = [
    { src: 'before_3.png', alt: 'Placeholder Silver Image 1' },
    { src: 'img_3After.png', alt: 'Placeholder Black Image 2' },
    { src: 'IMG_2Before.png', alt: 'Placeholder White Image 3' },
    { src: 'IMG_2After.png', alt: 'Placeholder Gold Image 4' },
    { src: 'IMG_2.JPG', alt: 'Placeholder Grey Image 5' },
    { src: 'IMG_1AfterBre850.png', alt: 'Placeholder Dark Image 6' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 3-second loading time
    // Set the gallery images after loading
    setGalleryImages(images);
    // Cleanup function to clear the timer
    // if the component unmounts before the timer completes
    return () => clearTimeout(timer);
  }, [setLoading]);
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
        <nav className="nav">
          <div className="logo-container">
            <Link to="/">
              <img src="logo.png" alt="Logo" className="logo" />
            </Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/" className="button">Home</Link>
            </li>
            <li>
              <Link to="/about" className="button">About</Link>
            </li>
            <li>
              <Link to="/services" className="button">Services</Link>
            </li>
            <li>
              <Link to="/booking" className="button">Booking</Link>
            </li>
          </ul>
        </nav>

        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<BookingForm />} />
        </Routes>
        <div className="gallery-container">
          <h1>Eyebrow Gallery</h1>
          <RotatingImageGallery
            images={galleryImages}
            interval={4000} // Rotate every 4 seconds
            showControls={false}
            pauseOnHover={false}
          />
        </div>
      </div>
    </Router>
  );
}