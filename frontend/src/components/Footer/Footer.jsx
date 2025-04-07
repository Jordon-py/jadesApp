import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent text-blue-silver-light flex flex-col justify-center items-center z-10 py-4">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-3 text-blue-silver-light">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.instagram.com/jadesbrowbeauty/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-silver hover:text-blue-silver-light transition-colors duration-300"
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
                className="text-blue-silver hover:text-blue-silver-light transition-colors duration-300"
                aria-label="TikTok"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-3 text-blue-silver-light">Contact</h3>
          <p className="text-blue-silver mb-2">
            Email: <a href="mailto:info@jadesbrowbeauty.com" className="text-blue-silver hover:text-blue-silver-light transition-colors duration-300">info@jadesbrowbeauty.com</a>
          </p>
          <p className="text-blue-silver">Serving: Las Vegas, NV & surrounding areas</p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-blue-silver">© { currentYear } Jades Brow Beauty.</p>
          <p className="text-blue-silver mt-1">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
