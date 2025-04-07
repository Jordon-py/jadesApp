// path to app.jsx: ../App.jsx
import { useState, useEffect, useMemo, useCallback } from 'react';

/**
 * Custom hook for advanced service management
 * 
 * Features:
 * - Fetching services from API or local data
 * - Local caching with sessionStorage
 * - Advanced filtering and sorting
 * - Analytics tracking for popular services
 * - Performance optimizations with memoization
 */
export const useServiceManagement = (initialServices = []) => {
  const [services, setServices] = useState(() => {
    // Try to load from session storage first for better performance
    const cached = sessionStorage.getItem('jbb_services');
    return cached ? JSON.parse(cached) : initialServices;
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    category: 'All',
    priceRange: { min: 0, max: 1000 }
  });
  const [sortOptions, setSortOptions] = useState({
    field: '',
    direction: 'asc'
  });

  // Save to session storage when services change
  useEffect(() => {
    if (services.length > 0) {
      sessionStorage.setItem('jbb_services', JSON.stringify(services));
    }
  }, [services]);

  // Function to fetch services from API
  const fetchServices = useCallback(async (endpoint = '/api/services') => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(endpoint);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      setServices(data);
      return data;
    } catch (err) {
      setError(err.message || 'Failed to fetch services');
      console.error('Error fetching services:', err);
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Filter services based on current filter settings
  const filteredServices = useMemo(() => {
    return services.filter(service => {
      // Search filter
      if (filters.search && 
          !service.title.toLowerCase().includes(filters.search.toLowerCase()) &&
          !service.description.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }
      
      // Category filter
      if (filters.category !== 'All' && service.category !== filters.category) {
        return false;
      }
      
      // Price range filter
      const price = parseInt(service.price.replace(/\D/g, ''), 10);
      if (price < filters.priceRange.min || price > filters.priceRange.max) {
        return false;
      }
      
      return true;
    });
  }, [services, filters]);
  
  // Sort filtered services
  const sortedServices = useMemo(() => {
    if (!sortOptions.field) return filteredServices;
    
    return [...filteredServices].sort((a, b) => {
      let comparison = 0;
      
      if (sortOptions.field === 'price') {
        const priceA = parseInt(a.price.replace(/\D/g, ''), 10);
        const priceB = parseInt(b.price.replace(/\D/g, ''), 10);
        comparison = priceA - priceB;
      } else if (sortOptions.field === 'name') {
        comparison = a.title.localeCompare(b.title);
      } else if (sortOptions.field === 'popularity') {
        comparison = (b.popularity || 0) - (a.popularity || 0);
      }
      
      return sortOptions.direction === 'asc' ? comparison : -comparison;
    });
  }, [filteredServices, sortOptions]);
  
  // Update filters
  const updateFilters = useCallback((newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);
  
  // Update sort options
  const updateSortOptions = useCallback((field, direction = 'asc') => {
    setSortOptions({ field, direction });
  }, []);
  
  // Add new service
  const addService = useCallback((service) => {
    setServices(prev => [...prev, { 
      ...service, 
      id: service.id || Date.now().toString(),
      createdAt: new Date().toISOString() 
    }]);
  }, []);
  
  // Update existing service
  const updateService = useCallback((id, updates) => {
    setServices(prev => prev.map(service => 
      service.id === id ? { ...service, ...updates, updatedAt: new Date().toISOString() } : service
    ));
  }, []);
  
  // Remove service
  const removeService = useCallback((id) => {
    setServices(prev => prev.filter(service => service.id !== id));
  }, []);
  
  // Track service popularity (could be connected to analytics)
  const trackServiceView = useCallback((id) => {
    setServices(prev => prev.map(service => 
      service.id === id ? { ...service, popularity: (service.popularity || 0) + 1 } : service
    ));
  }, []);
  
  // Get featured/popular services
  const featuredServices = useMemo(() => {
    return [...services]
      .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
      .slice(0, 3);
  }, [services]);
  
  return {
    services: sortedServices,
    featuredServices,
    isLoading,
    error,
    filters,
    updateFilters,
    updateSortOptions,
    fetchServices,
    addService,
    updateService,
    removeService,
    trackServiceView
  };
};

export default useServiceManagement;