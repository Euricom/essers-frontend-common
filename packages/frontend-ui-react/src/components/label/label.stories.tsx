import type { Meta } from '@storybook/react';
import { Input } from '../input';
import argTypes from './argTypes';
import { Label } from './label';

const meta: Meta<typeof Label> = {
  title: 'components/Label',
  component: Label,
  argTypes,
};

export default meta;

export const Usage = () => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Picture</Label>
      <Input id="email" type="text" placeholder="Enter your email" />
    </div>
  );
};
