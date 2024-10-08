// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from 'react';
import type { Preview } from '@storybook/react';
import { LocaleProvider } from '@essers/frontend-ui';

import './styles.css';

const preview: Preview = {
  decorators: [
    (Story, context) => {
      return (
        <LocaleProvider locale={context.globals.locale}>
          {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
          <Story />
        </LocaleProvider>
      );
    },
  ],
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'nl', title: 'Nederlands' },
        ],
      },
    },
  },
  parameters: {
    // controls: {
    //   matchers: {
    //     color: /(background|color)$/i,
    //     date: /Date$/,
    //   },
    // },
    // options: {
    //   storySort: {
    //     method: "alphabetical",
    //     order: ["Home", ["*", "labs"]],
    //   },
    // },
    // backgrounds: {
    //   default: "light",
    //   values: [
    //     {
    //       name: "light",
    //       value: "#ffffff",
    //     },
    //     {
    //       name: "dark",
    //       value: "#003c75",
    //     },
    //   ],
    // },
  },
};

export default preview;
