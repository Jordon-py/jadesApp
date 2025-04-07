import React, { useState } from 'react';
import { createBooking } from '../../services/api';
import { isValidEmail } from '../../utils/helpers';
import PropTypes from 'prop-types';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!isValidEmail(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time';
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await createBooking(formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        notes: ''
      });
    } catch (error) {
      console.error('Booking submission error:', error);
      setErrors({ submit: 'Failed to submit booking. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-bg-dark backdrop-blur-md rounded-md shadow-medium">
      <h2 className="text-2xl font-semibold text-blue-silver mb-6 text-center">Book Your Appointment</h2>
      
      {submitSuccess ? (
        <div className="bg-green-900/30 backdrop-blur-md p-6 rounded-md text-center">
          <h3 className="text-xl font-semibold text-blue-silver mb-2">Booking Successful!</h3>
          <p className="text-text-light mb-6">Thank you for booking with JadesBrowBeauty. We'll confirm your appointment shortly.</p>
          <button 
            onClick={() => setSubmitSuccess(false)}
            className="bg-blue-silver-light text-gray-800 py-2 px-6 rounded-lg font-medium transition-all hover:bg-blue-silver hover:shadow-medium"
          >
            Book Another Appointment
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="name" className="block text-sm font-medium text-blue-silver-light">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full p-3 bg-bg-lighter backdrop-blur-sm border border-gray-700 rounded-md text-text-light focus:outline-none focus:ring-1 focus:ring-blue-silver"
            />
            {errors.name && <span className="text-sm text-red-400">{errors.name}</span>}
          </div>
          
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-blue-silver-light">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              className="w-full p-3 bg-bg-lighter backdrop-blur-sm border border-gray-700 rounded-md text-text-light focus:outline-none focus:ring-1 focus:ring-blue-silver"
            />
            {errors.email && <span className="text-sm text-red-400">{errors.email}</span>}
          </div>
          
          <div className="space-y-1">
            <label htmlFor="phone" className="block text-sm font-medium text-blue-silver-light">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="w-full p-3 bg-bg-lighter backdrop-blur-sm border border-gray-700 rounded-md text-text-light focus:outline-none focus:ring-1 focus:ring-blue-silver"
            />
            {errors.phone && <span className="text-sm text-red-400">{errors.phone}</span>}
          </div>
          
          <div className="space-y-1">
            <label htmlFor="service" className="block text-sm font-medium text-blue-silver-light">Service</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-3 bg-bg-lighter backdrop-blur-sm border border-gray-700 rounded-md text-text-light focus:outline-none focus:ring-1 focus:ring-blue-silver"
            >
              <option value="">Select a service</option>
              <option value="eyebrow_waxing">Eyebrow Waxing</option>
              <option value="microblading">Microblading</option>
              <option value="full_body_waxing">Full Body Waxing</option>
              <option value="facial">Facial Treatment</option>
            </select>
            {errors.service && <span className="text-sm text-red-400">{errors.service}</span>}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="date" className="block text-sm font-medium text-blue-silver-light">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 bg-bg-lighter backdrop-blur-sm border border-gray-700 rounded-md text-text-light focus:outline-none focus:ring-1 focus:ring-blue-silver"
              />
              {errors.date && <span className="text-sm text-red-400">{errors.date}</span>}
            </div>
            
            <div className="space-y-1">
              <label htmlFor="time" className="block text-sm font-medium text-blue-silver-light">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-3 bg-bg-lighter backdrop-blur-sm border border-gray-700 rounded-md text-text-light focus:outline-none focus:ring-1 focus:ring-blue-silver"
              />
              {errors.time && <span className="text-sm text-red-400">{errors.time}</span>}
            </div>
          </div>
          
          <div className="space-y-1">
            <label htmlFor="notes" className="block text-sm font-medium text-blue-silver-light">Additional Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any specific requests or information"
              rows="4"
              className="w-full p-3 bg-bg-lighter backdrop-blur-sm border border-gray-700 rounded-md text-text-light focus:outline-none focus:ring-1 focus:ring-blue-silver"
            ></textarea>
          </div>
          
          {errors.submit && <div className="p-3 bg-red-900/30 text-red-300 rounded-md">{errors.submit}</div>}
          
          <button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full bg-blue-silver-light text-gray-800 border-none py-3 px-6 rounded-lg font-medium cursor-pointer transition-all hover:bg-blue-silver hover:shadow-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Book Appointment'}
          </button>
        </form>
      )}
    </div>
  );
}

BookingForm.propTypes = {
  selectedService: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};
