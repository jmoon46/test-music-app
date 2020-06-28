import React, { useContext } from 'react';
import ChordRootSelector from './ChordRootSelector';
import ChordModifier from './ChordModifier';
import ChordContext from './ChordContext';
import ChordSymbol from './ChordSymbol';

const ChordsNav = () => {
    const { setCurrentChordNote, setCurrentSymbol, setCurrentChordModifier } = useContext(ChordContext);

    const rootNotes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const modifiers = ['maj', 'min', 'sus2', 'sus4', '6', 'maj6', 'min6', '7', 'maj7', 'min7', 'dim', 'aug'];
    const symbols = ['♮', 'b', '#'];
    const rootNote = rootNotes.map((note, index) => (
        <ChordRootSelector note={note} key={index} />
    ));
    const symbol = symbols.map((symbol, index) => (
        <ChordSymbol symbol={symbol} key={index} />
    ));
    const modifier = modifiers.map((modifier, index) => (
        <ChordModifier modifier={modifier} key={index} />
    ));

    const handleNoteClick = e => {
        if (e.target.value === undefined) {
          return;
        }
        setCurrentChordNote(e.target.value);
    };

    const handleSymbolClick = e => {
        if (e.target.value === undefined) {
            return;
        }
        setCurrentSymbol(e.target.value);
    }
    
    const handleModifierClick = e => {
        if (e.target.value === undefined) {
          return;
        }
        setCurrentChordModifier(e.target.value);
    };

    return (
        <div>
            <div onClick={handleNoteClick}>
                {rootNote}
            </div>
            <div onClick={handleSymbolClick}>
                {symbol}
            </div>
            <div onClick={handleModifierClick}>
                {modifier}
            </div>
        </div>
    )
};

export default ChordsNav;