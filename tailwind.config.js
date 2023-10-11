/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,html,js}"],
  theme: {
    extend: {
      screens: {
        'big': '1256px'
      },
      fontFamily: {
        asul: ['Asul'],
        playfair: ['Playfair Display'],
        raleway: ['Raleway']
      },
      colors: {
        primary: {
          '100': '#0D253A',
          '200': '#071D31'
        },
        secondary: '#00ACEC'
      }
    },
  },
  plugins: [],
}

