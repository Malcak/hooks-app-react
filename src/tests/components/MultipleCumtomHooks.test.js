import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCumtomHooks } from '../../components/multipleCustomHooks/MultipleCumtomHooks';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('tests on the <MultipleCustomHooks /> component', () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 0,
      increment: () => {},
    });
  });

  test('should display the component correctly', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCumtomHooks />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should display the information', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Fernando',
          quote: 'Hello World',
        },
      ],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCumtomHooks />);
    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('p').text().trim()).toBe('Hello World');
    expect(wrapper.find('figcaption').text().trim()).toBe('Fernando');
  });
});
