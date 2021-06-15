import { todoReducer } from '../../../components/useReducer/todoReducer';
import { defaultTodos } from '../../fixtures/defaultTodos';

describe('test on the todoReducer', () => {
  test('should return the default state', () => {
    const state = todoReducer(defaultTodos, {});
    expect(state).toEqual(defaultTodos);
  });
  test('should add a TODO', () => {
    const newTodo = { id: 3, desc: 'Learn Nodejs', done: true };
    const state = todoReducer(defaultTodos, {
      type: 'add',
      payload: newTodo,
    });
    expect(state.length).toBe(3);
    expect(state).toEqual([...defaultTodos, newTodo]);
  });
  test('should delete a TODO', () => {
    const state = todoReducer(defaultTodos, { type: 'delete', payload: 2 });
    expect(state.length).toBe(1);
    expect(state).toEqual(defaultTodos.filter((todo) => todo.id !== 2));
  });
  test('should change the status of a TODO', () => {
    const state = todoReducer(defaultTodos, { type: 'toggle', payload: 2 });
    expect(state[1].done).toBe(true);
    expect(state[0]).toEqual(defaultTodos[0]);
  });
});
