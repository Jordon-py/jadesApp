// WaxingServices.jsx
import React, { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { useServices } from '../../contexts/ServicesContext';
import './WaxingServices.css';

/**
 * WaxingServices - Enhanced master-level component for displaying services
 * 
 * Features:
 * - Uses React Context with custom hooks for state management
 * - Implements concurrent rendering with useTransition
 * - Optimized rendering with React.memo for list items
 * - Advanced filtering and sorting capabilities
 * - Animated transitions with framer-motion
 * - Responsive grid layout with CSS
 */
const WaxingServices = () => {
  const {
    services,
    featuredServices,
    isLoading,
    filters,
    updateFilters,
    updateSortOptions,
    trackServiceView
  } = useServices();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [isPending, startTransition] = useTransition();
  
  // Handle search input changes with concurrent rendering
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Use concurrent rendering to keep UI responsive during filtering
    startTransition(() => {
      updateFilters({ search: value });
    });
  };

  // Handle category filter changes
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    startTransition(() => {
      updateFilters({ category });
    });
  };

  // Handle sorting changes
  const handleSortChange = (e) => {
    const value = e.target.value;
    let field = '';
    let direction = 'asc';
    
    if (value === 'price-low') {
      field = 'price';
      direction = 'asc';
    } else if (value === 'price-high') {
      field = 'price';
      direction = 'desc';
    } else if (value === 'name') {
      field = 'name';
      direction = 'asc';
    } else if (value === 'popularity') {
      field = 'popularity';
      direction = 'desc';
    }
    
    updateSortOptions(field, direction);
  };

  // Handle service selection for details/booking
  const handleServiceSelect = (id) => {
    // Track the service view for analytics
    trackServiceView(id);
    
    // Could navigate to service detail page or open modal
    console.log(`Selected service ID: ${id}`);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="services-container">
      {/* Hero Section with subtle parallax effect */}
      <section className="hero-section">
        <div 
          className="hero-background"
          style={{
            backgroundImage: 'url(/assets/images/eyebrow.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)',
            transform: 'scale(1.1)'
          }}
        />
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Jade's Brow Beauty
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expert Waxing Services for Eyebrows, Full Body, Lips, Nose & Bikini
          </motion.p>
        </div>
      </section>

      {/* Filters and search */}
      <section className="filter-section">
        <div className="filter-container">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
              aria-label="Search services"
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="search-icon" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="select-container">
            <select 
              onChange={handleSortChange}
              className="filter-select"
              aria-label="Sort services"
            >
              <option value="">Sort by</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name (A-Z)</option>
              <option value="popularity">Most Popular</option>
            </select>

            <select 
              value={filters.category}
              onChange={handleCategoryChange}
              className="filter-select"
              aria-label="Filter by category"
            >
              <option value="All">All Categories</option>
              <option value="Eyebrow">Eyebrow</option>
              <option value="Body">Body</option>
              <option value="Face">Face</option>
            </select>
          </div>
        </div>

        {/* Loading indicator */}
        {(isLoading || isPending) && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading services...</p>
          </div>
        )}

        {/* Services grid with animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="services-grid"
        >
          <AnimatePresence mode="wait">
            {services.map(service => (
              <ServiceCard
                key={service.id}
                {...service}
                featured={featuredServices.some(fs => fs.id === service.id)}
                onSelect={handleServiceSelect}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {!isLoading && services.length === 0 && (
          <div className="empty-state">
            <svg xmlns="http://www.w3.org/2000/svg" className="empty-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="empty-title">No services found</h3>
            <p className="empty-text">Try adjusting your search or filters</p>
            <button 
              onClick={() => { 
                setSearchTerm(''); 
                updateFilters({ search: '', category: 'All' }); 
              }}
              className="clear-filters-button"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Featured services section */}
      {featuredServices.length > 0 && (
        <section className="featured-section">
          <div className="featured-container">
            <h2 className="featured-title">Most Popular Services</h2>
            <div className="featured-grid">
              {featuredServices.map(service => (
                <motion.div
                  key={`featured-${service.id}`}
                  whileHover={{ scale: 1.02 }}
                  className="featured-card"
                >
                  <h3 className="featured-card-title">{service.title}</h3>
                  <p className="featured-card-description">{service.description}</p>
                  <div className="featured-card-footer">
                    <span className="featured-card-price">{service.price}</span>
                    <button className="featured-card-button">
                      Book Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to action */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready for your transformation?</h2>
          <p className="cta-text">Experience the exceptional care and results that our clients love.</p>
          <button className="cta-button">
            Book Your Appointment
          </button>
        </div>
      </section>
    </div>
  );
};

export default WaxingServices;
