import React, { useContext } from 'react';
import ChordContext from './ChordContext';

const selectedStyle = {
    backgroundColor: '#583b2d',
    color: 'white'
};

const ChordSymbol = ({ symbol }) => {
    const {currentChordSymbol} = useContext(ChordContext);

    return (
        <div className="key-modifier">
            <button className="key-button" style={currentChordSymbol === symbol ? selectedStyle : null} value={symbol}>
                {symbol}
            </button>
        </div>
    )
}

export default ChordSymbol;