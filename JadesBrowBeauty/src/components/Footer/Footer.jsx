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
              Email: <a href="mailto:info@jadesbrowbeauty.com" className="footer-link">info@jadesbrowbeauty.com</a>
            </p>
            <p>Serving: Las Vegas, NV & surrounding areas
            {/* Section 3: Copyright */}
          
            <br />© { currentYear } JadesBrowBeauty All rights reserved.</p>
          </div>
        </div> {/* Closing div for footer-container */}
    </footer>
  );
}