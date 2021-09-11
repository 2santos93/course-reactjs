import ACTIONS from "./constant";
import "./style.css";

export const TaskItem = ({ pos, btnClickHandler, task }) => {
  
    const {task:taskName, id, done} = task;

  return (
    <div
      style={{ display: "flex", justifyContent: "space-between" }}
      className="mt-2"
    >
      <h3 className={`${done && "complete"}`}>
        {pos}. {taskName}
      </h3>

      <button
        className="btn btn-success btn-sm"
        onClick={() => btnClickHandler({ type: ACTIONS.UPDATE, payload: id })}
      >
        Toggle
      </button>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => btnClickHandler({ type: ACTIONS.DELETE, payload: id })}
      >
        Delete
      </button>
    </div>
  );
};

TaskItem.displayName='TaskItem';