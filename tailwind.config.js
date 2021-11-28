module.exports = {
  purge: [],
  // MC: In production purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sofia': ['sofia-pro']
    },
    extend: {
      gridRow: {
        'span-10': 'span 10 / span 10',
       },
      colors: {
        'red': '#F64040',
        'red-shadow': '#FF7070',
        'grey': '#9E9E9E',
        'light-grey': '#F6F6F6',
        'description-grey': '#EBEBEB'
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(255, 112, 112, 1)',
        DEFAULT: '0 3px 20px 12px rgba(171, 171, 171, 0.15)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
        'focus': '0px 1px 8px 0.1px rgba(255, 112, 112, 1)',
        'category': '0px 1px 25px 0.1px rgba(255, 112, 112, 1)' 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
