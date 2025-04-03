import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Update with your backend URL

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
