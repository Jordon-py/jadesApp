import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import './RotatingImageGallery.css';

/**
 * RotatingImageGallery Component
 * Displays two images side-by-side and automatically rotates through a list.
 *
 * @param {object[]} images - Array of image objects, each with 'src' and 'alt'.
 * @param {number} interval - Time in milliseconds between rotations.
 * @param {boolean} showControls - Whether to display manual navigation controls.
 * @param {boolean} pauseOnHover - Whether to pause rotation on mouse hover.
 */
function RotatingImageGallery({
  images = [],
  interval = 3000, // Default interval 5 seconds
  showControls = true,
  pauseOnHover = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null); // Ref to store interval ID

  // Memoized function to go to the next pair of images
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
  }, [images.length]);

  // Memoized function to go to the previous pair of images
  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + images.length) % images.length);
  }, [images.length]);

  // Effect to handle the automatic rotation interval
  useEffect(() => {
    // Don't start interval if paused, not enough images, or no images
    if (isPaused || images.length < 2) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // Clear existing interval before starting a new one
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start the interval
    intervalRef.current = setInterval(goToNext, interval);

    // Cleanup function to clear interval on unmount or dependency change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, images.length, interval, isPaused, goToNext]); // Re-run effect if these change

  // --- Event Handlers ---

  // Manual next navigation
  const handleNextClick = () => {
    goToNext();
    // Optional: Reset interval timer immediately after manual navigation
    // if (!isPaused) { /* Restart logic could go here */ }
  };

  // Manual previous navigation
  const handlePrevClick = () => {
    goToPrev();
    // Optional: Reset interval timer
    if (!isPaused) { setIsPaused(true); /* Restart logic could go here */ }
  };

  // Pause rotation on hover
  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  // Resume rotation when mouse leaves
  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  // --- Render Logic ---

  // Handle cases with insufficient images
  if (!images || images.length === 0) {
    return <div className="rotating-gallery-container empty">No images provided.</div>;
  }
  if (images.length === 1) {
    // Display single image if only one is provided
     return (
      <div className="rotating-gallery-container single"
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
      >
        <div className="image-wrapper">
           <img
              key={images[0].src} // Use src as key
              src={images[0].src}
              alt={images[0].alt || `Gallery image 1`}
              className="gallery-image single-image"
           />
        </div>
       </div>
     );
  }

  // Determine indices for the two images to display
  const firstImageIndex = currentIndex;
  const secondImageIndex = (currentIndex + 1) % images.length;

  // Get image objects based on indices
  const firstImage = images[firstImageIndex];
  const secondImage = images[secondImageIndex];

  return (
    <div
      className="rotating-gallery-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="image-wrapper">
        {/* Use index as key for potential transition effects */}
        {firstImage && (
           <img
              key={firstImageIndex}
              src={firstImage.src}
              alt={firstImage.alt || `Gallery image ${firstImageIndex + 1}`}
              className="gallery-image"
           />
        )}
         {secondImage && (
           <img
              key={secondImageIndex}
              src={secondImage.src}
              alt={secondImage.alt || `Gallery image ${secondImageIndex + 1}`}
              className="gallery-image"
            />
         )}
      </div>

      {showControls && images.length > 2 && ( // Only show controls if more than 2 images
        <div className="controls">
          <button
            className="control-button prev"
            onClick={handlePrevClick}
            aria-label="Previous Images"
          >
            &#10094; {/* Left arrow */}
          </button>
          <button
            className="control-button next"
            onClick={handleNextClick}
            aria-label="Next Images"
          >
            &#10095; {/* Right arrow */}
          </button>
        </div>
      )}
       {isPaused && <div className="pause-indicator">Paused</div>}
    </div>
  );
}

// Define prop types for component validation and documentation
RotatingImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string, // Alt text is recommended but optional here
    })
  ).isRequired,
  interval: PropTypes.number,
  showControls: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
};

export default RotatingImageGallery;