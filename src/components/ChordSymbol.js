import React, { useContext } from 'react';
import ChordContext from './ChordContext';

const selectedStyle = {
    backgroundColor: '#583b2d',
    color: 'white'
};

const ChordSymbol = ({ symbol }) => {
    const {currentSymbol} = useContext(ChordContext);

    return (
        <div className="key-modifier">
            <button className="key-button" style={currentSymbol === symbol ? selectedStyle : null} value={symbol}>
                {symbol}
            </button>
        </div>
    )
}

export default ChordSymbol;