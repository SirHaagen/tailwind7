/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}'
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat: 'Montserrat'
      },
      flexGrow:{
        '2': 2,
        '3': 3
      },
      height:{
        vh50: '50vh'
      }
    },
  },
  plugins: [],
}
