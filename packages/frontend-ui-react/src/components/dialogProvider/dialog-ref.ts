import Deferred from '../../utils/deferred';
import type { DialogContentProps, DialogProps } from './types';

export class DialogRef<T, K> {
  modalOptions: Partial<DialogProps>;

  componentOptions?: K;

  templateComponent: React.ComponentType<K & DialogContentProps<T>>;

  deferred: Deferred<T>;

  closeCallback: () => void;

  constructor(
    templateComponent: React.ComponentType<K & DialogContentProps<T>>,
    closeCallback: () => void,
    modalOptions: Partial<DialogProps>,
    componentOptions?: K,
  ) {
    this.modalOptions = modalOptions;
    this.componentOptions = componentOptions;
    this.templateComponent = templateComponent;
    this.deferred = new Deferred();
    this.closeCallback = closeCallback;
  }

  setResult(result: T) {
    this.deferred.resolve(result);
  }

  waitForClose(): Promise<T> {
    return this.deferred.promise;
  }

  close() {
    if (this.closeCallback) {
      this.closeCallback();
    }
  }
}
