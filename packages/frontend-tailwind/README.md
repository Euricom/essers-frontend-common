# @essers/frontend-tailwind

## Install

```bash
# install package
npm install @essers/frontend-tailwind

# or with pnpm (preferable)
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

## Link package to your app

```bash
# from the root of your app folder
pnpm link ~/git/frontend-common/packages/frontend-tailwind 
```

## Contribute

Clone the following repo and follow the contribution guidelines.

```bash
git clone https://github.essers.com/H-Essers/frontend-common
```

