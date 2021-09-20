import { mount } from 'enzyme';
import { Route } from 'react-router';
import { MemoryRouter } from '../../../node_modules/react-router-dom/cjs/react-router-dom.min';
import wrap from '../../../node_modules/word-wrap/index';
import { HeroScreen } from "../../components/Heroes/HeroScreen";

describe('HeroScreen test', () => {

  let history;

  beforeEach(() => {
    history = {
      goBack: jest.fn(),
      length: 10,
      push: jest.fn()
    }
    
    jest.clearAllMocks();
  })

  test('should redirect to / because not found the hero', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen history={history}/>
      </MemoryRouter>
    );
    expect(wrapper.find('Redirect').exists()).toBeTruthy();

  })

  test('should render ok with hero finded', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/dc-batman']}>
        <Route path='/hero/:id' component={(props) => <HeroScreen history={history} />} />
      </MemoryRouter>
    )

      expect(wrapper.find('.row').exists()).toBe(true);
  });

  test('should go back with push', () => {

    history.length = 1;

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/dc-batman']}>
        <Route path='/hero/:id' component={(props) => <HeroScreen history={history} />} />
      </MemoryRouter>
    )

    wrapper.find('button').prop('onClick')();

    expect(history.push).toBeCalledWith('/');
    expect(history.goBack).not.toBeCalled();
  })
  
  test('should go back with goBack', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/dc-batman']}>
        <Route path='/hero/:id' component={(props) => <HeroScreen history={history} />} />
      </MemoryRouter>
    )

    wrapper.find('button').prop('onClick')();

    expect(history.push).not.toBeCalled();
    expect(history.goBack).toBeCalled();
  })
  
})
