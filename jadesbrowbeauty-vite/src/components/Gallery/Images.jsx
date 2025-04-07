import React, { useState, useEffect } from "react";


export default function Images() {
  const [ image, setImage ] = useState([]);
  const images = [
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
    useEffect(() => {
      setImage(images);
    }, []);
    
    return (
      <div className="gallery-container">
        {image.map((img, index) => (
          <img key={index} src={`/images/${img}`} alt={`Gallery image ${index + 1}`} />
        ))}
      </div>
    );
  }