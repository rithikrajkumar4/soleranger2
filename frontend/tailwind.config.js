/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        darkBlack : '#000000',
        pureWhite : '#FFFFFF',
        darkGray : '#5D5D5D',
      },
      fontFamily :{
        'poppins' : ['Poppins'],
      }
    },
  },
  plugins: [],
}

