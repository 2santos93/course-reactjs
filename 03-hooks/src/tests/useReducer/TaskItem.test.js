import { TaskItem } from "../../components/useReducer/TaskItem"
import {shallow} from 'enzyme';
import {initialState} from '../Fixtures/todoReducer';
import ACTIONS from '../../components/useReducer/constant';
import '@testing-library/jest-dom';

describe('Task Item Test', () => {

  let wrapper;
  const task = initialState[0];
  const btnClickHandlerMock = jest.fn();


  beforeEach(() => {
    jest.resetAllMocks();

    wrapper = shallow(
      <TaskItem
        task={task}
        pos={1}
        btnClickHandler={btnClickHandlerMock}
      />);
  });

  test('should render ok', () => {

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h3').text()).toBe(`1. ${task.task}`);

  })

  test('should call btnClickHandler with update action type', () => {

    wrapper.find('button').at(0).simulate('click');

    const expectArgs = { type: ACTIONS.UPDATE, payload: task.id }

    expect(btnClickHandlerMock).toHaveBeenCalledTimes(1);
    expect(btnClickHandlerMock).toHaveBeenCalledWith(expectArgs);

  });

  test('should call btnClickHandler with delete action type', () => {

    wrapper.find('button').at(1).simulate('click');

    const expectArgs = { type: ACTIONS.DELETE, payload: task.id }

    expect(btnClickHandlerMock).toHaveBeenCalledTimes(1);
    expect(btnClickHandlerMock).toHaveBeenCalledWith(expectArgs);

  });

  
})
