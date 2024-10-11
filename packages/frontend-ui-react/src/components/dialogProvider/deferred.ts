/**
 * A promise represents a value that is not yet known
 * A deferred represents work that is not yet finished
 */
class Deferred<T = any> {
  promise: Promise<T>;

  reject: (err: any) => void = () => undefined;

  resolve: (arg: T) => void = () => undefined;

  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.reject = reject;
      this.resolve = resolve;
    });
  }
}

export default Deferred;
