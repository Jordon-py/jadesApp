import React, { useState, useEffect } from 'react';
import RotatingImageGallery from './RotatingImageGallery.jsx';
import './RotatingImageGallery.css';

// Define Gallery component
export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);
  
  useEffect(() => {
    // Set images only once when component mounts
    const images = [
      { src: 'before_3.png', alt: 'Placeholder Silver Image 1' },
      { src: 'img_3After.png', alt: 'Placeholder Black Image 2' },
      { src: 'IMG_2Before.png', alt: 'Placeholder White Image 3' },
      { src: 'IMG_2After.png', alt: 'Placeholder Gold Image 4' },
      { src: 'IMG_2.JPG', alt: 'Placeholder Grey Image 5' },
      { src: 'IMG_1AfterBre850.png', alt: 'Placeholder Dark Image 6' }
    ];
    setGalleryImages(images);
  }, []); // Empty dependency array ensures this runs once

  return (
    <div className="gallery-container">
      <h1>Eyebrow Gallery</h1>
      <RotatingImageGallery
        images={galleryImages}
        interval={4000} // Rotate every 4 seconds
        showControls={true}
        pauseOnHover={true}
      />
    </div>
  );
}