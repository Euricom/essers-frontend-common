import { action } from '@storybook/addon-actions';
import type { Meta } from '@storybook/react';
import { useState } from 'react';
import argTypes from './argTypes';
import Input from './input';

const meta: Meta<typeof Input> = {
  title: 'components/Input',
  component: Input,
  argTypes,
};

export default meta;

export const Default = () => (
  <div className="space-y-3">
    <h3>Default</h3>
    <Input type="email" placeholder="Email" />
  </div>
);

export const Disabled = () => (
  <div className="space-y-3">
    <h3>Disabled</h3>
    <Input type="email" placeholder="Email" disabled />
  </div>
);

export const ReadOnly = () => (
  <div className="space-y-3">
    <h3>Readonly</h3>
    <Input type="email" placeholder="Email" readOnly value="abc" />
  </div>
);

export const Controlled = () => {
  const [name, setName] = useState('peter');
  const [email, setEmail] = useState('peter@euri.com');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    action('onChange')(event);
  };

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    action('onChange')(event);
  };

  return (
    <div>
      <h3>Controlled state change handling</h3>
      <div className="space-y-2">
        <Input
          name="name"
          type="text"
          value={name}
          onChange={onChange}
          onBlur={action('onBlur')}
          // onValueChange={action('onValueChange')}
        />
        <Input
          name="email"
          type="email"
          value={email}
          onChange={onChangeEmail}
          onBlur={action('onBlur')}
          // onValueChange={action('onValueChange')}
        />
      </div>
    </div>
  );
};

export const Uncontrolled = () => {
  return (
    <div>
      <h3>Uncontrolled change handling</h3>
      <div>
        <Input
          type="text"
          onChange={action('onChange')}
          // onValueChange={action('onValueChange')}
          defaultValue="abc"
          onBlur={action('onBlur')}
        />
      </div>
    </div>
  );
};
