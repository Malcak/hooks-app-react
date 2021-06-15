import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../components/useReducer/TodoList';
import { defaultTodos } from '../../fixtures/defaultTodos';

describe('tests on the <TodoList /> component', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow(
    <TodoList
      todos={defaultTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );
  test('should display the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('you should have two <TodoListItem />', () => {
    expect(wrapper.find('TodoListItem').length).toBe(defaultTodos.length);
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(
      expect.any(Function)
    );
  });
});
