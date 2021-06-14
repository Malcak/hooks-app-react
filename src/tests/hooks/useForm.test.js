import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('test on the useForm hook', () => {
  const initialForm = {
    name: 'Fernando',
    email: 'fernando.herrera@gmail.com',
  };

  test('should return the default form', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, reset] = result.current;
    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });
  test('you should change the "email" value of the form', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: 'email',
          value: 'fernando@gmail.com',
        },
      });
    });
    const [formValues] = result.current;
    expect(formValues).toEqual({ ...initialForm, email: 'fernando@gmail.com' });
  });
  test('should reset the form', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Manuel',
        },
      });
      reset();
    });
    const [formValues] = result.current;
    expect(formValues).toEqual(initialForm);
  });
});
