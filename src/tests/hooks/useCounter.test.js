import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('test on the useCounter hook', () => {
  test('should return the default values', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(0);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });
  test('the value of the counter should be the one sent by parameters', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.counter).toBe(10);
  });
  test('should increment the counter value by 1', () => {
    const value = 0;
    const { result } = renderHook(() => useCounter(value));
    const { increment } = result.current;
    act(() => {
      increment();
    });
    const { counter } = result.current;
    expect(counter).toBe(value + 1);
  });
  test('should decrement the counter value by 1', () => {
    const value = 0;
    const { result } = renderHook(() => useCounter(value));
    const { decrement } = result.current;
    act(() => {
      decrement();
    });
    const { counter } = result.current;
    expect(counter).toBe(value - 1);
  });
  test('should reset the counter value', () => {
    const value = 0;
    const { result } = renderHook(() => useCounter(value));
    const { reset, increment } = result.current;
    act(() => {
      increment();
      reset();
    });
    const { counter } = result.current;
    expect(counter).toBe(value);
  });
});
