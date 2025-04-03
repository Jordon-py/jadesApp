import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p> {new Date().toLocaleTimeString()}</p>
      <p>Contact us at: support@example.com</p>
      <p>Follow us on social media!: @JadesBrowBeauty</p>
      <p>© {new Date().getFullYear()} JadesBrowBeauty All rights reserved.</p>
    </footer>
  );
}
