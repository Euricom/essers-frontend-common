import type { Meta } from '@storybook/react';
import { LocaleProvider } from './locale-provider';

const meta = {
  title: 'components/LocaleProvider',
  component: LocaleProvider,
} satisfies Meta<typeof LocaleProvider>;

export default meta;

export const Usage = () => (
  <div>
    {/* LocaleProvider */}
    <div>LocaleProvider</div>
  </div>
);
