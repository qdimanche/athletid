/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'timeRed': '#D93A2F',
        'timeRedHover' : '#c3342a',
        'blackShade' : '#242629'
      }
    },
  },
  plugins: [],
}
