import { useState, useEffect } from 'react';

/**
 * A custom hook that debounces a value by a specified delay.
 *
 * @template T - The type of the value to be debounced.
 * @param {T} value - The value that needs to be debounced.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns {T} - The debounced value.
 */
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
