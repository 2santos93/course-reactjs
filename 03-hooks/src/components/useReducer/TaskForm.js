import React, { forwardRef } from 'react'

export const TaskForm = forwardRef(({onClickHandler}, ref) => {
    return (
        <form>
          <label htmlFor="task" className="form-label">
            <h2>Task</h2>
          </label>
          <input
            ref={ref}
            id="task"
            type="text"
            className="form-control"
          />
          <button
            type="submit"
            className="btn btn-primary mt-3"
            onClick={onClickHandler}
          >
            Submit
          </button>
        </form>
    )
})
