const plugin = require('tailwindcss/plugin');
const colors = require('./colors');
const variables = require('./variables');

const pluginFn = ({ addBase, addComponents, addUtilities, config, postcss }) => {
  addComponents(variables);
  // no need to include components and utilities here
  // this files is used by the root tailwind.config.js & storybook
};

module.exports = plugin(pluginFn, {
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
    },
  },
});
