const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fill: {
      current: 'currentColor',
    },
    fill: theme => ({
      'blueGray': theme('colors.blueGray.700'),
    }),
    colors: {
      teal: colors.teal,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      white: colors.white
    },
    extend: {
      transitionProperty: {
        "top": "top",
        'spacing': 'margin, padding',
      },
    },
  },
  variants: {
    extend: {
     transitionProperty: ['hover', 'focus'],
    },
  },
  plugins: [],
}