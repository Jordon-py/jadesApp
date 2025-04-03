import React from 'react';
import PropTypes from 'prop-types';
import useImageLoader from '../../hooks/useImageLoader'; // Adjust path as needed
import styles from './ImageTile.module.css';

/**
 * ImageTile Component
 *
 * Displays a single image within the gallery. Handles its own loading
 * and error states using the useImageLoader hook.
 *
 * @param {string} src - The source URL of the image.
 * @param {string} alt - The alternative text for the image (accessibility).
 * @param {function} onClick - Optional click handler for the tile.
 */
const ImageTile = ({ src, alt, onClick }) => {
  const { isLoading, error } = useImageLoader(src);

  // Determine the appropriate CSS class based on state
  const imageClasses = `${styles.image} ${isLoading || error ? '' : styles.loaded}`;

  // Determine tile container classes for interaction styling
  const containerClasses = `${styles.tileContainer} ${onClick ? styles.clickable : ''}`;

  return (
    <div
        className={containerClasses}
        onClick={onClick}
        onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); } : undefined}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        aria-label={onClick ? alt || 'View image detail' : undefined}
    >
      {isLoading && (
        <div className={styles.loadingState} aria-label="Loading image...">
          <div className={styles.spinner}></div> {/* Simple CSS spinner */}
        </div>
      )}
      {error && !isLoading && (
        <div className={styles.errorState} role="alert">
          <span className={styles.errorIcon}>⚠️</span> {/* Error icon */}
          <span className={styles.errorText}>Error</span>
        </div>
      )}
      {!isLoading && !error && (
        <img
          className={imageClasses}
          src={src}
          alt={alt || ''} // Provide default empty string for alt if not passed
          loading="lazy" // Use native lazy loading
        />
      )}
    </div>
  );
};

ImageTile.propTypes = {
  /** The source URL for the image. */
  src: PropTypes.string.isRequired,
  /** Alt text describing the image (important for accessibility). */
  alt: PropTypes.string.isRequired,
  /** Optional callback function when the tile is clicked. */
  onClick: PropTypes.func,
};

ImageTile.defaultProps = {
  alt: 'Gallery image', // A generic default, but specific alt text is highly recommended
};

export default ImageTile;