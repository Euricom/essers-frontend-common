import type { Meta } from '@storybook/react';
import Button from './button';
import { ArrowRight, Star } from 'lucide-react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
};

export default meta;

export const Usage = () => (
  <div className="space-y-3">
    <h3 className="heading3">Button variants</h3>
    <div className="space-x-3">
      <Button variant="default" onClick={action('onClick')}>
        Default
      </Button>
      <Button variant="secondary" onClick={action('onClick')}>
        Secondary
      </Button>
      <Button variant="destructive" onClick={action('onClick')}>
        Destructive
      </Button>
      <Button variant="ghost" onClick={action('onClick')}>
        Ghost
      </Button>
      <Button variant="link" onClick={action('onClick')}>
        Link
      </Button>
      <Button variant="outline" onClick={action('onClick')}>
        Outline
      </Button>
    </div>
    <div className="space-x-3">
      <Button variant="default" disabled>
        Default
      </Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="destructive" disabled>
        Destructive
      </Button>
      <Button variant="ghost" disabled>
        Ghost
      </Button>
      <Button variant="link" disabled>
        Link
      </Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
    </div>
  </div>
);
Usage.parameters = {
  controls: { disable: true },
};

export const WithIcons = () => (
  <div className="space-y-3">
    <h3 className="heading3">Default</h3>
    <div>
      <div className="space-x-3">
        <Button startContent={<Star size="14" role="presentation" />}>Before</Button>
        <Button endContent={<ArrowRight size="14" role="presentation" />}>After</Button>
        <Button
          startContent={<Star size="14" role="presentation" />}
          endContent={<ArrowRight size="14" role="presentation" />}
        >
          Both
        </Button>
        <Button size="icon" startContent={<Star size="14" role="presentation" />} />
      </div>
    </div>
    <h3 className="heading3">Disabled</h3>
    <div>
      <div className="space-x-3">
        <Button disabled startContent={<Star size="14" role="presentation" />}>
          Before
        </Button>
        <Button disabled endContent={<ArrowRight size="14" role="presentation" />}>
          After
        </Button>
        <Button
          disabled
          startContent={<Star size="14" role="presentation" />}
          endContent={<ArrowRight size="14" role="presentation" />}
        >
          Both
        </Button>
        <Button disabled size="icon" startContent={<Star size="14" role="presentation" />} />
      </div>
    </div>
  </div>
);

export const Sizes = () => (
  <div className="space-x-3">
    <Button>Default</Button>
    <Button size="sm">Small</Button>
  </div>
);

export const Block = () => (
  <div className="space-y-3">
    <Button>Default</Button>
    <Button block>Block</Button>
  </div>
);

export const Loading = () => (
  <div className="space-x-3">
    <Button>Not Loading</Button>
    <Button loading>Loading</Button>
  </div>
);

export const CustomChild = () => (
  <div>
    <p>The element is rendered as `a` tag</p>
    <Button asChild className="m-2">
      {/* biome-ignore lint/a11y/useValidAnchor: <demo> */}
      <a href="#" className="underline">
        <span>Click me</span>
      </a>
    </Button>
  </div>
);
