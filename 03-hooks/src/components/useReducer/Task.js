import React, { useEffect, useReducer, useRef, forwardRef} from "react";

import { todoReducer } from "./todoReducer";
import { TaskItem } from "./TaskItem";
import {TaskForm} from './TaskForm';
import ACTIONS from "./constant";
import {init} from '../../helper/init';

export const Task = forwardRef((props, ref) => {

  const [tasks, dispatch] = useReducer(todoReducer, [], init);
  const inputRef = useRef("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    ref.current = tasks.length;
  }, [tasks]);

  const onClickHandler = (e) => {
    e.preventDefault();

    const input = inputRef.current;

    if (!input.value.trim().length > 0) return;

    const task = {
      id: Date.now(),
      task: input.value,
      done: false,
    };

    dispatch({
      type: ACTIONS.CREATE,
      payload: task.id,
    });

    input.value = "";
  };

  const btnClickHandler = (action) => {
    dispatch(action);
  };

  return (
    <div className="row">
      <div className="col-md-3">
        <TaskForm 
            onClickHandler={onClickHandler}
            ref={inputRef}
        />
      </div>
      <div className="offset-md-1 col-md-3">
        {tasks &&
          tasks.map((task, pos) => (
            <TaskItem
              key={task.task}
              pos={pos + 1}
              btnClickHandler={btnClickHandler}
              task={task}
            />
          ))}
      </div>
    </div>
  );
});
