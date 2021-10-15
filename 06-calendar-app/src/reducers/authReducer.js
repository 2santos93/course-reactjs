import { types } from '../types/types';

const initialState = {
  checking: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authRegister:
    case types.authLogin:
      return {
        ...state,
        checking: false,
        user: action.payload,
      };
    case types.authChecking:
      return {
        ...state,
        checking: false,
      };
    case types.authLogout:
      return {
        checking: false,
      };
    default:
      return state;
  }
};
