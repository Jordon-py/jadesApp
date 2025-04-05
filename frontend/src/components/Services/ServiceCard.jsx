// path to app.jsx: ../../App.jsx
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * ServiceCard - A highly optimized component for displaying service information
 * 
 * Features:
 * - Memoized to prevent unnecessary rerenders
 * - Animated with framer-motion for enhanced UX
 * - Responsive design with TailwindCSS
 * - Accessibility features included
 */
const ServiceCard = memo(({ 
  id, 
  title, 
  price, 
  description, 
  category,
  onSelect,
  featured = false
}) => {
  // Animation variants for card interactions
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hover: { 
      y: -5, 
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98, transition: { duration: 0.1 } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      variants={cardVariants}
      className={`
        relative overflow-hidden rounded-xl p-6 
        ${featured 
          ? 'bg-gradient-to-br from-black/90 to-black/80 border-2 border-gold'
          : 'bg-black/75 border border-gray-600'
        }
        backdrop-blur-md text-white shadow-lg flex flex-col
        transform transition-all duration-300 ease-in-out
      `}
      layout
      onClick={() => onSelect && onSelect(id)}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${title}`}
    >
      {featured && (
        <div className="absolute -right-8 top-4 bg-gold text-black px-10 py-1 rotate-45 text-sm font-bold">
          Popular
        </div>
      )}

      {category && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-medium uppercase tracking-wider bg-gold/20 text-gold rounded-full">
          {category}
        </span>
      )}
      
      <h3 className="text-2xl md:text-3xl font-medium text-gray-100 mb-2">
        {title}
      </h3>
      
      <div className="text-xl md:text-2xl font-bold text-gold mb-4">
        {price}
      </div>
      
      <p className="text-gray-300 flex-grow mb-4">
        {description}
      </p>
      
      <button 
        className="
          mt-auto py-2 px-4 bg-gold hover:bg-gold/80 
          text-black font-medium rounded-md transition-colors 
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold
        "
      >
        Book Now
      </button>
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

ServiceCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string,
  onSelect: PropTypes.func,
  featured: PropTypes.bool
};

export default ServiceCard;