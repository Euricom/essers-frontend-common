/* eslint-disable @typescript-eslint/no-empty-function */

import { describe, expect, test } from 'vitest';
import { calculatePages } from './usePaginator';

describe('calculatePages', () => {
  test('should calculate correct pages for 1 sibling', () => {
    // below 8 => no dots
    expect(calculatePages(1, 1, 0)).toEqual([1]);
    expect(calculatePages(2, 1, 0)).toEqual([1, 2]);
    expect(calculatePages(3, 1, 0)).toEqual([1, 2, 3]);
    expect(calculatePages(4, 1, 0)).toEqual([1, 2, 3, 4]);
    expect(calculatePages(5, 1, 0)).toEqual([1, 2, 3, 4, 5]);
    expect(calculatePages(6, 1, 0)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(calculatePages(7, 1, 0)).toEqual([1, 2, 3, 4, 5, 6, 7]);

    // 8: 1 dot
    expect(calculatePages(8, 1, 0)).toEqual([1, 2, 3, 4, 5, -1, 8]);
    expect(calculatePages(8, 1, 3)).toEqual([1, 2, 3, 4, 5, -1, 8]);
    expect(calculatePages(8, 1, 4)).toEqual([1, -1, 4, 5, 6, 7, 8]);
    expect(calculatePages(8, 1, 7)).toEqual([1, -1, 4, 5, 6, 7, 8]);

    // 9: up to 2 dots
    expect(calculatePages(9, 1, 0)).toEqual([1, 2, 3, 4, 5, -1, 9]);
    expect(calculatePages(9, 1, 1)).toEqual([1, 2, 3, 4, 5, -1, 9]);
    expect(calculatePages(9, 1, 2)).toEqual([1, 2, 3, 4, 5, -1, 9]);
    expect(calculatePages(9, 1, 3)).toEqual([1, 2, 3, 4, 5, -1, 9]);
    expect(calculatePages(9, 1, 4)).toEqual([1, -1, 4, 5, 6, -1, 9]);
    expect(calculatePages(9, 1, 5)).toEqual([1, -1, 5, 6, 7, 8, 9]);
    expect(calculatePages(9, 1, 6)).toEqual([1, -1, 5, 6, 7, 8, 9]);
    expect(calculatePages(9, 1, 7)).toEqual([1, -1, 5, 6, 7, 8, 9]);
    expect(calculatePages(9, 1, 8)).toEqual([1, -1, 5, 6, 7, 8, 9]);
  });

  test('should calculate correct pages for 2 siblings', () => {
    // below 10 => no dots
    expect(calculatePages(1, 2, 0)).toEqual([1]);
    expect(calculatePages(2, 2, 0)).toEqual([1, 2]);
    expect(calculatePages(3, 2, 0)).toEqual([1, 2, 3]);
    expect(calculatePages(4, 2, 0)).toEqual([1, 2, 3, 4]);
    expect(calculatePages(5, 2, 0)).toEqual([1, 2, 3, 4, 5]);
    expect(calculatePages(6, 2, 0)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(calculatePages(7, 2, 0)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(calculatePages(8, 2, 0)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(calculatePages(9, 2, 0)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    // 10: 1 dot
    expect(calculatePages(10, 2, 0)).toEqual([1, 2, 3, 4, 5, 6, 7, -1, 10]);
    expect(calculatePages(10, 2, 9)).toEqual([1, -1, 4, 5, 6, 7, 8, 9, 10]);

    // 11: up to 2 dots
    expect(calculatePages(11, 2, 0)).toEqual([1, 2, 3, 4, 5, 6, 7, -1, 11]);
    expect(calculatePages(11, 2, 5)).toEqual([1, -1, 4, 5, 6, 7, 8, -1, 11]);
    expect(calculatePages(11, 2, 10)).toEqual([1, -1, 5, 6, 7, 8, 9, 10, 11]);
  });

  test('should calculate correct pages for 0 pages', () => {
    expect(calculatePages(0, 1, 0)).toEqual([1]);
  });
});
