module.exports = {
  purge: [],
  // MC: In production purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sofia': ['sofia-pro']
    },
    extend: {
      colors: {
        'red': '#FF3336',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
