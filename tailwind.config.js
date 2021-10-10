module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        purple:'#9C77E5'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
