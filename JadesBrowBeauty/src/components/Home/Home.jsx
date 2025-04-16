// file path to app.jsx: ../../App.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Home.css'; // Ensure this CSS contains the .background-video styles

export default function Home() {
  return (
    <>
      {/* Wrapper for header and video */}
      <section id='home' className='home-container'>
        <div className='home-content-wrapper'> {/* New flex row container */}
          {/* Header section (using styles from Home.css) */}
          <header className='home-header'>
            {/* Example content - replace or structure as needed */}
            
            <div id='text' className='home-intro-text'>
              <h2>Welcome to Jade's Brow Beauty</h2>
              <p>Your destination for expert waxing and beauty treatments in Las Vegas.</p>
            </div>
          </header>

          {/* Video section */}
          <div className='home-video-section'>
            <video autoPlay loop muted playsInline className='background-video'>
              <source src='/Ja.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div> {/* End home-content-wrapper */}
      </section>
      {/* Other sections if any */}
    </>
  );
}

// Define PropTypes (currently none needed)
Home.propTypes = {
  // No props currently accepted
};
