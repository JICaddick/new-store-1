/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'], // <--   this is the primary font.  
      },
      colors: {
          'amber': '#fffbeb', // <-- this is the primary (background color)
          'green': '#15803d', // <-- this is the secondary (text color)
          'yellow': '#eab308', // <-- this is the tertiary (accent color) 
          'orange' : '#f59e0b', // <-- this is the quaternary (text color)
          'darkorange' : '#ca8a04', // <-- this is the quinary (text color)
        }, 
      
      // borderColor: theme => ({ // defaults to these values - Needed for textStrokeColor. No need to specify all of them.
      //   ...theme('colors'),
      //    DEFAULT: theme('colors.gray.300', 'currentColor'),
      //  }),
    },
  },

  fontFamily: {
    'lora': ['Lora', 'serif'] // <--  this is the secondary font.
  },


  theme: {
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
