import { Button } from '../button';
import {
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../dialog';
import { type DialogContentProps, useDialog } from '../dialogProvider';
import { useTranslation } from '../localeProvider/locale-context';

const translation = {
  en: {
    cancel: 'Cancel',
    ok: 'Ok',
  },
  nl: {
    cancel: 'Afbreken',
    ok: 'Toepassen',
  },
} as Record<string, Record<string, string>>;

type ConfirmDialogProps = DialogContentProps<boolean> & {
  content?: string;
  description?: string;
};

const ConfirmDialog = ({ onApply, onCancel, title, description, content }: ConfirmDialogProps) => {
  const { t } = useTranslation(translation);
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title ?? t('Are you sure?')}</DialogTitle>
        {!!description && <DialogDescription>{description}</DialogDescription>}
      </DialogHeader>
      {!!content && <DialogBody>{content}</DialogBody>}
      <DialogFooter>
        <Button onClick={() => onApply(true)}>{t('Confirm')}</Button>
        <Button variant="outline" onClick={onCancel}>
          {t('Cancel')}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export const useConfirmDialog = () => {
  const { openDialog } = useDialog();
  const openConfirmDialog = (props?: Omit<ConfirmDialogProps, 'onApply' | 'onCancel'>) => {
    return openDialog(ConfirmDialog as any, {}, props);
  };
  return {
    openConfirmDialog,
  };
};
