import React from 'react';
import { CallbackHook } from './components/memos/CallbackHook';
import { MemoHook } from './components/memos/MemoHook';
import { Memorize } from './components/memos/Memorize';
import { MultipleCumtomHooks } from './components/multipleCustomHooks/MultipleCumtomHooks';
import { MainApp } from './components/useContext/MainApp';
import { FormApp } from './components/useEffect/FormApp';
import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook';
import { LayoutApp } from './components/useLayoutEffect/LayoutApp';
import { TodoApp } from './components/useReducer/TodoApp';
import { FocusApp } from './components/useRef/FocusApp';
import { RealExampleRef } from './components/useRef/RealExampleRef';
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
      <hr />
      <MultipleCumtomHooks />
      <hr />
      <FocusApp />
      <hr />
      <RealExampleRef />
      <hr />
      <LayoutApp />
      <hr />
      <Memorize />
      <hr />
      <MemoHook />
      <hr />
      <CallbackHook />
      <hr />
      <TodoApp />
      <hr />
      <MainApp />
    </div>
  );
};
