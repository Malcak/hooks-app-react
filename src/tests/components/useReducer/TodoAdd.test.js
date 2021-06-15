import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/useReducer/TodoAdd';

describe('tests on the <TodoAdd /> component', () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test('should display the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should not call the function "handleAddAll"', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).not.toHaveBeenCalled();
  });
  test('should call the function "handleAddAll".', () => {
    const value = 'Learn Nodejs';
    wrapper.find('input').simulate('change', {
      target: {
        name: 'description',
        value,
      },
    });
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalled();
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
