import React, {useRef } from "react";
import { Task } from "./Task";

export const TodoApp = () => {

  const tasksRef = useRef([]);

  return (
    <>
      <h1>ToDo App ({tasksRef.current})</h1>
      <hr />

      <Task
        ref={tasksRef}
      />
    </>
  );
};
