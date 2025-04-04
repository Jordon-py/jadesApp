import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // Adjust the path as necessary

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" className="button">Home</Link>
        </li>
        <li>
          <Link to="/about" className="button">About</Link>
        </li>
        <li>
          <Link to="/services" className="button">Services</Link>
        </li>
        <li>
          <Link to="/booking" className="button">Booking</Link>
        </li>
        <li>
          <Link to="/gallery" className="button">Gallery</Link>
        </li>
      </ul>
    </nav>
  );
}