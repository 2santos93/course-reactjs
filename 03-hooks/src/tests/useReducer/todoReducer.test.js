import { todoReducer } from "../../components/useReducer/todoReducer"
import { initialState } from "../Fixtures/todoReducer"

import ACTIONS from '../../components/useReducer/constant';

describe('TodoReducer test', () => {
  test('should return default value', () => {
    const state = todoReducer(initialState, {});

    expect(state).toEqual(initialState);
  })

  test('should add task', () => {

    const { state, newTask } = createTask();

    expect(state).toEqual([...initialState, newTask]);
    expect(state.length).toBe(2);

  })

  test('should toggle task', () => {

    const { state, newTask } = createTask();

    const action = {
      type: ACTIONS.UPDATE,
      payload: newTask.id
    }

    const newState = todoReducer(state, action)

    expect(newState.length).toBe(2);
    expect(newState[1].done).toBe(true);
    
  })

  test('should delete a task', () => {
    const { state, newTask } = createTask();

    const action = {
      type: ACTIONS.DELETE,
      payload: newTask.id
    }

    const newState = todoReducer(state, action)

    expect(newState.length).toBe(1);
    expect(newState).toEqual(initialState);
    
  })
  
  
  function createTask() {
    const newTask = {
      id: Date.now(),
      task: 'make dinner',
      done: false,
    };
    const action = {
      type: ACTIONS.CREATE,
      payload: newTask
    };
    const state = todoReducer(initialState, action);
    return { state, newTask };
  }
})



