// WaxingServices.jsx
import React, { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { useServices } from '../../contexts/ServicesContext';

/**
 * WaxingServices - Enhanced master-level component for displaying services
 * 
 * Features:
 * - Uses React Context with custom hooks for state management
 * - Implements concurrent rendering with useTransition
 * - Optimized rendering with React.memo for list items
 * - Advanced filtering and sorting capabilities
 * - Animated transitions with framer-motion
 * - Responsive grid layout with TailwindCSS
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-lg text-white">
      {/* Hero Section with subtle parallax effect */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-black/50"
          style={{
            backgroundImage: 'url(/assets/images/eyebrow.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)',
            transform: 'scale(1.1)'
          }}
        />
        <div className="relative z-10 text-center p-6 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-medium mb-4 text-gold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Jade's Brow Beauty
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expert Waxing Services for Eyebrows, Full Body, Lips, Nose & Bikini
          </motion.p>
        </div>
      </section>

      {/* Filters and search */}
      <section className="py-8 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full py-3 px-4 pl-10 bg-black/50 border border-gray-700 rounded-lg 
              text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Search services"
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex flex-wrap gap-2">
            <select 
              onChange={handleSortChange}
              className="py-3 px-4 bg-black/50 border border-gray-700 rounded-lg 
              text-white focus:outline-none focus:ring-2 focus:ring-gold"
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
              className="py-3 px-4 bg-black/50 border border-gray-700 rounded-lg 
              text-white focus:outline-none focus:ring-2 focus:ring-gold"
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
          <div className="text-center py-4">
            <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-gray-400 mt-2">Loading services...</p>
          </div>
        )}

        {/* Services grid with animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
          <div className="text-center py-16 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-medium text-gray-300 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
            <button 
              onClick={() => { 
                setSearchTerm(''); 
                updateFilters({ search: '', category: 'All' }); 
              }}
              className="mt-4 px-4 py-2 bg-gold/20 text-gold hover:bg-gold/30 rounded-md transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Featured services section */}
      {featuredServices.length > 0 && (
        <section className="py-12 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium text-gold mb-6">Most Popular Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredServices.map(service => (
                <motion.div
                  key={`featured-${service.id}`}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 border border-gold/30 rounded-lg bg-black/60"
                >
                  <h3 className="text-xl font-medium text-gold mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gold">{service.price}</span>
                    <button className="py-2 px-4 bg-gold text-black rounded hover:bg-gold/80 transition-colors">
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
      <section className="py-16 px-4 text-center bg-black/40 backdrop-blur-md mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-gold mb-4">Ready for your transformation?</h2>
          <p className="text-xl text-gray-300 mb-8">Experience the exceptional care and results that our clients love.</p>
          <button className="py-3 px-8 bg-gold hover:bg-gold/80 text-black font-medium rounded-md transition-colors text-lg">
            Book Your Appointment
          </button>
        </div>
      </section>
    </div>
  );
};

export default WaxingServices;
