// path to app.jsx: ../../App.jsx
import React, { useState } from 'react';
import FuturisticSidebar from './FuturisticSidebar';
// Optional: Create and import a CSS file for demo-specific styles
// import './SidebarDemo.css';

/**
 * Demo component showing FuturisticSidebar implementation
 *
 * This component demonstrates how to integrate and use the FuturisticSidebar
 * in a real application with example menu structure and click handling.
 */
const SidebarDemo = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true); // Control sidebar state for demo

  // Example menu structure
  const menuStructure = [
    // ... (menu structure remains the same)
    {
      label: 'Dashboard',
      items: [
        { label: 'Analytics', value: 'analytics' },
        { label: 'Reports', value: 'reports', active: true },
        { label: 'Statistics', value: 'statistics' }
      ]
    },
    {
      label: 'Services',
      items: [
        { label: 'Brow Treatment', value: 'brow-treatment' },
        { label: 'Lash Extensions', value: 'lash-extensions' },
        { label: 'Facial Waxing', value: 'facial-waxing' },
        { label: 'Body Waxing', value: 'body-waxing' }
      ]
    },
    {
      label: 'Appointments',
      items: [
        { label: 'Calendar', value: 'calendar' },
        { label: 'New Booking', value: 'new-booking' },
        { label: 'Manage Bookings', value: 'manage-bookings' }
      ]
    },
    {
      label: 'Settings',
      items: [
        { label: 'Profile', value: 'profile' },
        { label: 'Notifications', value: 'notifications' },
        { label: 'Preferences', value: 'preferences' }
      ]
    }
  ];

  // Handle item click
  const handleItemClick = (item) => {
    console.log('Selected item:', item);
    setSelectedItem(item);
    // Close sidebar on mobile after selection
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  // Toggle sidebar state
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Add a class to the demo container based on sidebar state for content shifting
  const demoContainerClass = `sidebar-demo ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`;

  return (
    // Use className for styling the container
    <div className={demoContainerClass}>
      {/* Implement FuturisticSidebar */}
      <FuturisticSidebar
        menuItems={menuStructure}
        logo='/Ja.svg'
        title='Jade&#39;s Beauty' // Changed to single quotes
        onItemClick={handleItemClick}
        isOpen={sidebarOpen} // Pass state
        onToggle={toggleSidebar} // Pass toggle function
      />

      {/* Demo content area - Styling moved to CSS */}
      {/* Apply className for styling */}
      <div className='demo-content'>
        <h1>FuturisticSidebar Demo</h1>

        {selectedItem ? (
          <div>
            <h2>Selected: {selectedItem.label}</h2>
            <p>Value: {String(selectedItem.value)}</p> {/* Ensure value is string */}
          </div>
        ) : (
          <p>Select an item from the sidebar to see its details.</p>
        )}

        {/* Use className for styling */}
        <div className='demo-features'>
          <h3>Component Features:</h3>
          <ul>
            <li>Animated toggle with smooth transitions</li>
            <li>Glassmorphism effect with backdrop filter</li>
            <li>Expandable/collapsible dropdown menus</li>
            <li>Neon hover effects and active state indicators</li>
            <li>Fully responsive with mobile-first design</li>
            <li>Dynamic menu structure via props</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarDemo;

/*
// Example SidebarDemo.css (Create this file if needed)
.sidebar-demo {
  // Styles for the main demo container
}

.demo-content {
  padding: 2rem;
  transition: margin-left 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  margin-left: 0; // Default margin
}

.sidebar-open .demo-content {
   margin-left: 240px; // Adjust based on sidebar width when open
}

.demo-features {
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .demo-content {
    margin-left: 0 !important; // Ensure no margin shift on mobile
  }
}
*/