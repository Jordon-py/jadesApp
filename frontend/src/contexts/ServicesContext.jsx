// path to app.jsx: ../App.jsx
import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import defaultServices from '../components/Services/servicesData.js';
import useServiceManagement from '../hooks/useServiceManagement';

// Define the context
const ServicesContext = createContext(null);

/**
 * Services Provider Component
 * Manages global state for waxing services utilizing our custom hook
 */
export const ServicesProvider = ({ children }) => {
  // Use our custom hook for service management
  const serviceManager = useServiceManagement(defaultServices);
  
  return (
    <ServicesContext.Provider value={serviceManager}>
      {children}
    </ServicesContext.Provider>
  );
};

ServicesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook for accessing services data
export const useServices = () => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error('useServices must be used within a ServicesProvider');
  }
  return context;
};

export default ServicesContext;