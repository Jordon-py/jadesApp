import React from 'react';
import Button from '../Button/Button'; // Import the new Button
import './Home.css'; // Import CSS for Home

// Assuming Ja.svg is correctly placed in public folder or imported
import JaSVG from '/Ja.svg'; // Check path based on your setup

export default function Home() {
	return (
		// Use a section tag for semantic meaning
		<section id="home" className="home-section">
			<div className="home-content">
				<h1>Welcome to Jade's Brow Beauty</h1>
				<p>Your one-stop solution for all your brow needs!</p>
				<p>Explore our services and book an appointment today!</p>
				{/* Use the new Button component */}
				<Button onClick={() => console.log('Book Now Clicked!')}>
					Book Appointment
				</Button>
			</div>
			<div className="home-image-container">
				{/* Use the imported SVG */}
				<img src={JaSVG} alt="Jade's Brow Beauty Illustration" className="home-image" />
			</div>
		</section>
	);
}