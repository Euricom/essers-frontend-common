import { createContext, useContext, useState } from 'react';
import { Dialog } from '../dialog';
import { DialogRef } from './dialog-ref';
import type { DialogContextType, DialogProviderProps } from './types';

const DialogContext = createContext<DialogContextType<any, any>>(null as any);

const DialogProvider = ({ children }: DialogProviderProps) => {
  const [dialogRef, setDialogRef] = useState<DialogRef<any, any>>(null as any);

  const context: DialogContextType<any, any> = {
    dialogRef,
    open(templateComponent, dialogOptions, componentOptions) {
      const dialog = new DialogRef(
        templateComponent,
        () => {
          dialogRef?.setResult(null);
          setDialogRef(null as any);
        },
        { ...dialogOptions },
        componentOptions,
      );
      setDialogRef(dialog);
      return dialog;
    },
  };

  const handleClose = (result: any) => {
    dialogRef?.setResult(result);
    setDialogRef(null as any);
  };

  const DialogTemplate = dialogRef?.templateComponent;

  return (
    <DialogContext.Provider value={context}>
      {children}
      <Dialog open={!!dialogRef} onOpenChange={(open) => handleClose(open)}>
        {dialogRef && (
          <DialogTemplate
            {...dialogRef?.componentOptions}
            onApply={handleClose}
            onCancel={() => handleClose(null)}
          />
        )}
      </Dialog>
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return {
    dialogRef: context.dialogRef,
    openDialog: context.open,
  };
};

DialogProvider.displayName = 'DialogProvider';

export { DialogProvider };
export default DialogProvider;
