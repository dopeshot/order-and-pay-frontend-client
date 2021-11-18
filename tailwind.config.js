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
        'red': '#F64040',
        'red-shadow': '#FF7070',
        'grey': '#9E9E9E',
        'light-grey': '#F6F6F6',
        'description-grey': '#EBEBEB'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
