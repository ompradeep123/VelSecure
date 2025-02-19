/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        purple: {
          400: '#c084fc',
        },
        red: {
          400: '#f87171',
        },
        green: {
          400: '#4ade80',
        },
        orange: {
          400: '#fb923c',
        },
        teal: {
          400: '#2dd4bf',
        },
      },
    },
  },
  plugins: [],
};