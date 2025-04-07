import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Scrollbar } from 'react-scrollbars-custom';
import { ServicesProvider } from './contexts/ServicesContext';
import { routes } from './routes/routes';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import TestTailwind from './components/TestTailwind';

const Nav = React.lazy(() => import('./components/Nav/Nav.jsx'));
const Footer = React.lazy(() => import('./components/Footer/Footer.jsx'));
// Only importing the main index.css which now contains Tailwind directives
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
          <div className="w-16 h-16 border-4 border-blue-silver border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <ServicesProvider>
      <Router>
        <Scrollbar style={{ height: '100vh' }} autoHide>
          <Suspense fallback={<div className="p-4 text-white">Loading navigation...</div>}>
            <Nav />
          </Suspense>

          <main className="flex-1 p-6 relative z-10">
            {/* Tailwind Test Component */}
            <div className="my-8">
              <TestTailwind title="Tailwind CSS Is Working!" />
            </div>
            
            <Suspense fallback={<div className="text-white p-4">Loading content...</div>}>
              <Routes>
                {routes.map(({ path, element, protected: isProtected }) =>
                  <Route
                    key={path}
                    path={path}
                    element={isProtected
                      ? <ProtectedRoute>{element}</ProtectedRoute>
                      : element}
                  />
                )}
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
