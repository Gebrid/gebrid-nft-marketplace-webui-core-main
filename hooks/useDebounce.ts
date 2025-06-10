import { useEffect, useState } from 'react';

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const sub = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 500);

    return () => clearTimeout(sub);
  }, [value]);

  return debouncedValue;
}

export default useDebounce;
