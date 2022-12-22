/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    screens: {
      'md': '728px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1536px',
      '3xl' : '1700px',
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
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
