// ../../../App.jsx
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProtectedRoute.css';

/**
 * Protected route component that checks if user is authenticated
 * If not authenticated, redirects to login page
 */
const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is authenticated (e.g., by looking for a JWT token in localStorage)
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');
      setIsAuthenticated(!!token);
      setLoading(false);
    };
    
    checkAuth();
  }, []);
  
  if (loading) {
    // Show loading indicator while checking authentication status
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }
  
  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  // If authenticated, render the protected component
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProtectedRoute;