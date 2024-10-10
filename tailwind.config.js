// Uncomment if you want to see the default theme
// const defaultTheme = require('tailwindcss/defaultTheme');
// console.log(defaultTheme);

module.exports = {
  // prettier-ignore
  safelist: [
    // add safe tailwind classes here
  ],
  content: ['./packages/frontend-ui-react/src/components/**/*.tsx', './**/*.stories.{tsx,mdx}'],
  theme: {
    extend: {
      // add custom theming for storybook here
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    require('@essers/frontend-tailwind'),
  ],
};
