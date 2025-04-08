import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Video.css';

export default function Video({ src = '/JadesBrow.mp4', type = 'video/mp4' }) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="video-container">
      <video
        autoPlay
        muted
        playsInline
        loop
        onCanPlay={handleVideoLoad}
        className={`video-element ${
          videoLoaded ? 'video-loaded' : 'video-loading'
        }`}
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

Video.propTypes = {
  src: PropTypes.string,
  type: PropTypes.string,
};