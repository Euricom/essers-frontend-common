import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { action } from '@storybook/addon-actions';
import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { z } from 'zod';
import { Button } from '../button';
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

export const Labels = () => (
  <div>
    <p className="mb-2">An Input field can have a (stacked) label</p>
    <div className="prose space-y-3">
      <h3>No label</h3>
      <Input type="email" value="abc" />
      <Input type="email" value="abc" />
      <div className="flex gap-2">
        <Input type="email" value="abc" />
        <Input type="email" value="abc" />
      </div>

      <h3>With label</h3>
      <Input label="Label" type="email" value="abc" />
      <div className="flex gap-1">
        <Input label="Label" type="email" value="abc" />
        <Input label="Label" type="email" value="abc" />
      </div>
    </div>
  </div>
);

export const Description = () => (
  <div className="space-y-3 p-3">
    <h3>Optional description</h3>
    <Input
      label="Username"
      type="text"
      defaultValue="essers"
      description="This is your public display name."
    />
  </div>
);

export const Invalid = () => (
  <div className="space-y-3 p-3">
    <h3>Input fields with error message</h3>
    <Input
      label="Label"
      type="email"
      defaultValue="peter@gmail.com"
      error="This field is required"
    />
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
      <h3>Controlled state change handling (external state</h3>
      <div className="space-y-2">
        <Input
          name="name"
          type="text"
          value={name}
          onChange={onChange}
          onBlur={action('onBlur')}
          onValueChange={action('onValueChange')}
        />
        <Input
          name="email"
          type="email"
          value={email}
          onChange={onChangeEmail}
          onBlur={action('onBlur')}
          onValueChange={action('onValueChange')}
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
          onValueChange={action('onValueChange')}
          defaultValue="abc"
          onBlur={action('onBlur')}
        />
      </div>
    </div>
  );
};

const schema = z.object({
  email: z.string().email(),
  message: z.string().min(10).max(20),
});

export const FormIntegration = () => {
  const [form, fields] = useForm({
    onSubmit: (event) => {
      const formData = new FormData(event.currentTarget);
      action('onSubmit')(Object.fromEntries(formData));
      // to prevent the default form submission behavior (POST request)
      event.preventDefault();
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
  });

  return (
    <form id={form.id} onSubmit={form.onSubmit}>
      <div>
        <Input label="Email" type="text" name="email" error={fields.email.errors} />
      </div>
      <div>
        <Input label="Message" type="text" name="message" error={fields.message.errors} />
      </div>
      <Button className="mt-2" type="submit" form={form.id}>
        Submit
      </Button>
    </form>
  );
};
