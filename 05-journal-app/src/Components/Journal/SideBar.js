import React from "react";
import { JournalEntries } from "./JournalEntries";
import { useDispatch, useSelector } from "react-redux";
import { beforeLogout } from "../../actions/auth";
import { addNote } from "../../actions/note";

export const SideBar = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const {name} = auth;

  const logoutHandler = (e) => {
    e.preventDefault();

    dispatch(beforeLogout());
  };

  const addNoteHandler = () => {
    dispatch(addNote());
  }

  return (
    <aside className="sidebar__main">
      <div className="sidebar__header">
        <h1>
          <i className="far fa-address-card"></i>
          <span style={{ marginLeft: "5px" }}>{name}</span>
        </h1>
        <button onClick={logoutHandler}>Logout</button>
      </div>
      <div 
        className="sidebar__content"
        onClick={addNoteHandler}
      >
        <i className="fas fa-plus fa-5x"></i>
      </div>
      <JournalEntries />
    </aside>
  );
};
