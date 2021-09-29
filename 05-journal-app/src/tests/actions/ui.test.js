import {
  finishLoading,
  removeErrorAction,
  setErrorAction,
  startLoading,
} from "../../actions/ui";
import { types } from "../../Types/types";

describe("ui action test", () => {
  test("should work synchronous actions", () => {
    const setError = setErrorAction();
    const removeError = removeErrorAction();
    const startLoad = startLoading();
    const finishLoad = finishLoading();

    expect(setError).toEqual({ type: types.setUIError, payload: "Form Error" });
    expect(removeError).toEqual({ type: types.removeUIError });
    expect(startLoad).toEqual({ type: types.startLoading});
    expect(finishLoad).toEqual({ type: types.finishLoading});
  });
});
