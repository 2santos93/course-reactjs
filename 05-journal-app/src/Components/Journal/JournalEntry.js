import React from "react";
import moment from "moment";
import { activeNote } from "../../actions/note";
import { useDispatch } from "react-redux";

export const JournalEntry = ({ title, body, date, img, id }) => {
  const dispatch = useDispatch();
  const noteDate = moment(date);

  const noteClickHandler = () => {
    dispatch(activeNote(id, { title, body, date, img }));
  };

  return (
    <div className="journal__entry mt-5 pointer" onClick={noteClickHandler}>
      {img && (
        <div
          className="journal__entry-img"
          style={{ backgroundImage: `url('${img}')` }}
        ></div>
      )}
      <div className="journal__entry-content">
        <h4>{title}</h4>
        <p style={{ wordBreak: "break-all", overflow: "hidden" }}>{body}</p>
      </div>
      <div className="journal__entry-date">
        <span>{noteDate.format("dddd")}</span>
        <h3>{noteDate.format("Do")}</h3>
      </div>
    </div>
  );
};
