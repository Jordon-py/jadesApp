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


export default function App() {
  const [loading, setLoading] = useState(true);
  const [galleryImages, setGalleryImages] = useState([
    { src: 'before_3.png', alt: 'Placeholder Silver Image 1' },
    { src: 'img_3After.png', alt: 'Placeholder Black Image 2' },
    { src: 'IMG_2Before.png', alt: 'Placeholder White Image 3' },
    { src: 'IMG_2After.png', alt: 'Placeholder Gold Image 4' },
    { src: 'IMG_2.JPG', alt: 'Placeholder Grey Image 5' },
    { src: 'IMG_1AfterBre850.png', alt: 'Placeholder Dark Image 6' }
  ]);

  useEffect(() => {
    // Simulate loading delay and remove duplicate appending:
    setLoading(true);
    console.log(loading);
    const loadImages = async () => {
      const images = await Promise.all(
        galleryImages.map((image) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = image.src;
            img.onload = () => resolve(image);
          });
        })
      );
      setGalleryImages(images);
    };
    loadImages();
    setLoading(false);
  }, []);

  // Define Gallery component
  const Gallery = () => (
    <div className="gallery-container">
      <h1>Eyebrow Gallery</h1>
      <RotatingImageGallery
        images={galleryImages}
        interval={6000} // Rotate every 6 seconds
        showControls={true}
        pauseOnHover={true}
      />
    </div>
  );

  return (
    <div className="app">
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
    </div>
      ) : (
        <>
           

            <div className="app-container">
              <div className="background">
                <div className="animated-gradient" />
              </div>
             
              <div className="sidebar">
                <div className="sidebar-content">
                  <h2>About us</h2>
                </div>
              </div>
                
              <div className="gallery">{/* Rotating Photos */}
                  <Gallery />
                </div>
              
                  <Router>
                      <nav>
                        <ul>
                          <li>
                            <Link to="/" className="button" >Home</Link>
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
                    
                      <Routes>
                        <Route path="/" element={<Home />} className="button" />
                        <Route path="/about" element={<About />} className="button" />
                        <Route path="/services" element={<Services />} className="button" />
                        <Route path="/booking" element={<BookingForm />} className="button" />
                      </Routes>
                  </Router>
                  <h1>Welcome to JadesBrowBeauty</h1>
                
                <About />
                    
                </div>
                <div className="content">
                  <Services />
                  <BookingForm />
                </div>
              </>
          ) }
        </div>
  );
}