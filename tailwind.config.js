/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'timeRed': '#E63D31',
        'timeRedHover' : '#D93A2F',
        'blackShade' : '#242629'
      }
    },
  },
  plugins: [],
}
