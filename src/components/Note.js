import React from 'react';

const Note = ({ note, numeral }) => {
  return (
    <div className="note-wrapper">
      <div className="scale-note">{note}</div>
      <div className="numeral">{numeral}</div>
    </div>
  );
};

export default Note;
