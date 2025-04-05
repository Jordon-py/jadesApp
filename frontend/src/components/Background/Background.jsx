// Background.jsx
import React from 'react';
import './Background.css';

const Background = () => {
  // This component now acts as a container/placeholder for the video background
  // The actual video is in App.jsx
  return (
    <div className="background">
      {/* Empty container - the video from App.jsx will be the background */}
    </div>
  );
};

export default Background;
