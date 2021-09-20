import { AUTH } from "../types/Auth";

export const authReducer = (state = {}, action) => {
  switch(action.type){
    case AUTH.LOGIN:
      return {
        ...action.payload,
        logged: true
      }
    case AUTH.LOGOUT:
      return {
        logged: false,
      }
    default:
      return state;
  }
}