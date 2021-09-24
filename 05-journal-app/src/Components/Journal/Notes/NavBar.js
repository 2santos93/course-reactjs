import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { beforeDeleteNote, beforeUploadFile, saveNote } from "../../../actions/note";

export const NavBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  const date = moment(active.date).format("dddd, MMMM Do YYYY");
  const saveHandler = (e) => {
    e.preventDefault();
    console.log(active);
    dispatch(saveNote(active));
  };

  const uploadHandler = (e) => {
    document.getElementById("inputFile").click();
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    dispatch(beforeUploadFile(file));
  };

  const deleteHandler = () => {
    dispatch(beforeDeleteNote());
  }

  return (
    <>
      <div className="journal__main-navbar">
        <h5>{date}</h5>
        <div>
          <input
            type="file"
            hidden={true}
            id="inputFile"
            onChange={fileChangeHandler}
          />
          <button onClick={uploadHandler}>Upload</button>
          <button onClick={saveHandler}>Save</button>
          <button className="btn-danger" onClick={deleteHandler}><i class="fas fa-times"></i></button>
        </div>
      </div>
    </>
  );
};
