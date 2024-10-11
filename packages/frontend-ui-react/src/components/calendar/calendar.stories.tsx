import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Calendar } from './calendar';

const meta: Meta<typeof Calendar> = {
  title: 'components/Calendar',
  component: Calendar,
};

export default meta;

export const Usage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div>
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
    </div>
  );
};
