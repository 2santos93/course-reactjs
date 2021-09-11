import { UserContext } from '../../components/useContext/context/UserContext';
import { Home } from '../../components/useContext/pages/Home';
import {mount} from 'enzyme';
import {act} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Home page test', () => {
  
  test('should render ok', () => {

    const user = {
      name: 'nelson',
      email: 'test@test.com'
    }

    const wrapper = mount(
      <UserContext.Provider value={{user}} >
          <Home />
      </UserContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();

  })

  test('should set user', () => {

    const setUser = jest.fn();

    const wrapper = mount(
      <UserContext.Provider value={{setUser}} >
          <Home />
      </UserContext.Provider>
    );

    act(() => {
      wrapper.find('button').simulate('click');
    })

    expect(setUser).toHaveBeenCalledWith({id:'1234', name:'nelson'})
  })
    

})
