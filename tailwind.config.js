/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./coming-soon.html",
    "./script.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF5E00',
        'secondary': '#ECE1C2',
        'dark-bg': '#0B0B0B',
        'dark-bg-2': '#141414',
        'dark-bg-3': '#1F1F1F',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B0B0B0',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

