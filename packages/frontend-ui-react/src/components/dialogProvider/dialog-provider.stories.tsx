import { action } from '@storybook/addon-actions';
import type { Meta } from '@storybook/react';
import { Button } from '../button';
import { DialogBody, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../dialog';
import DialogProvider, { useDialog } from './dialog-provider';
import type { DialogContentProps } from './types';

const meta: Meta<typeof DialogProvider> = {
  title: 'components/DialogProvider',
  component: DialogProvider,
};

export default meta;

interface TestProps extends DialogContentProps<string> {
  testProp: boolean;
}

const TestDialog = (props: TestProps) => {
  const { onApply, onCancel } = props;
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you sure?</DialogTitle>
      </DialogHeader>
      <DialogBody>
        <p>
          Are you sure do delete your Profile. This action cannot be undone. This will permanently
          delete your account and remove your data from our servers.
        </p>
      </DialogBody>
      <DialogFooter>
        <Button onClick={() => onApply('ok')}>Remove</Button>
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export const Usage = () => {
  const DialogWrapper = () => {
    const { openDialog } = useDialog();

    const handleDialogOpen = async () => {
      const result = await openDialog(TestDialog).waitForClose();
      action('result')(result);
    };
    return (
      <div className="flex justify-center">
        <Button onClick={handleDialogOpen}>Open Dialog</Button>
      </div>
    );
  };

  return (
    <div className="space-y-3">
      <DialogProvider>
        <DialogWrapper />
      </DialogProvider>
    </div>
  );
};
Usage.parameters = {
  controls: { disable: true },
};
