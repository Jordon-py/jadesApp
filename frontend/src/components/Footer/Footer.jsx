import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section footer__branding">
          <h3 className="footer__title">Follow Us</h3>
          <ul className="footer__socials">
            <li>
              <a
                href="https://www.instagram.com/jadesbrowbeauty/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
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
                className="footer__link"
                aria-label="TikTok"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__section footer__contact">
          <h3 className="footer__title">Contact</h3>
          <p className="footer__text">Email: <a href="mailto:info@jadesbrowbeauty.com" className="footer__link">info@jadesbrowbeauty.com</a></p>
          <p className="footer__text">Serving: Las Vegas, NV & surrounding areas</p>
        </div>

        <div className="footer__section footer__copyright">
          <p className="footer__text">© {currentYear} Jades Brow Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
