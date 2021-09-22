import { types } from "../Types/types";

export const setErrorAction = () => ({
  type: types.setUIError,
  payload: 'Form Error'
});

export const removeErrorAction = () => ({
  type: types.removeUIError
});

export const startLoading = () => ({
  type: types.startLoading
});

export const finishLoading = () => ({
  type: types.finishLoading
});