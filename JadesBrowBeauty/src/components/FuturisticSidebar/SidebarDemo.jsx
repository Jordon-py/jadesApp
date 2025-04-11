// path to app.jsx: ../../App.jsx
import React, { useState } from 'react';
import FuturisticSidebar from './FuturisticSidebar';

/**
 * Demo component showing FuturisticSidebar implementation
 * 
 * This component demonstrates how to integrate and use the FuturisticSidebar
 * in a real application with example menu structure and click handling.
 */
const SidebarDemo = () => {
  // State to track the currently selected item
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Example menu structure
  const menuStructure = [
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
    // Here you would typically handle navigation or other actions
  };
  
  return (
    <div className="sidebar-demo">
      {/* Implement FuturisticSidebar */}
      <FuturisticSidebar
        menuItems={menuStructure}
        logo="/Ja.svg"
        title="Jade's Beauty"
        onItemClick={handleItemClick}
      />
      
      {/* Demo content area */}
      <div className="demo-content" style={{
        marginLeft: '280px', 
        padding: '2rem',
        transition: 'margin-left 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        <h1>FuturisticSidebar Demo</h1>
        
        {selectedItem ? (
          <div>
            <h2>Selected: {selectedItem.label}</h2>
            <p>Value: {selectedItem.value}</p>
          </div>
        ) : (
          <p>Select an item from the sidebar to see its details.</p>
        )}
        
        <div style={{ marginTop: '2rem' }}>
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