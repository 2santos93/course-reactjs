import { RefExample } from "../../../components/useRef/RefExample";
import {shallow} from 'enzyme';
import { ForTest1 } from "../../../components/useRef/ForTest1";

describe('RefExample test', () => {
  const wrapper = shallow(<ForTest1 />);
  
  test('should render ok', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('ForTest2').exists()).toBe(true);
  });

  test('should show text', () => {
    wrapper.find('button').simulate('click');

    expect(wrapper.find('ForTest2').exists()).toBe(false);
  });
  
});
