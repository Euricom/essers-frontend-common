import { action } from '@storybook/addon-actions';
import { Button } from '../button';
import { DialogProvider } from '../dialogProvider';
import { useConfirmDialog } from './confirm-dialog';

const meta = {
  title: 'hooks/useConfirmDialog',
};

export default meta;

const WrapperComponent = () => {
  const { openConfirmDialog } = useConfirmDialog();

  const handleClick = async () => {
    const isConfirmed = await openConfirmDialog({
      title: 'Confirmation',
      content: 'Are you sure to delete the product?',
    });

    action('isConfirmed')(isConfirmed);
  };

  return <Button onClick={handleClick}>Open</Button>;
};

export const Usage = () => {
  return (
    <DialogProvider>
      <WrapperComponent />
    </DialogProvider>
  );
};
