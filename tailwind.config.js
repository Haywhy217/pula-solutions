// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/assets/Images/image.png')",
        'hero-image': "url('/src/assets/Images/image1.png')",
      }),

      letterSpacing: {
        '-2': '-0.02em', 
      },


      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif, inter, livvic raleway'],
      },
      colors: {
        customGray: '#9ca3af',
        footColor:'#98A2B3',
        headingColor:'#1f2937',
        logoText : '#344054',
        active : '#37B5DE',
      },
      backgroundColor: {
        primary: '#111827',
        pressColor: '#F3f4f6',
        secondary: '#f9fafb',
        overview: '#729874'
      },
     
    },
  },
  plugins: [],
}


