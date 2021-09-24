import React from "react";
import { useSelector } from "react-redux";
import { JournalEntry } from "./JournalEntry";

export const JournalEntries = () => {
  const { notes: notesData } = useSelector((state) => state);
  const { notes } = notesData;

  return (
    <div className="journal__entries mt-5">
      {notes.map((note) => (
        <JournalEntry 
          key={note.id} 
          {...note}
        />
      ))}
    </div>
  );
};
