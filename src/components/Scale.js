import React from 'react';
import Note from './Note';
import functions from '../helper/utils';

const Scale = ({mode}) => {
  if (mode === "Lydian") {
    const scaleNotes = functions.getLydianScale() // need note from context
  } else if (mode === "Major") {
    const scaleNotes = functions.getMajorScale()
  } else if (mode === "Mixolydian") {
    const scaleNotes = functions.getMixolydianScale()
  } else if (mode === "Dorian") {
    const scaleNotes = functions.getDorianScale()
  } else if (mode === "Minor") {
    const scaleNotes = functions.getMinorScale()
  } else if (mode === "Phrygian") {
    const scaleNotes = functions.getPhrygianScale()
  } else if (mode === "Locrian") {
    const scaleNotes = functions.getLocrianScale()
  }
  const notes = scaleNotes.map((note, index) => (
    <Note note={note} key={index} />
  ));
  return <div>{notes}</div>;
};

export default Scale;