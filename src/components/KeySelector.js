import React from 'react';
import PropTypes from 'prop-types';

const KeySelector = ({ note }) => {
  return (
    <div>
      <button value={note}>
        {note}
      </button>
    </div>
  );
};

KeySelector.propTypes = {
  note: PropTypes.string
};
export default KeySelector;
