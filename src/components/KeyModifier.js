import React from 'react';

// notes and modifiers(sharps/flats) need to be toggleable. When you click a
// note or a modifier it will run the logic that will check what is toggled on
// and run all of the getScale methods off of the note and modifier combined

const KeyModifier = ({ symbol }) => {
  return (
    <div>
      <button value={symbol}>{symbol}</button>
    </div>
  );
};

export default KeyModifier;
