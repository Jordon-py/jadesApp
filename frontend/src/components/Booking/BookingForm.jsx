import React, { useState } from 'react';
import { createBooking } from '../../services/api';
import { isValidEmail } from '../../utils/helpers';
import './Booking.module.css';

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
    <div className="booking-container">
      <h2>Book Your Appointment</h2>
      
      {submitSuccess ? (
        <div className="success-message">
          <h3>Booking Successful!</h3>
          <p>Thank you for booking with JadesBrowBeauty. We'll confirm your appointment shortly.</p>
          <button onClick={() => setSubmitSuccess(false)}>Book Another Appointment</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="service">Service</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select a service</option>
              <option value="eyebrow_waxing">Eyebrow Waxing</option>
              <option value="microblading">Microblading</option>
              <option value="full_body_waxing">Full Body Waxing</option>
              <option value="facial">Facial Treatment</option>
            </select>
            {errors.service && <span className="error">{errors.service}</span>}
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
              {errors.date && <span className="error">{errors.date}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
              {errors.time && <span className="error">{errors.time}</span>}
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="notes">Additional Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any specific requests or information"
              rows="4"
            ></textarea>
          </div>
          
          {errors.submit && <div className="error-message">{errors.submit}</div>}
          
          <button type="submit" disabled={isSubmitting} className="submit-button">
            {isSubmitting ? 'Submitting...' : 'Book Appointment'}
          </button>
        </form>
      )}
    </div>
  );
}
