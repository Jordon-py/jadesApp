import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Video({ src = '/JadesBrow.mp4', type = 'video/mp4' }) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        autoPlay
        muted
        playsInline
        loop
        onCanPlay={handleVideoLoad}
        className={`w-full h-full object-cover ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-700 -z-10 fixed top-0 left-0`}
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