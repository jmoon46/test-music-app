// const { getMajorScale, getMinorScale, initNotes, majorNotes, minorNotes } = require('./utils');
import functions from './utils.js';

const getMajorChord = startNote => {
  const majorScale = functions.getMajorScale(startNote)["scale"];
  const majorChord = [majorScale[0], majorScale[2], majorScale[4]];
  return majorChord;
};

const getMinorChord = startNote => {
  const minorScale = functions.getMinorScale(startNote)["scale"];
  const minorChord = [minorScale[0], minorScale[2], minorScale[4]];
  return minorChord;
}

const getSusTwoChord = startNote => {
  const majorScale = functions.getMajorScale(startNote)["scale"];
  const twoChord = [majorScale[0], majorScale[1], majorScale[4]];
  return twoChord;
}

const getSusFourChord = startNote => {
  const majorScale = functions.getMajorScale(startNote)["scale"];
  const fourChord = [majorScale[0], majorScale[3], majorScale[4]];
  return fourChord;
}

const getDiminishedChord = startNote => {
  const minorScale = functions.getMinorScale(startNote)["scale"];
  const diminishedChord = [minorScale[0], minorScale[2]];
  const nextMinorScale = functions.getMinorScale(minorScale[2])["scale"];
  diminishedChord.push(nextMinorScale[2]);
  return diminishedChord;
}

const getAugmentedChord = startNote => {
  const majorScale = functions.getMajorScale(startNote)["scale"];
  const augmentedChord = [majorScale[0], majorScale[2]];
  const nextMajorScale = functions.getMajorScale(majorScale[2])["scale"];
  augmentedChord.push(nextMajorScale[2]);
  return augmentedChord;
}

const getSixChord = startNote => {
  const minorScale = functions.getMinorScale(startNote)["scale"];
  const sixChord = getMajorChord(startNote);
  sixChord.push(minorScale[5]);
  return sixChord;
}

const getMinorSixChord = startNote => {
  const minorScale = functions.getMinorScale(startNote)["scale"];
  const sixChord = getMinorChord(startNote);
  sixChord.push(minorScale[5]);
  return sixChord;
}

const getMajorSixChord = startNote => {
  const majorScale = functions.getMajorScale(startNote)["scale"];
  const sixChord = getMajorChord(startNote);
  sixChord.push(majorScale[5]);
  return sixChord;
}

const getSevenChord = startNote => {
  const minorScale = functions.getMinorScale(startNote)["scale"];
  const sevenChord = getMajorChord(startNote);
  sevenChord.push(minorScale[6]);
  return sevenChord;
}

const getMinorSevenChord = startNote => {
  const minorScale = functions.getMinorScale(startNote)["scale"];
  const sevenChord = getMinorChord(startNote);
  sevenChord.push(minorScale[6]);
  return sevenChord;
}

const getMajorSevenChord = startNote => {
  const majorScale = functions.getMajorScale(startNote)["scale"];
  const sevenChord = getMajorChord(startNote);
  sevenChord.push(majorScale[6]);
  return sevenChord;
}



// const getAllChordsForMode = (modeArray) => {
//   newArray = [];
//   modeArray.forEach((note, i) => {
//     if (i === 1 || i === 2 || i === 5) {
//       newArray.push(note += "m")
//     } else if (i === 6) {
//       newArray.push(note += "dim")
//     } else {
//       newArray.push(note)
//     }
//   });
//   console.log(newArray)
// }

const chordFunctions = {
    getMajorChord,
    getMinorChord,
    getSusTwoChord,
    getSusFourChord,
    getDiminishedChord,
    getAugmentedChord,
    getSixChord,
    getMinorSixChord,
    getMajorSixChord,
    getSevenChord,
    getMinorSevenChord,
    getMajorSevenChord
};

export default chordFunctions;