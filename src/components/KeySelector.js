import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import KeySigContext from './KeySigContext';

const selectedStyle = {
  backgroundColor: '#583b2d',
  color: 'white'
};

const KeySelector = ({ note }) => {
  const { currentNote } = useContext(KeySigContext);
  return (
    <div className="key-selector">
      <button
        className="key-button"
        style={currentNote === note ? selectedStyle : null}
        value={note}
      >
        {note}
      </button>
    </div>
  );
};

KeySelector.propTypes = {
  note: PropTypes.string
};
export default KeySelector;
