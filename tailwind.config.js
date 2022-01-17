module.exports = {
  purge: [],
  // MC: In production purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px'
      }
    },
    fontFamily: {
      'sofia': ['sofia-pro']
    },
    extend: {
      gridRow: {
        'span-8': 'span 8 / span 8',
      },
      colors: {
        'red': '#F64040',
        'red-shadow': '#FF7070',
        'grey': '#9E9E9E',
        'light-grey': '#F6F6F6',
        'description-grey': '#EBEBEB',
        'dividergrey': '#DCDCDC',
        'chevron': '#9AA5B1',
        'menu-bg': '#1F1F23',
        'error-bg': '#FFEDED',
        'error-text': '#EF4E4E'
      },
      boxShadow: {
        'focus': '0px 1px 8px 0.1px rgba(255, 112, 112, 1)',
        'category': '0px 1px 25px 0.1px rgba(255, 112, 112, 1)',
        'whiteBox': '0px 5px 230px 2px rgba(rgba(128, 128, 128, 0.16))'
      },
      flex: {
        '2/4': '1 1 50%'
      },
      backgroundOpacity: {
        '62': '0.62'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
