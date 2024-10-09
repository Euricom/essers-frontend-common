const hexToHsl = require('hex-to-hsl');

const toHsl = (hex) => {
  const hslArray = hexToHsl(hex);
  return `hsl(${hslArray[0]}, ${hslArray[1]}%, ${hslArray[2]}%)`;
};

const colors = {
  //
  // required shadCn Colors
  //
  border: toHsl('#e5e5e5'),
  input: toHsl('#e5e5e5'),
  ring: toHsl('#D52429'),
  background: toHsl('#ffffff'),
  foreground: toHsl('#0a0a0a'),
  primary: {
    DEFAULT: toHsl('#D52429'),
    foreground: toHsl('#ffffff'),
  },
  secondary: {
    DEFAULT: toHsl('#f5f5f5'),
    foreground: toHsl('#171717'),
  },
  destructive: {
    DEFAULT: toHsl('#fabd22'),
    foreground: toHsl('#fafafa'),
  },
  muted: {
    DEFAULT: toHsl('#f5f5f5'),
    foreground: toHsl('#737373'),
  },
  accent: {
    DEFAULT: toHsl('#3abef8'),
    foreground: toHsl('#fafafa'),
  },
  popover: {
    DEFAULT: toHsl('#ffffff'),
    foreground: toHsl('#0a0a0a'),
  },
  card: {
    DEFAULT: toHsl('#ffffff'),
    foreground: toHsl('#0a0a0a'),
  },

  //
  // additional colors
  //
};

// colors based on css variables
// const colors = {
//   border: 'hsl(var(--border))',
//   input: 'hsl(var(--input))',
//   ring: 'hsl(var(--ring))',
//   background: 'hsl(var(--background))',
//   foreground: 'hsl(var(--foreground))',
//   primary: {
//     DEFAULT: 'hsl(var(--primary))',
//     foreground: 'hsl(var(--primary-foreground))',
//   },
//   secondary: {
//     DEFAULT: 'hsl(var(--secondary))',
//     foreground: 'hsl(var(--secondary-foreground))',
//   },
//   destructive: {
//     DEFAULT: 'hsl(var(--destructive))',
//     foreground: 'hsl(var(--destructive-foreground))',
//   },
//   muted: {
//     DEFAULT: 'hsl(var(--muted))',
//     foreground: 'hsl(var(--muted-foreground))',
//   },
//   accent: {
//     DEFAULT: 'hsl(var(--accent))',
//     foreground: 'hsl(var(--accent-foreground))',
//   },
//   popover: {
//     DEFAULT: 'hsl(var(--popover))',
//     foreground: 'hsl(var(--popover-foreground))',
//   },
//   card: {
//     DEFAULT: 'hsl(var(--card))',
//     foreground: 'hsl(var(--card-foreground))',
//   },
// };

module.exports = colors;
