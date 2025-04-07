import React, { lazy } from 'react';

// Lazy load your route components
const Home = lazy(() => import('../components/Home/Home.jsx'));
const About = lazy(() => import('../components/About/About.jsx'));
const ServiceCard = lazy(() => import('../components/Services/ServiceCard.jsx'));
const BookingForm = lazy(() => import('../components/Booking/BookingForm.jsx'));
const Gallery = lazy(() => import('../components/Gallery/ImageGallery.jsx'));
const AdminDashboard = lazy(() => import('../components/Admin/AdminDashboard.jsx'));

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <ServiceCard /> },
  { path: '/booking', element: <BookingForm /> },
  { path: '/gallery', element: <Gallery /> },
  {
    path: '/admin',
    element: <AdminDashboard />,
    protected: true, // used by ProtectedRoute in App.jsx
  },
];
