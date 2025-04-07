import React from 'react';
import WaxingServices from '../Services/WaxingServices';

export default function About() { 
  return (
    <div className="bg-bg-dark backdrop-blur-md rounded-lg p-4 border border-gray-700 shadow-medium w-full">
      <h3 className="flex items-center text-text-light text-xl font-semibold mb-4">About Us</h3>
      <p className="text-text-light text-base leading-relaxed">
        At JadesBrowBeauty, we believe every appointment should feel like catching up with a friend (who happens to be amazing at brows).<br /><br />

        <strong className="font-semibold">We offer precision Eyebrow waxing, Bikini waxing, Microblading, and Full-body waxing.</strong><br />
      </p>
    </div>
  );
}
