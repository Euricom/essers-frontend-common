const plugin = require('tailwindcss/plugin');
const essersColors = require('./colors');
const colors = require('tailwindcss/colors');
// const variables = require('./variables');

const pluginFn = ({ addComponents, theme }) => {
  // add CSS variables
  // addBase(variables);

  // add custom components (css classes)
  addComponents({
    '.heading-1': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold') },
    '.heading-2': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.bold') },
    '.heading-3': { fontSize: theme('fontSize.lg'), fontWeight: theme('fontWeight.bold') },
    '.heading-4': { fontSize: theme('fontSize.md'), fontWeight: theme('fontWeight.bold') },
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
    fontFamily: {
      sans: ['Segoe UI', 'SegoeUI', 'Helvetica Neue', 'Helvetica', ' Arial', 'sans-serif'],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    extend: {
      // extensions needed for ShadCn components
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        progress: {
          '0%': { transform: ' translateX(0) scaleX(0)' },
          '40%': { transform: 'translateX(0) scaleX(0.4)' },
          '100%': { transform: 'translateX(100%) scaleX(0.5)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        progress: 'progress 1s infinite linear',
      },
      transformOrigin: {
        'left-right': '0% 50%',
      },
    },
  },
});
