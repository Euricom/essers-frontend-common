import type { StorybookConfig } from '@storybook/react-vite';

//
// Setup Storybook
//
const config: StorybookConfig = {
  stories: [
    '../*.mdx',
    '../packages/frontend-tailwind/*.mdx',
    '../packages/frontend-ui-react/src/**/*.mdx',
    '../packages/frontend-ui-react/src/**/*.stories.tsx',
  ],
  staticDirs: ['./public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // async viteFinal(config, options) {
  //   return {
  //     ...config,
  //     resolve: {
  //       ...config.resolve,
  //       alias: {
  //         ...config.resolve?.alias,
  //       },
  //     },
  //   };
  // },
  docs: {
    autodocs: true,
  },
};

export default config;
