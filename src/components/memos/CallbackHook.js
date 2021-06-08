import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    (factor) => {
      setCounter((c) => c + factor);
    },
    [setCounter]
  );

  useEffect(() => {
    console.log('I am being called again');
  }, [increment]);

  return (
    <div>
      <h1>useCallback Hook</h1>
      <h3>Counter: {counter}</h3>
      <br />
      <ShowIncrement increment={increment} />
    </div>
  );
};
