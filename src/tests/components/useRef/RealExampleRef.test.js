import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/useRef/RealExampleRef';

describe('tests on the <RealExampleRef /> component', () => {
  let wrapper = shallow(<RealExampleRef />);
  beforeEach(() => {
    wrapper = shallow(<RealExampleRef />);
  });

  test('should display the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should change the status and display <MultipleCustomHooks />', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleCumtomHooks').exists()).toBe(true);
  });
});
