import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  // we are wrapping this to make it easier to mock in tests
  // and allow some extendability in the future
  return clsx(...inputs);
}
