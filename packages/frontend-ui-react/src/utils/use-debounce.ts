import React, { useState } from 'react';

/**
 * Delay the execution of function or state update with useDebounce.
 * @param value The value that you want to debounce. This can be of any type.
 * @param delay The delay time in milliseconds. After this amount of time, the latest value is used.
 * @returns The debounced value. After the delay time has passed without the value changing, this will be updated to the latest value.
 */
export function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
