import React from 'react';
import { FormApp } from './components/useEffect/FormApp';
import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook';
import { CounterApp } from './components/useState/CounterApp';
import { CounterWithCustomHook } from './components/useState/CounterWithCustomHook';

export const App = () => {
  return (
    <div>
      <CounterApp />
      <hr />
      <CounterWithCustomHook />
      <hr />
      <FormApp />
      <hr />
      <FormWithCustomHook />
    </div>
  );
};
