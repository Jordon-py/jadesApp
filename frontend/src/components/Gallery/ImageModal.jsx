import React from 'react';
import "./Image.css";


export default function ImageModal({ images }) {
  const [image, setImage] = React.useState(images || []);
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    if (images.length > 0) {
      setImage(images[0]);
      setLoading(false);
    }
  }, [images]);

  const displayImages = (image) => {
    loading ? <div>Loading...</div> : <img src={image?.src} alt={image?.alt || "Gallery"} />;
    setImage(image);

  };

  return (
    <div className="image-modal">
      {displayImages(image)}
      </div>
  );
}
