/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#00ACC1",     // Modern Purple
        accent: "#4DD0E1",      // Light Violet
         // Deep Indigo
        textPrimary: "#37474F", // Light Gray
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

