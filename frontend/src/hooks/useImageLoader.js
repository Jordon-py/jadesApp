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

src = [
    "IMG_1043.JPG",
    "IMG_1044.JPG",
    "IMG_1189.jpg",
    "IMG_1193.JPG",
    "IMG_0929.JPG",
    "IMG_0969.jpg",
    "IMG_1039 - Copy.JPG",
    "IMG_1039.JPG",
    "IMG_1042.JPG"
];
  
function useImageLoader(src) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Skip if src is not provided
    if (!src) {
        setIsLoading(false);
        setError('No image source provided.');
        return;
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

export default useImageLoader;