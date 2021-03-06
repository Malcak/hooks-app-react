import React from 'react';
import { act } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/useReducer/TodoApp';
import { defaultTodos } from '../../fixtures/defaultTodos';

describe('tests on the <TodoApp /> component', () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn();

  test('should display the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should add a TODO', () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(defaultTodos[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(defaultTodos[1]);
    });
    expect(wrapper.find('h1').text().trim()).toBe(`TodoApp: (2)`);
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });
  test('should delete a TODO', () => {
    wrapper.find('TodoAdd').prop('handleAddTodo')(defaultTodos[0]);
    wrapper.find('TodoList').prop('handleDelete')(defaultTodos[0].id);
    expect(wrapper.find('h1').text().trim()).toBe(`TodoApp: (0)`);
  });
});
