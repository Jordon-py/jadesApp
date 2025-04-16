// file path to app.jsx: ../../App.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Footer.css'; // Ensure this is imported

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* Replaced id="contact" with className="contact-section" */}
        <div className='footer-section contact-section'>
          {/* Replaced id="contact-title" with className="contact-title" */}
          <h3 className='footer-title contact-title'>Contact</h3>
          <p>
            Email: <a href='mailto:marie_jordon@yahoo.com' className='footer-link'>marie_jordon@yahoo.com</a>
          </p>
          <p>Location & Hours<br />
              Jades Brow Beauty<br />
              9635 S Bermuda road, Unit 180<br />
              LAS VEGAS, Nevada 89183<br />
              (702) 550-7148
          </p> {/* Closing p for Location & Hours */}
          <p> Monday
              11:00 am - 5:00 pm<br />
              Tuesday
              11:00 am - 5:00 pm<br/>
              Wednesday
              11:00 am - 4:00 pm<br />
              Thursday
              10:00 am - 5:00 pm<br />
              Friday
              11:00 am - 6:00 pm<br />
              Saturday
              10:00 am - 3:00 pm<br />
              Sunday
              11:00 am - 4:00 pm<br />
          </p> {/* Closing p for hours */}
          {/* Section 3: Copyright */}
          {/* Added className for specific styling if needed */}
          <p className='footer-copyright'><br />© { currentYear } JadesBrowBeauty All rights reserved.</p>
        </div>
      </div> {/* Closing div for footer-container */}
    </footer>
  );
}

// Define PropTypes (currently none needed)
Footer.propTypes = {
  // No props currently accepted
};