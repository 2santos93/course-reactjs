import { request } from '../helpers/requets';
import { methods } from '../types/methods';
import { types } from '../types/types';

export const startLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const loginData = await request(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        methods.POST,
        { email, password }
      );

      const { uid, name, token } = loginData;

      localStorage.setItem('token', token);
      localStorage.setItem('token-time', new Date().getTime());
      dispatch(login({ uid, name }));
    } catch (e) {
      alert(`login error ${e.message}`);
    }
  };
};

export const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const startRegister = (email, password, name) => {
  return async (dispatch) => {
    try {
      const response = await request(
        `${process.env.REACT_APP_API_URL}/auth/register`,
        methods.POST,
        { email, password, name }
      );

      // if (!response.ok) throw new Error(response.error);

      const { uid, name: userName, token } = response;

      localStorage.setItem('token', token);
      localStorage.setItem('token-time', new Date().getTime());

      dispatch(register({ uid, name: userName }));
    } catch (e) {
      alert(`Register error ${e.message}`);
    }
  };
};

export const register = (user) => ({
  type: types.authRegister,
  payload: user,
});

export const checkingStart = () => {
  return async (dispatch) => {
    try {
      const user = await request(
        `${process.env.REACT_APP_API_URL}/auth/renew`,
        methods.GET,
        null,
        true
      );

      if (!user.uid) throw new Error('Not token found');

      const { uid, name, token } = user;

      localStorage.setItem('token', token);
      localStorage.setItem('token-time', new Date().getTime());
      dispatch(login({ uid, name }));
    } catch (e) {
      dispatch(checking());
    }
  };
};

export const checking = () => {
  return {
    type: types.authChecking,
  };
};

export const startLogout = () => {
  return (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('token-time');

    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.authLogout,
});
