import React from 'react';
import './Footer.css'; // Ensure this is imported

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Added id for potential navigation
    <footer id="follow-us" className="footer">
      <div className="footer-container">
        {/* Section 1: Follow Us */}
        <div id="sec" className="footer-section">
          <h3 id="us" className="footer-title">Follow Us</h3>
            <ul className="footer-links">
              <li>
                <a
                  href="https://www.instagram.com/jadesbrowbeauty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@jadesbrowbeauty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  aria-label="TikTok"
                >
                  TikTok
                </a>
              </li>
            </ul>
        

        
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
      </div>
    </footer>
  );
}