import { AppRouter } from "../../components/useContext/AppRouter"
import {mount} from 'enzyme';
import '@testing-library/jest-dom';
import { UserContext } from "../../components/useContext/context/UserContext";


describe('AppRouter Test', () => {
  test('should render ok', () => {
    
    const wrapper = mount(
    
      <UserContext.Provider value={{user:{name:"nelson", email:"test@test.com"}, setUser: jest.fn()}}>
        <AppRouter />
      </UserContext.Provider>
    );
    
    expect(wrapper).toMatchSnapshot();
  })
  
})
