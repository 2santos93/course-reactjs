import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { types } from '../../Types/types';
import { login, logout } from './../../actions/auth';

describe('auth actions test', () => {
  const uid = "TESTING";
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);  
  const initState = {
    auth: { uid },
    notes: { notes: [], active: {} },
  };

  const store = mockStore(initState);
  
  test('should execute login and logout action', () => {
    store.dispatch(login('123', 'ncaicedo'));
    store.dispatch(logout());

    const actions = store.getActions();

    expect(actions[0].type).toBe(types.login);
    expect(actions[1].type).toBe(types.logout);
    
  })
})
