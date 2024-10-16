import type { Meta } from '@storybook/react';
import { AlertCircle, Terminal } from 'lucide-react';
import { Alert, AlertContainer, AlertDescription, AlertTitle } from './alert';

const meta: Meta<typeof Alert> = {
  title: 'components/Alert',
  component: Alert,
};

export default meta;

export const Usage = () => (
  <div className="space-y-1">
    <Alert title="Error" variant="destructive">
      Your session has expired. Please log in again.
    </Alert>
    <Alert title="Heads up!">
      You can add components and dependencies to your app using the cli.
    </Alert>
  </div>
);

export const Parts = () => (
  <div className="space-y-1">
    <AlertContainer variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </AlertContainer>
    <AlertContainer>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </AlertContainer>
  </div>
);
