import React from 'react';
import RotatingImageGallery from './RotatingImageGallery.jsx';

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
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl md:text-4xl text-center font-semibold text-blue-silver mb-4">JadesBrowBeauty Gallery</h1>
      
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
        <p className="mb-2">Want to see your own transformation?</p>
        <a href="/booking" className="inline-block text-blue-silver-light hover:text-white underline transition-colors duration-300">
          Book an appointment today
        </a>
      </div>
    </div>
  );
}