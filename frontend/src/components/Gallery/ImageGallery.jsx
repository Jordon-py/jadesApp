import React from 'react';
import PropTypes from 'prop-types';
import ImageTile from '../ImageTile'; // Assumes barrel export
import ErrorBoundary from '../ErrorBoundary'; // Assumes barrel export
import styles from './ImageGallery.module.css';

/**
 * ImageGallery Component
 *
 * Renders a responsive grid of images using the ImageTile component.
 * Wraps the grid in an ErrorBoundary to catch rendering errors.
 *
 * @param {Array<object>} images - Array of image objects, each requiring `id`, `src`, and `alt`.
 * @param {function} onImageClick - Optional callback when an individual image tile is clicked. Passes the image object.
 */
const ImageGallery = ({ images, onImageClick }) => {
  // Basic validation for the images prop
  if (!Array.isArray(images) || images.length === 0) {
    return <p className={styles.emptyMessage}>No images to display.</p>;
  }

  return (
    // Wrap the entire grid rendering logic in an Error Boundary
    <ErrorBoundary fallback={<p className={styles.errorMessage}>Could not display the gallery.</p>}>
      <div className={styles.galleryGrid} role="list"> {/* Use role list for semantics */}
        {images.map((image) => (
          // Each tile should have its own error boundary if you want finer-grained error handling,
          // but wrapping the whole list is simpler for this example.
          // Using image.id as the key is crucial for React's reconciliation.
          <div role="listitem" key={image.id}> {/* List item role */}
            <ImageTile
              src={image.src}
              alt={image.alt}
              onClick={onImageClick ? () => onImageClick(image) : undefined} // Pass image data back on click
            />
          </div>
        ))}
      </div>
    </ErrorBoundary>
  );
};

ImageGallery.propTypes = {
  /**
   * Array of image objects. Each object should have:
   * - `id`: A unique identifier (string or number) for the key prop.
   * - `src`: The URL of the image source.
   * - `alt`: Descriptive alternative text for accessibility.
   */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** Optional callback function triggered when an image tile is clicked. Receives the image object as an argument. */
  onImageClick: PropTypes.func,
};

ImageGallery.defaultProps = {
    images: [], // Default to an empty array
};


export default ImageGallery;