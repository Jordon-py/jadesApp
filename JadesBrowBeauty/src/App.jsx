import React, { useState, useEffect } from 'react';
// Removed unused PropTypes import
import NavMenu from './components/Nav/NavMenu';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import getServicesData from './components/Services/ServicesComponent';
import { FuturisticSidebar } from './components/FuturisticSidebar';
import Nav from './components/Nav/Nav'; // Import Nav directly

import './App.css';

// Define sidebar menu structure outside the component for clarity
const sidebarMenuItems = [
  {
    label: 'Services',
    items: [
      { label: 'Brow Treatment', value: 'brow', active: true },
      { label: 'Lash Extensions', value: 'lash' },
      { label: 'Facial Waxing', value: 'facial' },
      { label: 'Body Waxing', value: 'body' },
    ],
  },
  {
    label: 'Appointments',
    items: [
      { label: 'Book Now', value: 'book' },
      { label: 'View Calendar', value: 'calendar' },
      { label: 'My Appointments', value: 'my-appointments' },
    ],
  },
  {
    label: 'Contact',
    items: [
      { label: 'Location', value: 'location' },
      { label: 'Send Message', value: 'message' },
    ],
  },
];

// Define the booking URL as a constant
const BOOKING_URL = 'https://book.squareup.com/appointments/22e54cea-00dd-45ab-ba40-225edc9d79db/location/C8VRR5692G797/services';

function App() {
  // Removed unused dropdown state and ref
  const [services, setServices] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Handle sidebar item clicks
  const handleSidebarItemClick = (item) => {
    console.log('Selected:', item.value);
    if (item.value === 'book') {
      // Use the constant for the booking URL
      window.open(BOOKING_URL, '_blank');
    }
    // Handle other actions based on item.value (e.g., navigation)
    setSidebarOpen(false); // Close sidebar on item click
  };

  useEffect(() => {
    const data = getServicesData();
    setServices(data);
  }, []);

  // Filter featured services here before passing down
  // Example: featuredServiceIds = [1, 5, 11, 20]; // Define which IDs are featured
  const featuredServiceIds = [1, 5, 11, 20]; // Example IDs
  const featuredServices = services.filter(service => featuredServiceIds.includes(service.id));


  return (
    <>
      {/* Pass Nav component directly */}
      <NavMenu Nav={Nav} />

      {/* FuturisticSidebar component */}
      <FuturisticSidebar
        menuItems={sidebarMenuItems}
        logo='/Ja.svg'
        title='Jade&#39;s Beauty' // Changed to single quotes
        onItemClick={handleSidebarItemClick}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Toggle button for sidebar - Use CSS class for styling */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className='sidebar-toggle-button' // Apply class for styling
        aria-label='Toggle Sidebar Menu' // Accessibility
      >
        {/* Icon for the button (e.g., hamburger icon) */}
        <span aria-hidden='true'>☰</span>
      </button>

      <main className='main-content'>
        <Home />
        {/* Pass the filtered featured services data to the Services component */}
        <Services services={featuredServices} />
      </main>
      <Footer />
    </>
  );
}

// No props currently defined for App, so PropTypes are not strictly needed yet.
// App.propTypes = {};

export default App;
