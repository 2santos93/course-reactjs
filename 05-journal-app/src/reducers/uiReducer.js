import { types } from "../Types/types";

const initialState = {
  loading: false,
  errorMsg: null
}

export const uiReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.setUIError:
      return {
        ...state,
        errorMsg: action.payload
      }
    
    case types.removeUIError:

      return {
        ...state,
        errorMsg: null
      }

    case types.startLoading: 
    
      return {
        ...state,
        loading: true
      }

    case types.finishLoading: 
    
      return {
        ...state,
        loading: false
      }

    default:
      return state;
  }

}