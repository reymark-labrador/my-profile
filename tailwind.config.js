module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    letterSpacing: {
      wide: '.1em',
      wider: '1em',
      widest: '1.5em'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
