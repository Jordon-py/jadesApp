# JadesBrowBeauty Website Project Structure

## Overview

This document provides a comprehensive overview of the JadesBrowBeauty waxing website project structure. The project is built using React with Vite for the frontend and Express.js for the backend.

## Root Directory

```
/waxing-website/
├── .env                       # Environment variables
├── .git/                      # Git repository
├── .github/                   # GitHub configuration
├── .gitignore                 # Git ignore file
├── .vscode/                   # Visual Studio Code configuration
├── app-paths.md               # App paths documentation
├── backend/                   # Backend server code
├── CODE_ANALYSIS_REPORT.md    # Code analysis report
├── jadesbrowbeauty-vite/      # Frontend Vite React app
├── node_modules/              # Root-level Node.js dependencies
├── package-lock.json          # NPM package lock file
├── package.json               # Root-level package configuration
├── postcss.config.js          # PostCSS configuration
├── Procfile                   # Heroku deployment configuration
├── PROJECT_STRUCTURE.md       # This file - project structure documentation
├── react-component-generator.prompt.md  # Component generator prompt
├── report.md                  # Project report
└── static.json                # Static file configuration
```

## Frontend (Vite React App)

```
/jadesbrowbeauty-vite/
├── .gitignore                 # Git ignore file for frontend
├── dist/                      # Build output
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML entry point
├── node_modules/              # Frontend dependencies
├── package-lock.json          # NPM package lock file
├── package.json               # Frontend package configuration
├── postcss.config.cjs         # PostCSS configuration (CommonJS)
├── public/                    # Static assets
├── README.md                  # Frontend documentation
├── services/                  # External services integration
├── src/                       # Source code
├── tailwind.config.js         # TailwindCSS configuration
├── utils/                     # Utility functions
└── vite.config.js             # Vite configuration
```

## Frontend Source Code

```
/jadesbrowbeauty-vite/src/
├── App.css                    # Main application styles
├── App.jsx                    # Main application component
├── assets/                    # Static assets (images, fonts)
├── components/                # React components
├── contexts/                  # React context providers
├── hooks/                     # Custom React hooks
├── index.css                  # Global CSS
├── index.js                   # Entry JavaScript file
├── main.jsx                   # Vite entry point
├── paths.js                   # Path configurations
├── routes/                    # Route definitions
├── services/                  # API services
├── src/                       # Additional source files
└── utils/                     # Utility functions
```

## Components

```
/jadesbrowbeauty-vite/src/components/
├── About/                     # About page components
├── Admin/                     # Admin dashboard components
├── Background/                # Background components
├── Booking/                   # Booking form components
├── ErrorBoundary/             # Error handling components
├── Footer/                    # Footer components
├── Gallery/                   # Image gallery components
├── Home/                      # Home page components
├── ImageTile/                 # Image tile components
├── Nav/                       # Navigation components
├── Routes/                    # Route-related components
├── Services/                  # Services components
├── TestTailwind.jsx           # TailwindCSS test component
└── Video/                     # Video components
```

## Public Assets

```
/jadesbrowbeauty-vite/public/
├── assets/                    # Organized assets by type
├── beige.webp                 # Background image
├── before_3.png               # Before-after images
├── black.mp4                  # Video assets
├── Browandlash.png            # Service images
├── BrowtintShape.png          # Service images
├── fullface.png               # Service images
├── img_3.jpeg                 # Gallery images
├── IMG_*.JPG                  # Various gallery images
├── index.html                 # Public HTML file
├── Ja.mp4                     # Video assets
├── JadesBrow.mp4              # Video assets
├── JadesBrowBeauty.svg        # Logo
└── various other image/media files
```

## Backend

```
/backend/
├── controllers/               # API controllers
│   ├── bookingController.js   # Booking endpoints
│   └── userController.js      # User management endpoints
├── middleware/                # Express middleware
├── models/                    # Database models
├── package-lock.json          # NPM package lock file
├── package.json               # Backend package configuration
├── routes/                    # API route definitions
├── server.js                  # Express server entry point
├── config/                    # Configuration files
└── utils/                     # Backend utilities
```

## Key Files

- **Frontend Entry**: `/jadesbrowbeauty-vite/src/main.jsx` - The entry point for the React application
- **Backend Entry**: `/backend/server.js` - The Express.js server entry point
- **App Component**: `/jadesbrowbeauty-vite/src/App.jsx` - The main React component
- **Routes**: `/jadesbrowbeauty-vite/src/routes/routes.jsx` - React Router route definitions
- **Tailwind Config**: `/jadesbrowbeauty-vite/tailwind.config.js` - TailwindCSS configuration
- **Services Context**: `/jadesbrowbeauty-vite/src/contexts/ServicesContext.jsx` - Context for services data

## Development Workflow

1. Run frontend: `cd jadesbrowbeauty-vite && npm run dev`
2. Run backend: `cd backend && npm run dev`
3. Build for production: `npm run build` from the root directory

## Technology Stack

- **Frontend**: React, Vite, TailwindCSS, React Router, SimpleBar, Framer Motion
- **Backend**: Express.js, Node.js
- **Styling**: TailwindCSS, CSS Modules
- **Deployment**: Heroku (configured via Procfile)

## Dependencies

See individual `package.json` files for complete dependency information:
- Root level: `/package.json`
- Frontend: `/jadesbrowbeauty-vite/package.json`
- Backend: `/backend/package.json`