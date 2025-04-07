// ../../../../App.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Admin Dashboard component for managing site content
 */
const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        // This would be replaced with a real API call
        // const response = await fetch('/api/admin/bookings');
        // const data = await response.json();
        
        // Mock data for development
        const mockData = [
          { id: 1, name: 'Jane Doe', service: 'Brow Tint', date: '2025-04-10', time: '14:00' },
          { id: 2, name: 'John Smith', service: 'Waxing', date: '2025-04-11', time: '15:30' },
        ];
        
        setBookings(mockData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load bookings');
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-blue-400 rounded-full animate-spin border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black bg-opacity-40 p-6 rounded-lg text-white">
        <h2 className="text-xl font-semibold text-red-400 mb-4">Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-black bg-opacity-40 p-6 rounded-lg text-white">
      <h1 className="text-2xl font-semibold mb-6 text-blue-300">Admin Dashboard</h1>
      
      <div className="mb-6">
        <h2 className="text-xl mb-3 text-blue-200">Upcoming Bookings</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {bookings.map(booking => (
                <tr key={booking.id} className="hover:bg-gray-900">
                  <td className="px-6 py-4 whitespace-nowrap">{booking.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{booking.service}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{booking.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{booking.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button 
                      className="mr-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded text-sm"
                      onClick={() => console.log('Edit booking', booking.id)}
                    >
                      Edit
                    </button>
                    <button 
                      className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded text-sm"
                      onClick={() => console.log('Cancel booking', booking.id)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;