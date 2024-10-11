import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  // we are wrapping this to make it easier to mock in tests
  // and allow some extendability in the future
  return twMerge(clsx(...inputs));
}
