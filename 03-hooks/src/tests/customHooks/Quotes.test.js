import {shallow} from 'enzyme';
import { useCounter } from '../../components/customHooks/hooks/useCounter';
import { useFetch } from '../../components/customHooks/hooks/useFetch';
import { Quotes } from '../../components/customHooks/Quotes';

jest.mock('../../components/customHooks/hooks/useFetch');
jest.mock('../../components/customHooks/hooks/useCounter');

describe('Quotes test', () => {

  beforeEach( () => {
    jest.resetAllMocks();
    useCounter.mockReturnValue([1, () => {}]);
  })
  

  test('should render ok', () => {
    useFetch.mockReturnValue({
      loading: true,
      data: null,
      error: false
    })
    
    const wrapper = shallow(<Quotes />);
    
    expect(wrapper).toMatchSnapshot();
  })

  test('should render data', () => {
    useFetch.mockReturnValue({
      loading: false,
      data: [{author: 'nelson', quote: 'hello world'}],
      error: false
    })

    const wrapper = shallow(<Quotes />);

    expect(wrapper.find('Loading').exists()).toBe(false);
  })
  
})
