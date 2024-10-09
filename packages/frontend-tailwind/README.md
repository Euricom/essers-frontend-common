# @essers/frontend-tailwind

## Install

```bash
# install package
npm install @essers/frontend-tailwind

# or with pnpm
pnpm install @essers/frontend-tailwind
```

## General Use

```js
// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{html,tsx,ts}'],
  theme: {
    extend: {
      // extend your theme here
    }
  }
  plugins: [require('@essers/frontend-tailwind')],
};
```

## Contribute

```bash
# install dependencies
pnpm install

# build package
pnpm run build
```
