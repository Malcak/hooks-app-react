import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/useReducer/TodoListItem';
import { defaultTodos } from '../../fixtures/defaultTodos';

describe('tests on the <TodoListItem /> component', () => {
  const index = 0;
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow(
    <TodoListItem
      todo={defaultTodos[0]}
      index={index}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );
  test('should display the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should call the handleDelete function', () => {
    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(defaultTodos[0].id);
  });
  test('should call the handleToggle function', () => {
    wrapper.find('p').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(defaultTodos[0].id);
  });
  test('should display the paragraph correctly', () => {
    const paragraph = wrapper.find('p').text().trim();
    expect(paragraph).toBe(`${index + 1}. ${defaultTodos[0].desc}`);
  });
  test('should have the class "complete".', () => {
    const todo = defaultTodos[0];
    todo.done = true;
    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        index={index}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );
    expect(wrapper.find('p').hasClass('complete')).toBe(true);
  });
});
