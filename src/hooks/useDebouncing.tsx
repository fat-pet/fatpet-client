import { Dispatch, SetStateAction, useEffect } from 'react';

interface Props<T> {
  callback: () => void;
  delay: number;
  dependency: T;
  setState: (data: boolean | undefined | 'error') => void;
}

export default function useDebouncing<T>({
  callback,
  delay,
  dependency,
  setState,
}: Props<T>) {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, delay);
    return () => {
      clearTimeout(timer);
      setState(undefined);
    };
  }, [dependency]);
}
