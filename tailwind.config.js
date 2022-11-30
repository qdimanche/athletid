/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'md': '728px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1700px',
    },
    extend: {
      colors: {
        'timeRed': '#E63D31',
        'timeRedHover' : '#D93A2F',
        'blackShade' : '#242629',
        'almostBlack' : '#25282B'
      }
    },
  },
  plugins: [],
}
