import { Task } from "../../components/useReducer/Task"
import {shallow} from 'enzyme'
import {initialState} from '../Fixtures/todoReducer';
import React from "react";
import {init} from '../../helper/init';

jest.mock('../../helper/init.js');

describe('Task test', () => {

  jest.resetAllMocks();
  const refMock = jest.spyOn(React, 'useRef');
  init.mockReturnValue(initialState);
  const wrapper = shallow(<Task ref={refMock} />)

  test('should render ok', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('TaskForm').length).toBe(1);
    expect(wrapper.find('TaskItem').length).toBe(1);
  });

})
