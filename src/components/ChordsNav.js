import React, { useContext } from 'react';
import ChordRootSelector from './ChordRootSelector';
import ChordModifier from './ChordModifier';
import ChordContext from './ChordContext';
import ChordSymbol from './ChordSymbol';

const ChordsNav = () => {
    const { setCurrentChordNote, setCurrentSymbol, setCurrentChordModifier, currentChordModifier } = useContext(ChordContext);

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

    const handleModifierChange = e => {
        if (e.target.value === undefined) {
            return;
        }
        setCurrentChordModifier(e.target.value);
    }
    


    return (
        <div className="nav">
            <div className="key-buttons-wrapper" onClick={handleNoteClick}>
                {rootNote}
            </div>
            <div className="key-buttons-wrapper modifier-buttons-wrapper" onClick={handleSymbolClick}>
                {symbol}
            </div>
            <div id="chord-type-select">
                <select id="modifiers" value={currentChordModifier} onChange={handleModifierChange}>
                    {modifier}
                </select>
            </div>
        </div>
    )
};

export default ChordsNav;