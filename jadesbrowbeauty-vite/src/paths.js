// path to app.jsx from that file: ./App.jsx
/**
 * paths.js - Centralized file for component and utility paths
 * 
 * This file serves as a single source of truth for all import paths in the application.
 * Organized by feature/domain for improved readability and maintainability.
 */

// ===================================
// Core Application Components
// ===================================
export const CORE = {
  App: './App.jsx',
  ErrorBoundary: './components/ErrorBoundary/ErrorBoundary.jsx',
};

// ===================================
// Layout Components
// ===================================
export const LAYOUT = {
  Nav: './components/Nav/Nav.jsx',
  Footer: './components/Footer/Footer.jsx',
};

// ===================================
// Page Components
// ===================================
export const PAGES = {
  Home: './components/Home/Home.jsx',
  About: './components/About/About.jsx',
  Services: './components/Services/WaxingServices.jsx',
  Booking: './components/Booking/BookingForm.jsx',
  Gallery: './components/Gallery/ImageGallery.jsx',
  Admin: './components/Admin/AdminDashboard.jsx',
};

// ===================================
// Feature Components (organized by domain)
// ===================================
export const COMPONENTS = {
  // Home Components
  HomeHero: './components/Home/HomeHero.jsx',
  
  // Services Components
  ServiceCard: './components/Services/ServiceCard.jsx',
  WaxingServices: './components/Services/WaxingServices.jsx',
  ServiceDetails: './components/Services/ServiceDetails.jsx',
  
  // Booking Components
  BookingForm: './components/Booking/BookingForm.jsx',
  BookingCalendar: './components/Booking/BookingCalendar.jsx',
  BookingConfirmation: './components/Booking/BookingConfirmation.jsx',
  
  // Gallery Components
  ImageGallery: './components/Gallery/ImageGallery.jsx',
  RotatingImageGallery: './components/Gallery/RotatingImageGallery.jsx',
  ImageTile: './components/ImageTile/ImageTile.jsx',
  
  // Background Components
  Background: './components/Background/Background.jsx',
  
  // Video Components
  VideoBackground: './components/Video/VideoBackground.jsx',
  
  // Admin Components
  AdminDashboard: './components/Admin/AdminDashboard.jsx',
  AdminLogin: './components/Admin/AdminLogin.jsx',
  
  // Routing Components
  ProtectedRoute: './components/Routes/ProtectedRoute.jsx',
  
  // Shared Components
  LoadingSpinner: './components/shared/LoadingSpinner.jsx',
  ErrorMessage: './components/shared/ErrorMessage.jsx',
};

// ===================================
// Context Providers
// ===================================
export const CONTEXTS = {
  ServicesContext: './contexts/ServicesContext.jsx',
  AuthContext: './contexts/AuthContext.jsx',
  ThemeContext: './contexts/ThemeContext.jsx',
};

// ===================================
// Custom Hooks
// ===================================
export const HOOKS = {
  useServiceManagement: './hooks/useServiceManagement.js',
  useImageLoader: './hooks/useImageLoader.js',
  useAuth: './hooks/useAuth.js',
  useLocalStorage: './hooks/useLocalStorage.js',
  useMediaQuery: './hooks/useMediaQuery.js',
};

// ===================================
// Routes Configuration
// ===================================
export const ROUTES = {
  routesConfig: './routes/routes.jsx',
};

// ===================================
// API and Services
// ===================================
export const SERVICES = {
  api: './services/api.js',
  bookingService: './services/bookingService.js',
  authService: './services/authService.js',
  galleryService: './services/galleryService.js',
};

// ===================================
// Utility Functions
// ===================================
export const UTILS = {
  helpers: './utils/helpers.js',
  validation: './utils/validation.js',
  formatting: './utils/formatting.js',
  animations: './utils/animations.js',
};

// ===================================
// Data and Constants
// ===================================
export const DATA = {
  servicesData: './data/servicesData.js',
  galleryData: './data/galleryData.js',
  constants: './data/constants.js',
};

// ===================================
// Assets
// ===================================
export const ASSETS = {
  images: './assets/images/',
  icons: './assets/icons/',
  videos: './assets/videos/',
};