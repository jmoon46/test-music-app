import React, { useContext } from 'react';
import KeySigContext from './KeySigContext';

const selectedStyle = {
  backgroundColor: '#583b2d',
  color: 'white'
};

const KeyModifier = ({ symbol }) => {
  const { currentModifier } = useContext(KeySigContext);
  return (
    <div className="key-modifier">
      <button
        className="key-button"
        style={currentModifier === symbol ? selectedStyle : null}
        value={symbol}
      >
        {symbol}
      </button>
    </div>
  );
};

export default KeyModifier;
