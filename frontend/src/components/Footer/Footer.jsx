// path to app.jsx from that file
import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-black/80 text-white p-6 mt-8 relative z-10'>
      <div className='max-w-6xl mx-auto'>
        <p className='mb-2'>&copy; {new Date().getFullYear()} Jades Brow Beauty. All rights reserved.</p>
        <p className='mb-2'>Follow us on:</p>
        <ul className='flex space-x-4 mb-4'>
          <li>
            <a
              href='https://www.instagram.com/jadesbrowbeauty/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-silver hover:text-gold transition-colors'
              aria-label='Instagram'
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href='https://www.tiktok.com/@jadesbrowbeauty'
              target='_blank'
              rel='noopener noreferrer'
              className='text-silver hover:text-gold transition-colors'
              aria-label='TikTok'
            >
              TikTok
            </a>
          </li>
        </ul>
        <div className='text-sm text-silver'>
          <p>Contact us at info@jadesbrowbeauty.com</p>
          <p>
            <a href='/privacy' className='hover:text-gold transition-colors'>
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href='/terms' className='hover:text-gold transition-colors ml-2'>
              Terms of Service
            </a>
          </p>
          <p>© {new Date().getFullYear()} Jades Brow Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
