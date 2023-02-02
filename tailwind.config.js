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
      color: {
        'primary': '#ffc82c',
        'secondary': 'green-700',
        'tertiary': 'amber-50',
      },
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
