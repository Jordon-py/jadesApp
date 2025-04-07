// path to app.jsx from that file: ./src/App.jsx
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'blue-silver': '#a2b9d4',
        'blue-silver-light': '#c7d2fe',
        'blue-silver-dark': '#6b72ad',
        'text-light': '#ffffff',
        'text-muted': '#e0e0e0',
        'bg-dark': 'rgba(0, 0, 0, 0.4)',
        'bg-darker': 'rgba(0, 0, 0, 0.6)',
        'bg-lighter': 'rgba(0, 0, 0, 0.2)',
      },
      boxShadow: {
        'soft': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'medium': '0 6px 16px rgba(0, 0, 0, 0.3)',
        'strong': '0 8px 24px rgba(0, 0, 0, 0.4)',
      },
      borderRadius: {
        'sm': '8px',
        'md': '16px',
        'lg': '30px',
      },
      fontFamily: {
        'main': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}