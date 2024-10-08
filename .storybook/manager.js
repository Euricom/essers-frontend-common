import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Essers Design System - v1.0.0',
    brandTarget: '_self',
    fontBase: 'sans-serif',
  }),
});
