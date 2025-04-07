import { useState, useEffect } from 'react';

/**
 * Custom Hook: useImageLoader
 *
 * Manages the loading and error states for an image source.
 * Provides flags to conditionally render loading indicators or error messages.
 *
 * @param {string} src - The source URL of the image to load.
 * @returns {{isLoading: boolean, error: string | null}} - An object containing the loading status and error message (if any).
 */
function useImageLoader(src) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Skip if src is not provided
    if (!src) {
        setIsLoading(false);
        setError('No image source provided.');
        src = "IMG_0929.JPG";
        return src;
    }

    // Reset state when src changes
    setIsLoading(true);
    setError(null);

    // Create an Image object to preload
    const img = new Image();
    img.src = src;

    const handleLoad = () => {
      setIsLoading(false);
    };

    const handleError = () => {
      setIsLoading(false);
      setError(`Failed to load image: ${src}`);
      console.error(`Failed to load image: ${src}`);
    };

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);

    // Cleanup function: remove event listeners
    // This is important to prevent memory leaks if the component unmounts
    // before the image finishes loading/erroring.
    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src]); // Re-run effect if the image source changes

  return { isLoading, error };
}

/**
 * Array of available images in public folder and assets
 * These paths are relative to the public directory
 */
export const galleryImages = [
  // Public folder images
  'before_3.png',
  'img_3After.png',
  'IMG_2Before.png',
  'IMG_2After.png',
  'IMG_2.JPG',
  'IMG_1AfterBre850.png',
  'img_3After850.png',
  'IMG_0929.JPG',
  'IMG_1039 - Copy.JPG',
  'DALL·E.webp',
  'beige.webp',
  // Assets folder images - these need to be prefixed with /assets/images/
  'assets/images/ChatGPT Image Mar 30, 2025, 07_45_15 PM.png',
  'assets/images/eyebrow.png',
  'assets/images/IMG_1039.JPG',
  'assets/images/IMG_1042.JPG',
  'assets/images/IMG_1043.JPG',
  'assets/images/IMG_1044.JPG',
  'assets/images/IMG_1189.jpg',
  'assets/images/IMG_1193.JPG',
];

/**
 * Utility for grouping images by type (before/after)
 * @returns {{before: Array, after: Array, other: Array}} Grouped image objects
 */
export function getGroupedGalleryImages() {
  const beforeImages = [];
  const afterImages = [];
  const otherImages = [];

  galleryImages.forEach(path => {
    // Create image object with src and alt properties
    const img = {
      src: path,
      alt: path.split('/').pop().split('.')[0].replace(/_/g, ' ')
    };

    // Group by before/after naming
    const lowerPath = path.toLowerCase();
    if (lowerPath.includes('before')) {
      beforeImages.push(img);
    } else if (lowerPath.includes('after')) {
      afterImages.push(img);
    } else {
      otherImages.push(img);
    }
  });

  return { beforeImages, afterImages, otherImages };
}

/**
 * Get all gallery images as properly formatted objects
 * @returns {Array} Array of image objects with src and alt properties
 */
export function getAllGalleryImages() {
  return galleryImages.map(path => ({
    src: path,
    alt: path.split('/').pop().split('.')[0].replace(/_/g, ' ')
  }));
}

export default useImageLoader;