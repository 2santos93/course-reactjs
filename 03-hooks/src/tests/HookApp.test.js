import { HookApp } from "../components/HookApp"
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'

describe('HookApp testing', () => {
  test('should render ok', () => {
    const wrapper = shallow(<HookApp />);

    expect(wrapper).toMatchSnapshot();
  })
  
})
