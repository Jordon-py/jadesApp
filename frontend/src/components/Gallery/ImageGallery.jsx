import React from 'react';
import RotatingImageGallery from './RotatingImageGallery.jsx';
import './RotatingImageGallery.css';

/**
 * Gallery Component
 * Displays a rotating image gallery with images from public folder and assets directory.
 * Features:
 * - Automatic rotation of images
 * - Manual controls for navigation
 * - Image filtering (before/after/all)
 * - Responsive design with bluish silver theme
 */
export default function Gallery() {
  return (
    <div className="gallery-container">
      <h1 className="galleryH1">JadesBrowBeauty Gallery</h1>
      
      <p className="text-center mb-8 text-blue-silver-light max-w-3xl mx-auto">
        Browse our portfolio of eyebrow and waxing transformations. Hover to pause, 
        use the controls to navigate, or filter by image type.
      </p>
      
      <RotatingImageGallery 
        interval={5000}
        showControls={true}
        pauseOnHover={true}
        showFilters={true}
      />
      
      <div className="text-center mt-8 text-blue-silver-light">
        <p><br />Want to see your own transformation? 
          <a href="/booking" className="ml-2 text-blue-silver-light hover:text-white underline">
            <br />Book an appointment today
          </a>
        </p>
      </div>
    </div>
  );
}