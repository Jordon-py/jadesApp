import React from 'react';


export default function Home() {
	return (
	<>
	
		<div className="background">
				<div className="content-container">
					<h1>Your Website Title</h1>
					<p>Minimalistic dark mode background with subtle animation.</p>
				</div>
		
			</div>
			<style jsx>{`
				.background {
					background-image: url('min.png') no-repeat center center fixed;
					background-size: cover;
					position: fixed;
					background-color: #000;
					animation: fade 5s infinite;
				}
				@keyframes fade {
					0% { opacity: 0.5; }
					50% { opacity: 1; }
					100% { opacity: 0.5; }
				}
			`}</style>
	</>
	);
}