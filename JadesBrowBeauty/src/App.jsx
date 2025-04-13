import React, { useState, useEffect, useRef } from 'react';
import NavMenu from './components/Nav/NavMenu';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import servicesData from './components/Services/ServicesComponent';
import { FuturisticSidebar } from './components/FuturisticSidebar';

import './App.css';

function App() {
  const [dropDown, setDropdown] = useState(false);
  const [dropdownContent, setDropdownContent] = useState(<script src='https://square.site/appointments/buyer/widget/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797.js'></script>);
  const dropdownRef = useRef(null);
  const [services, setServices] = useState(servicesData || []);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Define menu structure for the FuturisticSidebar
  const sidebarMenuItems = [
    {
      label: 'Services',
      items: [
        { label: 'Brow Treatment', value: 'brow', active: true },
        { label: 'Lash Extensions', value: 'lash' },
        { label: 'Facial Waxing', value: 'facial' },
        { label: 'Body Waxing', value: 'body' }
      ]
    },
    {
      label: 'Appointments',
      items: [
        { label: 'Book Now', value: <script src='https://square.site/appointments/buyer/widget/22e54cea-00dd-45ab-ba40-225edc9d79db/C8VRR5692G797.js'></script> },
        { label: 'View Calendar', value: 'calendar' },
        { label: 'My Appointments', value: 'my-appointments' }
      ]
    },
    {
      label: 'Contact',
      items: [
        { label: 'Location', value: 'location' },
        { label: 'Send Message', value: 'message' }
      ]
    }
  ];

  // Handle sidebar item clicks
  const handleSidebarItemClick = (item) => {
    console.log('Selected:', item.value);
    // Handle navigation or other actions based on the item clicked
  };
  
  useEffect(() => {
    // Assuming fetchServices is your function to get the data
    const fetchData = async () => {
      try {
        const data = await fetchServices(); 
        setServices(data); // Update the state with fetched array
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
  
    // Uncomment this when fetchServices is implemented
    // fetchData();
  }, []);
  
  return (
    <>
      <NavMenu />
      
      {/* FuturisticSidebar component - positioned as overlay */}
      <FuturisticSidebar
        menuItems={sidebarMenuItems}
        logo="/Ja.svg"
        title="Jade's Beauty"
        onItemClick={handleSidebarItemClick}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      
      {/* Toggle button for sidebar - floating button that won't affect layout */}
      <button 
        onClick={() => setSidebarOpen(!sidebarOpen)} 
        style={{
          position: 'fixed',
          left: '20px',
          top: '120px', // Position below the navbar
          zIndex: 30,
          background: 'rgba(10, 10, 20, 0.6)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          width: '30px',
          height: '23px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 0 15px rgba(0, 0, 10, 0.2)',
          transition: 'transform 0.3s ease, background 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.background = 'rgba(20, 20, 40, 0.8)';
          e.currentTarget.style.boxShadow = '0 0 20px rgba(100, 200, 255, 0.3)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.background = 'rgba(10, 10, 20, 0.6)';
          e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 0, 10, 0.2)';
        }}
      >
        <span style={{ color: 'lch(90% 0 250)' }}>☰</span>
      </button>
          
          {dropDown && (
            <div id="dropdown-content" className="dropdown-content">
              {dropdownContent.map((service, index) => (
                <div key={index}>
                  <h3 id="name">{service.name}</h3>
                  <p>{service.description}</p>
                  <p>Duration: {service.duration}</p>
                  <p>Price: ${ service.price }</p>
                  <a href={service.href} className="book-now-button">Book Now</a>
                </div>
              ))}
            </div>
          )}
      
      <main className="main-content">
      
        <Home />
        <Services />
      </main>
      <Footer />
    </>
  );
}

export default App;
