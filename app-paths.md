# Paths to App.jsx from Project Files

## From frontend/src/components

### Gallery Components
- From ImageGallery.jsx: `../../App.jsx`
- From Image.jsx: `../../App.jsx`
- From Gallery.jsx: `../../App.jsx`
- From ImageModal.jsx: `../../App.jsx`

### Service Components
- From Services.jsx: `../../App.jsx`
- From ServiceCard.jsx: `../../App.jsx`

### Home Component
- From Home.jsx: `../../App.jsx`

### Footer Component
- From Footer.jsx: `../../App.jsx`

### Booking Component
- From BookingForm.jsx: `../../App.jsx`

### About Component
- From About.jsx: `../../App.jsx`

## From frontend/src

- From main.jsx: `./App.jsx`
- From index.css: `./App.jsx`

## From frontend/src/utils

- From helpers.js: `../App.jsx`

## From frontend/src/services

- From api.js: `../App.jsx`

## From frontend (root)

- From vite.config.js: `./src/App.jsx`
- From root files: `./frontend/src/App.jsx`

## From backend

- From server.js: `../frontend/src/App.jsx`
- From controllers: `../../frontend/src/App.jsx`

## Import Examples

```javascript
// Relative import example from a component
import App from '../../App.jsx';

// Alias import example if using path aliases
import App from '@/App.jsx';
```

# Paths to Project Files from App.jsx

## To frontend/src/components

### Gallery Components
- To ImageGallery.jsx: `./components/Gallery/ImageGallery.jsx`
- To Image.jsx: `./components/Gallery/Image.jsx`
- To Gallery.jsx: `./components/Gallery/Gallery.jsx`
- To ImageModal.jsx: `./components/Gallery/ImageModal.jsx`
- To Image.css: `./components/Gallery/Image.css`
- To ImageGallery.css: `./components/Gallery/ImageGallery.css`
- To Carousel.css: `./components/Gallery/Carousel.css`

### Service Components
- To Services.jsx: `./components/Services/Services.jsx`
- To ServiceCard.jsx: `./components/Services/ServiceCard.jsx`
- To Services.css: `./components/Services/Services.css`

### Home Component
- To Home.jsx: `./components/Home/Home.jsx`
- To Home.module.css: `./components/Home/Home.module.css`

### Footer Component
- To Footer.jsx: `./components/Footer/Footer.jsx`
- To Footer.module.css: `./components/Footer/Footer.module.css`

### Booking Component
- To BookingForm.jsx: `./components/Booking/BookingForm.jsx`
- To Booking.module.css: `./components/Booking/Booking.module.css`

### About Component
- To About.jsx: `./components/About/About.jsx`
- To About.css: `./components/About/About.css`

## To frontend/src files

- To main.jsx: `./main.jsx`
- To index.css: `./index.css`

## To frontend/src/utils

- To helpers.js: `./utils/helpers.js`

## To frontend/src/services

- To api.js: `./services/api.js`

## To frontend root

- To vite.config.js: `../vite.config.js`
- To package.json: `../package.json`
- To eslint.config.js: `../eslint.config.js`
- To index.html: `../index.html`
- To README.md: `../README.md`

## To backend files

- To server.js: `../../backend/server.js`
- To controllers: `../../backend/controllers/[controller].js`

## Import Examples

```javascript
// Relative import examples from App.jsx
import ImageGallery from './components/Gallery/ImageGallery.jsx';
import { formatDate } from './utils/helpers.js';
import api from './services/api.js';

// If using path aliases (from vite.config.js)
import ImageGallery from '@components/Gallery/ImageGallery.jsx';
import { formatDate } from '@/utils/helpers.js';
```

# Bidirectional Path Reference Guide

Use this guide for quick reference when importing between files.

## From App.jsx → Component
```javascript
import Component from './components/Category/Component.jsx';
```

## From Component → App.jsx
```javascript
import App from '../../App.jsx';
```
