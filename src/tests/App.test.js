import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';

describe('tests on the <App /> component', () => {
  test('should display the component correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
