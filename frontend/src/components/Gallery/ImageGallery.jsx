import React  from 'react';
import { useState } from 'react';
import RotatingImageGallery from './RotatingImageGallery.jsx'; // Adjust path as needed
import './RotatingImageGallery.css'; // Adjust path as needed

// Define Gallery component
export default function Gallery() {
  const [ galleryImages, setGalleryImages ] = useState([]);
  let images = [
    { src: 'before_3.png', alt: 'Placeholder Silver Image 1' },
    { src: 'img_3After.png', alt: 'Placeholder Black Image 2' },
    { src: 'IMG_2Before.png', alt: 'Placeholder White Image 3' },
    { src: 'IMG_2After.png', alt: 'Placeholder Gold Image 4' },
    { src: 'IMG_2.JPG', alt: 'Placeholder Grey Image 5' },
    { src: 'IMG_1AfterBre850.png', alt: 'Placeholder Dark Image 6' }
  ];
  setGalleryImages(images);
  return (
    <div className="gallery-container">
      <h1>Eyebrow Gallery</h1>
      <RotatingImageGallery
        images={galleryImages}
        interval={4000} // Rotate every 4 seconds
        showControls={false}
        pauseOnHover={false}
        />
      </div>
    );
  }