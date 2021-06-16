import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/useContext/HomeScreen';
import { UserContext } from '../../../components/useContext/UserContext';

describe('tests on the <HomeScreen /> component', () => {
  const user = { id: '1234', name: 'Fernando', email: 'fernando@mail.com' };
  const wrapper = mount(
    <UserContext.Provider value={{ user: user }}>
      <HomeScreen />
    </UserContext.Provider>
  );
  test('should display the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
