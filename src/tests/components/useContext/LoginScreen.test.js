import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/useContext/LoginScreen';
import { UserContext } from '../../../components/useContext/UserContext';

describe('tests on the <LoginScreen /> component', () => {
  const setUser = jest.fn();
  const user = { id: '1234', name: 'Fernando', email: 'fernando@mail.com' };
  const wrapper = mount(
    <UserContext.Provider value={{ user, setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );
  test('should display the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should call the setUser function with the expected argument', () => {
    wrapper.find('button').simulate('click');
    expect(setUser).toHaveBeenCalledWith(user);
  });
});
