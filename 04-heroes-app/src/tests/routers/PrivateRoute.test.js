import { PrivateRoute } from "../../routers/PrivateRoute";
import { mount } from 'enzyme';
import { MemoryRouter } from "../../../node_modules/react-router-dom/cjs/react-router-dom.min";

describe('Private Route Test', () => {
  
  const rest = {
    location:{
      pathname: 'marvel'
    }
  }
  
  test('should render the component ok', () => {

    const setItemMock = jest.spyOn(Storage.prototype, 'setItem');

    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute 
          isAuthenticated={true}
          component={() => <span>Messi</span>}
          {...rest}
        />
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(true);
    expect(setItemMock).toHaveBeenCalledWith('lastPath', rest.location.pathname);

  });

  test('dont show component if does not logged', () => {

    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute 
          isAuthenticated={false}
          component={() => <span>Messi</span>}
          {...rest}
        />
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(false);
  });

});