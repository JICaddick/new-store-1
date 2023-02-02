/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Lora': ['Lora', 'serif']
      },
      colors: {
        'primary': {
          'yellow': '#ffc82c'},
        'secondary': {
          'green': '#00b140'},
        'tertiary': {
          'white': '#ffffff'},
        'quaternary': {
          'black': '#000000'},
        'quinary': {
          'gray': '#f5f5f5'},
      },
      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
       }),
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    },
  },
  variants: {
    // Some useful comment
  },
  theme: { // defaults to these values
    textFillColor: theme => theme('borderColor'),
    textStrokeColor: theme => theme('borderColor'),
    textStrokeWidth: theme => theme('borderWidth'),
    paintOrder: {
      'fsm': { paintOrder: 'fill stroke markers' },
      'fms': { paintOrder: 'fill markers stroke' },
      'sfm': { paintOrder: 'stroke fill markers' },
      'smf': { paintOrder: 'stroke markers fill' },
      'mfs': { paintOrder: 'markers fill stroke' },
      'msf': { paintOrder: 'markers stroke fill' },
    },
  },

  plugins: [
    require('tailwindcss-text-fill-stroke'), // no options to configure
  ],
}
