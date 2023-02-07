/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // I declined to add in the 'purge' code as it is not needed for this project. It is used to remove unused CSS from the production build. It is not needed for this project as it is a small project and I am not using any CSS frameworks. If you are using a CSS framework, you will need to add the 'purge' code to the tailwind.config.js file. See the Tailwind documentation for more information.
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // in this theme object'sans' sets the primary font, in this instance, 'Raleway'. It does this by overriding the default font family.
        'raleway': ['Raleway', 'sans'], 
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
    'lora': ['Lora', 'serif'] // <--  this is the secondary font. It is used in the 'body' class and set outside of the theme object so it can be used in the 'extend' object allowing us to override the default font family.
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
