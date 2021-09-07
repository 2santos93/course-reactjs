import React, { useEffect, useReducer, useRef, useState } from 'react'
import ACTIONS from './constant';
import { todoReducer } from '../useCallback/todoReducer';
import { Task } from './Task';

const init = () => {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

export const TodoApp = () => {

  const [tasks, dispatch] = useReducer(todoReducer, [], init);
  // const [btnAction, setBtnAction] = useState({payload: null, type: null})
  const ref = useRef('');

  // useEffect(() => {
  //   const {type, payload} = btnAction;
  //   dispatch({payload, type});

  // }, [btnAction])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  const onClickHandler = (e) => {
    e.preventDefault();

    const input = ref.current;
    
    if(!input.value.trim().length > 0) return;
    
    const task = {
      id: Date.now(),
      task: input.value,
      done: false
    };

    dispatch({
      type: ACTIONS.CREATE,
      payload: task
    });

    input.value = '';
  }

  const btnClickHandler = (action) => {
    dispatch(action);
  }

  return (
      <>
        <h1>ToDo App ({tasks.length})</h1>
        <hr />

        <div className="row">
          <div className="col-md-3">
            <form>
              <label htmlFor='task' className="form-label"><h2>Task</h2></label>
              <input ref={ref} id='task' type="text" className="form-control" />
              <button 
                type="submit" 
                className="btn btn-primary mt-3"
                onClick={onClickHandler}
              >
                  Submit
              </button>
            </form>
          </div>
          <div className='offset-md-1 col-md-3'>

          {
            tasks && tasks.map((task, pos) => (
              <Task 
                key={task.id} 
                pos={pos+1} 
                btnClickHandler={btnClickHandler}
                {...task}
              />
            ))
          }

          </div>
        </div>
      </>
  )
}
