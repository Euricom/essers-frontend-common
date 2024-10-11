import type { DialogRef } from './dialog-ref';

export interface DialogContentProps<T = any> {
  /**
   * The title for the Dialog
   */
  title: React.ReactNode;
  /**
   * The body for the Dialog
   */
  body?: React.ReactNode;
  /**
   * Function that should be called when the DialogContent has a result.
   */
  onApply: (data: T) => void;
  /**
   * Function that should be called when the DialogContent has no result.
   */
  onCancel: () => void;
}

export type DialogProps = {
  title: string;
  description?: string;
};

export type OpenDialogFunc<T, K> = (
  templateComponent: React.ComponentType<K & DialogContentProps<T>>,
  dialogOptions?: Partial<DialogProps>,
  componentOptions?: K,
) => DialogRef<T, K>;

export interface DialogProviderProps {
  /**
   * The content of the dialogProvider
   */
  children?: React.ReactNode;
}

export type DialogContextType<T, K> = {
  dialogRef: DialogRef<T, K>;
  open: OpenDialogFunc<T, K>;
};
