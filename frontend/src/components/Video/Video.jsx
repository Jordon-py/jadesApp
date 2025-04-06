import React, { useState } from 'react';

export default function Video() {
	  const [videoLoaded, setVideoLoaded] = useState(false);

	  const handleVideoLoad = () => {
	    setVideoLoaded(true);
	  };

    return (
        <div>
           <video
          id="bgVideo"
          autoPlay
          muted
          playsInline
          onCanPlay={handleVideoLoad}
          className={`bgVideo ${videoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
          style={{ zIndex: -1 }} 
        >
          <source src="/JadesBrow.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
    );
}