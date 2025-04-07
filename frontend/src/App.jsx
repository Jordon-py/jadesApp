import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Scrollbar } from 'react-scrollbars-custom';
import { ServicesProvider } from './contexts/ServicesContext';
import { routes } from './routes/routes'; // Modular route list
import ProtectedRoute from './components/Routes/ProtectedRoute.jsx'; // Optional: for admin route protection
const Nav = React.lazy(() => import('./components/Nav/Nav.jsx'));
const Footer = React.lazy(() => import('./components/Footer/Footer.jsx'));

import './App.css';
import './index.css';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <div className="text-center">
          <h1 className="text-3xl font-light text-white mb-4">Loading JadesBrowBeauty</h1>
          <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <ServicesProvider>
      <Router>
        <Scrollbar
          style={{ height: '100vh' }}
          noScrollX
          trackYProps={{ style: { background: 'transparent' } }}
          thumbYProps={{ style: { backgroundColor: '#FFD700', borderRadius: '6px' } }}
          contentProps={{ style: { backgroundColor: '#111', padding: '1rem' } }}
        >
          <header className="relative z-20">
            <Suspense fallback={<div className="p-4 text-white">Loading navigation...</div>}>
              <Nav />
            </Suspense>
          </header>

          <main className="flex-1 relative z-10">
            <Suspense fallback={<div className="text-white p-4">Loading content...</div>}>
              <Routes>
                {routes.map(({ path, element, protected: isProtected }) => (
                  <Route
                    key={path}
                    path={path}
                    element={isProtected ? <ProtectedRoute>{element}</ProtectedRoute> : element}
                  />
                ))}
              </Routes>
            </Suspense>
          </main>

          <Suspense fallback={<div className="text-white p-4">Loading footer...</div>}>
            <Footer />
          </Suspense>
        </Scrollbar>
      </Router>
    </ServicesProvider>
  );
}
