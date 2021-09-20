import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { LoginScreen } from "../../components/login/LoginScreen";

describe("LoginScreen test", () => {
  const state = {
    dispatch: jest.fn(),
  };

  const history = {
    replace: jest.fn()
  }

  const wrapper = mount(
    <AuthContext.Provider value={state}>
      <LoginScreen history={history} />
    </AuthContext.Provider>
  );

  test("should render ok", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should do login action", () => {
    wrapper.find('button').simulate('click');

    expect(state.dispatch).toHaveBeenCalled();
    expect(history.replace).toHaveBeenCalledWith('/');
  });
});
