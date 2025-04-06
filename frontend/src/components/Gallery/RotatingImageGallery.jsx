import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import useImageLoader, { getAllGalleryImages, getGroupedGalleryImages } from '../../hooks/useImageLoader';
import './RotatingImageGallery.css';

/**
 * RotatingImageGallery Component
 * Displays images side-by-side and automatically rotates through all images in the gallery.
 *
 * @param {object[]} images - Optional array of image objects, each with 'src' and 'alt'. If not provided, all images from public folder and assets will be used.
 * @param {number} interval - Time in milliseconds between rotations.
 * @param {boolean} showControls - Whether to display manual navigation controls.
 * @param {boolean} pauseOnHover - Whether to pause rotation on mouse hover.
 * @param {boolean} showFilters - Whether to display filtering options for before/after images.
 */
function RotatingImageGallery({
  images,
  interval = 3000, 
  showControls = true,
  pauseOnHover = true,
  showFilters = true,
}) {
  // State for gallery
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [displayImages, setDisplayImages] = useState([]);
  const [filter, setFilter] = useState('all');
  const intervalRef = useRef(null); // Ref to store interval ID

  // Load all images if none provided
  useEffect(() => {
    if (images && images.length > 0) {
      setDisplayImages(images);
    } else {
      // Use all images from public folder and assets
      setDisplayImages(getAllGalleryImages());
    }
  }, [images]);

  // Handle filtering
  useEffect(() => {
    if (filter === 'all') {
      if (images && images.length > 0) {
        setDisplayImages(images);
      } else {
        setDisplayImages(getAllGalleryImages());
      }
    } else {
      const { beforeImages, afterImages, otherImages } = getGroupedGalleryImages();
      
      if (filter === 'before') {
        setDisplayImages(beforeImages);
      } else if (filter === 'after') {
        setDisplayImages(afterImages);
      } else if (filter === 'other') {
        setDisplayImages(otherImages);
      }
      
      // Reset current index when filter changes
      setCurrentIndex(0);
    }
  }, [filter, images]);

  // Memoized function to go to the next pair of images
  const goToNext = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 2) % displayImages.length);
  }, [displayImages.length]);

  // Memoized function to go to the previous pair of images
  const goToPrev = useCallback(() => {
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex - 2;
      return newIndex < 0 ? displayImages.length + newIndex : newIndex;
    });
  }, [displayImages.length]);

  // Effect to handle the automatic rotation interval
  useEffect(() => {
    // Don't start interval if paused, not enough images, or no images
    if (isPaused || displayImages.length < 2) {
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
  }, [currentIndex, displayImages.length, interval, isPaused, goToNext]); 

  // Event Handlers
  const handleNextClick = () => {
    goToNext();
  };

  const handlePrevClick = () => {
    goToPrev();
  };

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleDotClick = (index) => {
    // Ensure the index is even (start of a pair)
    setCurrentIndex(Math.floor(index / 2) * 2);
  };

  // Render Logic
  if (!displayImages || displayImages.length === 0) {
    return (
      <div className="rotating-gallery-container empty">
        <p>No images available to display.</p>
      </div>
    );
  }

  // Display filters if requested and we have enough images
  const renderFilters = () => {
    if (!showFilters || displayImages.length < 3) return null;
    
    return (
      <div className="image-filter">
        <button 
          className={`filter-button ${filter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterChange('all')}
          aria-label="Show all images"
        >
          All
        </button>
        <button 
          className={`filter-button ${filter === 'before' ? 'active' : ''}`}
          onClick={() => handleFilterChange('before')}
          aria-label="Show before images"
        >
          Before
        </button>
        <button 
          className={`filter-button ${filter === 'after' ? 'active' : ''}`}
          onClick={() => handleFilterChange('after')}
          aria-label="Show after images"
        >
          After
        </button>
        <button 
          className={`filter-button ${filter === 'other' ? 'active' : ''}`}
          onClick={() => handleFilterChange('other')}
          aria-label="Show other images"
        >
          Other
        </button>
      </div>
    );
  };

  // For single image case
  if (displayImages.length === 1) {
    return (
      <div className="rotating-gallery-container">
        {renderFilters()}
        <div className="image-wrapper">
          <img
            src={displayImages[0].src}
            alt={displayImages[0].alt || 'Gallery image'}
            className="gallery-image single-image"
          />
        </div>
      </div>
    );
  }

  // Determine indices for the two images to display
  const firstImageIndex = currentIndex;
  const secondImageIndex = (currentIndex + 1) % displayImages.length;

  // Get image objects
  const firstImage = displayImages[firstImageIndex];
  const secondImage = displayImages[secondImageIndex];

  // Calculate how many pagination dots we need (one per pair)
  const paginationDots = Math.ceil(displayImages.length / 2);

  return (
    <div
      className="rotating-gallery-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {renderFilters()}
      
      <div className="image-wrapper">
        <img
          src={firstImage.src}
          alt={firstImage.alt || `Gallery image ${firstImageIndex + 1}`}
          className="gallery-image"
        />
        {secondImage && (
          <img
            src={secondImage.src}
            alt={secondImage.alt || `Gallery image ${secondImageIndex + 1}`}
            className="gallery-image"
          />
        )}
      </div>

      {showControls && displayImages.length > 2 && (
        <div className="gallery-controls">
          <button
            className="control-button prev"
            onClick={handlePrevClick}
            aria-label="Previous Images"
          >
            &#10094;
          </button>
          <button
            className="control-button next"
            onClick={handleNextClick}
            aria-label="Next Images"
          >
            &#10095;
          </button>
        </div>
      )}
      
      {/* Pagination dots */}
      {displayImages.length > 2 && (
        <div className="pagination-indicators">
          {[...Array(paginationDots)].map((_, index) => (
            <span
              key={`dot-${index}`}
              className={`pagination-dot ${Math.floor(currentIndex / 2) === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index * 2)}
              role="button"
              tabIndex={0}
              aria-label={`Go to image pair ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Status indicator */}
      {isPaused && (
        <div className="gallery-status paused">
          <span className="status-icon">⏸</span>
          Paused
        </div>
      )}
    </div>
  );
}

// Define prop types for component validation and documentation
RotatingImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ),
  interval: PropTypes.number,
  showControls: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
  showFilters: PropTypes.bool,
};

export default RotatingImageGallery;