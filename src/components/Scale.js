import React, { useContext } from 'react';
import Note from './Note';
import KeySigContext from './KeySigContext';
import functions from '../helper/utils';

const Scale = ({ mode }) => {
  const { currentNote } = useContext(KeySigContext);
  let scaleNotes;
  if (mode === 'Lydian') {
    scaleNotes = functions.getLydianScale(currentNote);
  } else if (mode === 'Major') {
    scaleNotes = functions.getMajorScale(currentNote);
  } else if (mode === 'Mixolydian') {
    scaleNotes = functions.getMixolydianScale(currentNote);
  } else if (mode === 'Dorian') {
    scaleNotes = functions.getDorianScale(currentNote);
  } else if (mode === 'Minor') {
    scaleNotes = functions.getMinorScale(currentNote);
  } else if (mode === 'Phrygian') {
    scaleNotes = functions.getPhrygianScale(currentNote);
  } else if (mode === 'Locrian') {
    scaleNotes = functions.getLocrianScale(currentNote);
  }
  const notes = scaleNotes.map((note, index) => (
    <Note note={note} key={index} />
  ));
  return <div>{notes}</div>;
};

export default Scale;
