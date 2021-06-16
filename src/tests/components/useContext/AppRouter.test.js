import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/useContext/AppRouter';
import { UserContext } from '../../../components/useContext/UserContext';

describe('tests on the <AppRouter /> component', () => {
  const user = { id: '1234', name: 'Fernando', email: 'fernando@mail.com' };
  const wrapper = mount(
    <UserContext.Provider value={{ user: user }}>
      <AppRouter />
    </UserContext.Provider>
  );
  test('should display the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
