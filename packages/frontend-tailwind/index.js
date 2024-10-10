const plugin = require('tailwindcss/plugin');
const essersColors = require('./colors');
const colors = require('tailwindcss/colors');
// const variables = require('./variables');

const pluginFn = ({ addComponents, theme }) => {
  // add CSS variables
  // addBase(variables);

  // add custom components (css classes)
  addComponents({
    '.heading1': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold') },
    '.heading2': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.bold') },
    '.heading3': { fontSize: theme('fontSize.lg'), fontWeight: theme('fontWeight.bold') },
    '.heading4': { fontSize: theme('fontSize.md'), fontWeight: theme('fontWeight.bold') },
  });
};

module.exports = plugin(pluginFn, {
  theme: {
    // customized colors
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      // specify which colors you want to add
      gray: colors.gray,
      blue: colors.blue,
      // or add all tailwind colors
      // ...colors,
      ...essersColors,
    },
    extend: {},
    // sample customized border radius
    // borderRadius: {
    //   none: '0px',
    //   DEFAULT: 'calc(1rem - 2px)',
    //   lg: '1rem',
    //   md: 'calc(1rem - 2px)',
    //   sm: 'calc(1rem - 4px)',
    //   full: '9999px',
    // },
  },
});
