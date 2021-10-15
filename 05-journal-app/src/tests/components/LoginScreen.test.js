import { mount } from "enzyme";
import { LoginScreen } from "./../../Components/Auth/LoginScreen";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router";
import { act } from "@testing-library/react";

describe("<LoginComponent /> test", () => {
  const uid = "TESTING";
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initState = {
    auth: { uid },
    notes: { notes: [], active: {} },
    ui: { loading: false, errorMsg: null },
  };

  const store = mockStore(initState);

  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <LoginScreen />
      </MemoryRouter>
    </Provider>
  );

  test("should render ok", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should dispatch google login action", () => {

    wrapper.find(".google-btn").prop('onClick')();

    const actions = store.getActions();

    console.log(actions);
  });
});
