import axios from 'axios';

// Use relative URL in production, localhost in development
const API_BASE_URL = import.meta.env.PROD ? '' : 'http://localhost:3000';

// Create an axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API endpoints
export const getGalleryImages = async () => {
  try {
    const response = await api.get('/api/gallery');
    return response.data;
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return [];
  }
};

export const createBooking = async (bookingData) => {
  try {
    const response = await api.post('/api/bookings', bookingData);
    return response.data;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};

export const getServices = async () => {
  try {
    const response = await api.get('/api/services');
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
};

export default api;
