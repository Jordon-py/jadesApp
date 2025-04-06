// path to app.jsx from that file
import React from 'react';
import './Footer.css'; // Import your CSS file here

export default function Footer() {
  return (
    <footer>
        <div className='footer'>
          <h3>Follow us on:</h3>
          <ul>
            <li>
              <a
                href='https://www.instagram.com/jadesbrowbeauty/'
                target='_blank'
                rel='noopener noreferrer'
                className='footer'
                aria-label='Instagram'
                pointer={true}
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href='https://www.tiktok.com/@jadesbrowbeauty'
                target='_blank'
                rel='noopener noreferrer'
                className='footer'
                aria-label='TikTok'
              >
                TikTok
              </a>
            </li>
          </ul>
          <div className='footer'>
            <p>Contact us at info@jadesbrowbeauty.com</p>
            <p>
             
            </p>
            <p>© {new Date().getFullYear()} Jades Brow Beauty. All rights reserved.</p>
          </div>
        </div>
    </footer>
  );
}
