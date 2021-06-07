import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './CounterApp.css';

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <h1>Counter with hook: {counter}</h1>
      <br />
      <button onClick={increment} className="btn btn-primary">
        +1
      </button>
      <button onClick={decrement} className="btn btn-primary">
        -1
      </button>
      <button onClick={reset} className="btn btn-primary">
        Reset
      </button>
    </>
  );
};
