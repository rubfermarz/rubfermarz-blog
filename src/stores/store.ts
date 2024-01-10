import { useState } from 'react';

function StoreService<T>(value: T) {
  const [state, setState] = useState<T>(value);

  const set = (newValue: T) => {
    const newState = { ...newValue } as T;
    setState(newState);
  };

  const patch = (newValue: T) => {
    const newState = { ...state, ...newValue };
    setState(newState);
  };

  return { state, set, patch };
}

export default StoreService;
