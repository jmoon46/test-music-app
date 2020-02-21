import React from 'react';
import PropTypes from 'prop-types';

const KeySelector = ({ note }) => {
  return (
    <div className='key-selector'>
      <button className="key-button" value={note}>
        {note}
      </button>
    </div>
  );
};

KeySelector.propTypes = {
  note: PropTypes.string
};
export default KeySelector;
