import { useEffect, useRef } from 'react';

const usePrevious = <T extends unknown>(value: T): T | undefined => {
  // Container
  const ref = useRef<T>();

  // Whenever the value changes, store the new one in the ref.
  useEffect(() => {
    ref.current = value;
  }, [value]);

  // Return previous value (before the useEffect)
  return ref.current;
};

export default usePrevious;
