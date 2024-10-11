import type { Meta } from '@storybook/react';
import { Button } from '../button';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

const meta: Meta<typeof Popover> = {
  title: 'components/Popover',
  component: Popover,
};

export default meta;

export const Usage = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Open popover</Button>
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <h1 className="heading-1">Popover</h1>
      <p>With the popover you can display content in a floating panel.</p>
    </PopoverContent>
  </Popover>
);
