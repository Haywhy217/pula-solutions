// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-gradient': 'linear-gradient(0deg, #000000 100%, #263c28 80%, #000000 0%, #263c28 22%)',
        'hero-pattern': "url('/src/assets/Images/image.png')",
      }),

      gradients: { 'custom-gradient': 'linear-gradient(0deg, #000000 100%, #263c28 80%, #000000 0%, #263c28 22%)', },


      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif, inter, livvic'],
      },
      colors: {
        customGray: '#9ca3af',
        footColor:'#98A2B3',
        headingColor:'#1f2937',
        logoText : '#344054',
      },
      backgroundColor: {
        primary: '#111827',
        pressColor: '#F3f4f6',
        secondary: '#f9fafb',
      },
     
    },
  },
  plugins: [],
}


