// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif, inter'],
      },
      colors: {
        customGray: '#9ca3af',
        footColor:'#98A2B3',
      },
      backgroundColor: {
        primary: '#111827',
      },
    },
  },
  plugins: [],
}


