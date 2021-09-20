import { authReducer } from "../../auth/authReducer"
import { AUTH } from "../../types/Auth"

describe('authReducer test', () => {
  test('should return default state', () => {
    const initialState = {
      name: 'nelson',
      logged: false
    }
    const state = authReducer(initialState, {});

    expect(state).toEqual(initialState);
  })

  test('should login and put the name', () => {

    const payload = {
      name:'nelson',
      logged: true
    }

    const loginAction = {
      type: AUTH.LOGIN,
      payload
    }

    const state = authReducer({}, loginAction);

    expect(state).toEqual(payload);

  })

  test('should logout and delete the name ', () => {

    const logoutAction = {
      type: AUTH.LOGOUT,
    }

    const state = authReducer({}, logoutAction);

    expect(state).toEqual({logged: false});

  })
  
})
