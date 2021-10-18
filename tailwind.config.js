module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      qs:['Quicksand', 'sans-serif'],
    },
    colors:{
      lightBlue:'#788fc8',
      lightGreen:'#21cdc0',
      darkBlue:'#283b6a',
      textBlue:'#0e204d',
      white:'#fff',
      black:'#000',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
