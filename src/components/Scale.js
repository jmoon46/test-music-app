import React, { useContext } from 'react';
import Note from './Note';
import KeySigContext from './KeySigContext';
import functions from '../helper/utils';

const Scale = ({ mode }) => {
  const { currentNote, currentModifier } = useContext(KeySigContext);
  let finalNote;

  if (currentModifier.includes('♮')) {
    finalNote = currentNote[0];
  } else {
    finalNote = currentNote + currentModifier;
  }

  let scaleNotes;
  // let romanNumerals = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii']

  // const createRomanNumerals = (mode) => {
  //   if (mode === 'Lydian') {
  //     const finalNumerals = romanNumerals.map((numeral, index) {
  //       if (index === 0 || index === 3 || index === 4) {
  //         numeral.toUpperCase
  //       }
  //     })
  //   }
  // }

  if (mode === 'Lydian') {
    scaleNotes = functions.getLydianScale(finalNote);
  } else if (mode === 'Major') {
    scaleNotes = functions.getMajorScale(finalNote);
  } else if (mode === 'Mixolydian') {
    scaleNotes = functions.getMixolydianScale(finalNote);
  } else if (mode === 'Dorian') {
    scaleNotes = functions.getDorianScale(finalNote);
  } else if (mode === 'Minor') {
    scaleNotes = functions.getMinorScale(finalNote);
  } else if (mode === 'Phrygian') {
    scaleNotes = functions.getPhrygianScale(finalNote);
  } else if (mode === 'Locrian') {
    scaleNotes = functions.getLocrianScale(finalNote);
  }

  const notes = scaleNotes.scale.map((note, index) => (
    <Note note={note} key={index} />
  ));
  return <div className='scale-notes-wrapper'>{notes}</div>;
};

export default Scale;
