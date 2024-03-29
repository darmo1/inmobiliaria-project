/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        purple:'#9C77E5' ,
        purpleLight: '#C1A2F1',
        bannerColor: '#b4a3c5',
        bannerColor2: '#c7b8d5',
        customRed: '#5e0817',
        customRedLight: '#9f6b74'
      },
      gridTemplateColumns: {
        'banner': '70% 30%',
        'services': 'repeat(3, 1fr)',
        'presentationalCol': '1fr 1fr'
      },
      gridTemplateRows: {
        'presentationalRow': '1fr 1fr'
      }
    },
  },
  plugins: [],
}
