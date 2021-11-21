const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      'giga': '15rem',
    },
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
      white: colors.white,
      red: colors.red
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
     scale: ['active', 'group-hover'],
    },
  },
  plugins: [],
}