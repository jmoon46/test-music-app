const initNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

const Modes = {
  Major: 0,
  Dorian: 6,
  Phrygian: 5,
  Lydian: 4,
  Mixolydian: 3,
  Minor: 2,
  Locrian: 1
};

const shiftForMode = mode => {
  const startScale = [...initNotes];
  for (let i = 0; i < Modes[mode]; i++) {
    let x = startScale.pop();
    startScale.unshift(x);
  }
  return startScale;
};

const getMajorScale = endNote => {
  const newScale = [...initNotes];
  if (endNote === 'F' || endNote.includes('♭')) {
    // take flat route
    while (newScale[0] !== endNote) {
      shiftArray(newScale, true);
      addMajorAccent(newScale, true);
    }
  } else {
    // take sharp route
    while (newScale[0] !== endNote) {
      shiftArray(newScale, false);
      addMajorAccent(newScale, false);
    }
  }
  console.log(newScale);

  const modeData = {
    scale: newScale,
    numerals: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°']
  };
  return modeData;
};

const getDorianScale = endNote => {
  const newScale = shiftForMode('Dorian');

  if (
    endNote === 'G' ||
    endNote === 'C' ||
    endNote === 'F' ||
    endNote.includes('♭')
  ) {
    while (newScale[0] !== endNote) {
      shiftArray(newScale, true);
      addDorianAccent(newScale, true);
    }
  } else {
    while (newScale[0] !== endNote) {
      shiftArray(newScale, false);
      addDorianAccent(newScale, false);
    }
  }
  const modeData = {
    scale: newScale,
    numerals: ['i', 'ii', 'III', 'IV', 'v', 'vi°', 'VII']
  };
  return modeData;
};

const getPhrygianScale = endNote => {
  const newScale = shiftForMode('Phrygian');
  if (endNote === 'B' || endNote.includes('♯')) {
    while (newScale[0] !== endNote) {
      shiftArray(newScale, false);
      addPhrygianAccent(newScale, false);
    }
  } else {
    while (newScale[0] !== endNote) {
      shiftArray(newScale, true);
      addPhrygianAccent(newScale, true);
    }
  }
  const modeData = {
    scale: newScale,
    numerals: ['i', 'II', 'III', 'iv', 'v°', 'VI', 'vii']
  };
  return modeData;
};

const getLydianScale = endNote => {
  const newScale = shiftForMode('Lydian');
  if (endNote.includes('♭')) {
    while (newScale[0] !== endNote) {
      shiftArray(newScale, true);
      addLydianAccent(newScale, true);
    }
  } else {
    while (newScale[0] !== endNote) {
      shiftArray(newScale, false);
      addLydianAccent(newScale, false);
    }
  }
  const modeData = {
    scale: newScale,
    numerals: ['I', 'II', 'iii', 'iv°', 'V', 'vi', 'vii']
  };
  return modeData;
};

const getMixolydianScale = endNote => {
  const newScale = shiftForMode('Mixolydian');
  if (endNote === 'C' || endNote === 'F' || endNote.includes('♭')) {
    while (newScale[0] !== endNote) {
      shiftArray(newScale, true);
      addMixolydianAccent(newScale, true);
    }
  } else {
    while (newScale[0] !== endNote) {
      shiftArray(newScale, false);
      addMixolydianAccent(newScale, false);
    }
  }
  const modeData = {
    scale: newScale,
    numerals: ['I', 'ii', 'iii°', 'IV', 'v', 'vi', 'VII']
  };
  return modeData;
};

const getMinorScale = endNote => {
  const newScale = shiftForMode('Minor');
  if (endNote === 'E' || endNote === 'B' || endNote.includes('♯')) {
    // take sharp route
    while (newScale[0] !== endNote) {
      shiftArray(newScale, false);
      addMinorAccent(newScale, false);
    }
  } else {
    // take flat route
    while (newScale[0] !== endNote) {
      shiftArray(newScale, true);
      addMinorAccent(newScale, true);
    }
  }
  const modeData = {
    scale: newScale,
    numerals: ['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII']
  };
  return modeData;
};

const getLocrianScale = endNote => {
  const newScale = shiftForMode('Locrian');
  if (endNote.includes('♯')) {
    while (newScale[0] !== endNote) {
      shiftArray(newScale, false);
      addLocrianAccent(newScale, false);
    }
  } else {
    while (newScale[0] !== endNote) {
      shiftArray(newScale, true);
      addLocrianAccent(newScale, true);
    }
  }
  const modeData = {
    scale: newScale,
    numerals: ['i°', 'II', 'iii', 'iv', 'V', 'VI', 'vii']
  };
  return modeData;
};

const shiftArray = (array, flatStatus) => {
  if (flatStatus === false) {
    // changes the notes to start from the fifth
    for (let i = 0; i < 3; i++) {
      let x = array.pop();
      array.unshift(x);
    }
    return;
  }
  for (let i = 0; i < 4; i++) {
    // changes notes to start from the fourth
    let x = array.pop();
    array.unshift(x);
  }
};

// Adds flat or sharp symbol
const addMajorAccent = (scale, flatStatus) => {
  if (flatStatus === true) {
    scale[3] += '♭';
    return;
  }
  scale[6] += '♯';
};

const addDorianAccent = (scale, flatStatus) => {
  if (flatStatus === true) {
    scale[2] += '♭';
    return;
  }
  scale[5] += '♯';
};

const addPhrygianAccent = (scale, flatStatus) => {
  if (flatStatus === false) {
    scale[4] += '♯';
    return;
  }
  scale[1] += '♭';
};

const addLydianAccent = (scale, flatStatus) => {
  if (flatStatus === true) {
    scale[0] += '♭';
    return;
  }
  scale[3] += '♯';
};

const addMixolydianAccent = (scale, flatStatus) => {
  if (flatStatus === true) {
    scale[6] += '♭';
    return;
  }
  scale[2] += '♯';
};

const addMinorAccent = (scale, flatStatus) => {
  if (flatStatus === true) {
    scale[5] += '♭';
    return;
  }
  scale[1] += '♯';
};

const addLocrianAccent = (scale, flatStatus) => {
  if (flatStatus === false) {
    scale[0] += '♯';
    return;
  }
  scale[4] += '♭';
};

const functions = {
  getMajorScale,
  getDorianScale,
  getPhrygianScale,
  getLydianScale,
  getMixolydianScale,
  getMinorScale,
  getLocrianScale,
  shiftArray,
  addMajorAccent,
  addDorianAccent,
  addPhrygianAccent,
  addLydianAccent,
  addMixolydianAccent,
  addMinorAccent,
  addLocrianAccent,
  initNotes
};

export default functions;
