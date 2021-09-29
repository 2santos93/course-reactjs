import { types } from '../../Types/types';
import { authReducer } from './../../reducers/authReducer';

describe('authReducer Test', () => {

  test('should return default state', () => {
    const defaultState = {
      foo: 'bar'
    }

    const newState = authReducer(defaultState, {});

    expect(newState).toEqual(defaultState);
  })

  test('should return a login state', () => {

    const payload = {
      type: types.login,
      payload: {
        uid: '123',
        name: 'nelson'
      }
    }

    const loginState = authReducer({}, payload);

    expect(loginState).toEqual(payload.payload);

  })

  test('should return a logout state', () => {

    const payload = {
      type: types.logout,
    }

    const logoutState = authReducer({}, payload);

    expect(logoutState).toEqual({});

  })
  
})
