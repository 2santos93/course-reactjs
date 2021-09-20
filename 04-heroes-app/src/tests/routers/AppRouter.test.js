import { mount } from 'enzyme';
import { AuthContext } from "../../auth/AuthContext";
import { AppRouter } from "../../routers/AppRouter";

describe('AppRouter test', () => {
  test('should show the component login because does not login', () => {

    const state = {
      dispatch: jest.fn(),
      state: {logged: false}
    }

    const wrapper = mount(
      <AuthContext.Provider value={state}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper.find('h1').text()).toBe('Login');
  })

  test('should show the main component because is login', () => {

    const state = {
      dispatch: jest.fn(),
      state: {logged: true, name:'nelson'}
    }

    const wrapper = mount(
      <AuthContext.Provider value={state}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper.find('nav').exists()).toBe(true);
  })
  
})
