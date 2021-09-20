import { Navbar } from "../../components/UI/NavBar";
import { mount } from 'enzyme';
import { AuthContext } from "../../auth/AuthContext";
import { AUTH } from "../../types/Auth";
import { MemoryRouter, Router } from "react-router";

// const mockHistoryReplace = jest.fn();

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//     useHistory: () => ({
//       replace: mockHistoryReplace,
//       foo: 123
//     })
//   })
// );

describe("NavBar test", () => {
  const state = {
    dispatch: jest.fn(),
    state: {
      name: 'nelson',
      logged: true
    }
  }

  afterEach(() => {
    jest.clearAllMocks();
  })

  test("should render ok", () => {
    const wrapper = mount(
      <AuthContext.Provider value={state} >
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
  
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('span').text()).toBe(state.state.name);
    
  });
  
  test('should logout successfully and redirect to login', () => {
    
    const historyMock = {
      replace: jest.fn(),
      push: jest.fn(),
      listen: jest.fn(),
      location: {},
      createHref: jest.fn()
    }
    
  const wrapper = mount(
    <AuthContext.Provider value={state} >
      <Router history={historyMock}>
        <Navbar />
      </Router>
    </AuthContext.Provider>

  );
    wrapper.find('button').prop('onClick')(); // same than .simulate('click')
  
    expect(state.dispatch).toHaveBeenCalledWith({type: AUTH.LOGOUT});
    expect(historyMock.replace).toHaveBeenCalledWith('/login');

  });
  
  // test('another way to test the previous test', () => {

  //   const wrapper = mount(
  //     <AuthContext.Provider value={state} >
  //       <MemoryRouter>
  //         <Navbar />
  //       </MemoryRouter>
  //     </AuthContext.Provider>
  //   );

  //   wrapper.find('button').prop('onClick')(); // same than .simulate('click')
  
  //   expect(state.dispatch).toHaveBeenCalledWith({type: AUTH.LOGOUT});
  //   expect(mockHistoryReplace).toHaveBeenCalledWith('/login');

  // });
});
