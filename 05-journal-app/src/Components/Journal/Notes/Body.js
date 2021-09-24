import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote } from "../../../actions/note";
import { useForm } from "./../../../hooks/useForm";

export const Body = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { title, body, img } = formValues;

  useEffect(() => {
    reset(note);
  }, [note.id, note.img]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues]);

  return (
    <div className="journal__main-body mt-5">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleInputChange}
        name="title"
      />
      <textarea
        className="mt-5"
        placeholder="Content"
        value={body}
        name="body"
        onChange={handleInputChange}
      />
      {img && <img src={img} />}
    </div>
  );
};
