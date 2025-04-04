import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // Adjust the path as necessary
import logo from './logo.png'; // Adjust the path to your logo image

export default function Nav() {
  return (
	<nav className="nav">
	  <div className="logo-container">
		<Link to="/">
		  <img src={logo} alt="Logo" className="logo" />
		</Link>
	  </div>
	  <Router>
                            <nav>
                              <ul>
                                <li>
                                  <Link to="/" className="button" >Home</Link>
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
                              </ul>
                            </nav>
                          
                            <Routes>
                              <Route path="/" element={<Home />} className="button" />
                              <Route path="/about" element={<About />} className="button" />
                              <Route path="/services" element={<Services />} className="button" />
                              <Route path="/booking" element={<BookingForm />} className="button" />
                            </Routes>
      </Router>
    </nav>
  );
}