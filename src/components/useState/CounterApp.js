import React, { useState } from 'react';
import './CounterApp.css';

export const CounterApp = () => {
  const [counters, setCounters] = useState({
    counterOne: 0,
    counterTwo: 0,
  });

  const { counterOne, counterTwo } = counters;

  const handleAdd = () => {
    setCounters({ ...counters, counterOne: counterOne + 1 });
  };

  return (
    <>
      <h1>Counter App</h1>
      <br />
      <h2>counterOne: {counterOne}</h2>
      <h2>counterTwo: {counterTwo}</h2>
      <br />
      <button className="btn btn-primary" onClick={handleAdd}>
        CounterOne + 1
      </button>
    </>
  );
};
