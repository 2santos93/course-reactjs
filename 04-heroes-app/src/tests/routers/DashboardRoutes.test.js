import { DashboardRoutes } from "../../routers/DashboardRoutes";
import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { MemoryRouter } from "../../../node_modules/react-router-dom/cjs/react-router-dom.min";

describe("DashboardRoutes test", () => {
  
  test("should render ok", () => {

    const state = {
      dispatch: jest.fn(),
      state: {
        name: "nelson",
        logged: true,
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={state}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
