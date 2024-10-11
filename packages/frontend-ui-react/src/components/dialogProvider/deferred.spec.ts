import { describe, test, expect } from 'vitest';

import Deferred from './deferred';

describe('deferred', () => {
  test('resolve', () => {
    const deferred = new Deferred();
    deferred.resolve('1234');

    return deferred.promise;
  });

  test('reject', () => {
    expect.assertions(1);
    const deferred = new Deferred();
    deferred.reject(new Error('bad'));

    return deferred.promise.catch((err) => {
      expect(err.message).toBe('bad');
    });
  });
});
