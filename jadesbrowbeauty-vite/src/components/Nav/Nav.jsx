import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="sticky top-0 left-0 w-full z-10 flex justify-center bg-bg-dark backdrop-blur-md">
      <ul className="flex flex-wrap md:flex-nowrap justify-evenly w-full p-0 m-0">
        <li className="m-0 p-0">
          <Link to="/" className="block text-blue-silver px-6 py-3 text-center font-medium border border-transparent transition-all duration-500 hover:text-white hover:border-blue-silver hover:shadow-medium hover:-translate-y-1">Home</Link>
        </li>
        <li className="m-0 p-0">
          <Link to="/about" className="block text-blue-silver px-6 py-3 text-center font-medium border border-transparent transition-all duration-500 hover:text-white hover:border-blue-silver hover:shadow-medium hover:-translate-y-1">About</Link>
        </li>
        <li className="m-0 p-0">
          <Link to="/services" className="block text-blue-silver px-6 py-3 text-center font-medium border border-transparent transition-all duration-500 hover:text-white hover:border-blue-silver hover:shadow-medium hover:-translate-y-1">Services</Link>
        </li>
        <li className="m-0 p-0">
          <Link to="/booking" className="block text-blue-silver px-6 py-3 text-center font-medium border border-transparent transition-all duration-500 hover:text-white hover:border-blue-silver hover:shadow-medium hover:-translate-y-1">Booking</Link>
        </li>
        <li className="m-0 p-0">
          <Link to="/gallery" className="block text-blue-silver px-6 py-3 text-center font-medium border border-transparent transition-all duration-500 hover:text-white hover:border-blue-silver hover:shadow-medium hover:-translate-y-1">Gallery</Link>
        </li>
      </ul>
    </nav>
  );
}