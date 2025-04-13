import React from 'react';
import './Footer.css'; // Ensure this is imported

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">  

        
          <div id="contact" className="footer-section">
            <h3 id="contact-title" className="footer-title">Contact</h3>
            <p>
              Email: <a href="mailto:marie_jordon@yahoo.com" className="footer-link">marie_jordon@yahoo.com</a>
            </p>
            <p>Location & Hours<br />
                Jades Brow Beauty<br />
                9635 S Bermuda road, Unit 180<br />
                LAS VEGAS, Nevada 89183<br />
                (702) 550-7148
                
          </p> {/* Closing p for Location & Hours */ }
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
          
            <p><br />© { currentYear } JadesBrowBeauty All rights reserved.</p>
          </div>
        </div> {/* Closing div for footer-container */}
    </footer>
  );
}