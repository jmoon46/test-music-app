import React, { useEffect, useContext } from 'react';
import ChordContext from "./ChordContext";
import "../piano.css";
import chordFunctions from "../helper/chords";
import plotChordNotes from "../helper/plotChordNotes"


const ChordsWrapper = () => {
    const { currentChordNote, currentChordModifier, currentSymbol } = useContext(ChordContext);

    let chordNotes;
    const getCurrentChord = (rootNote, modifier, symbol) => {
        if (symbol !== "♮") {
            rootNote += symbol
        }
        if (modifier === "maj") {
            chordNotes = chordFunctions.getMajorChord(rootNote);
        } else if (modifier === "min") {
            chordNotes = chordFunctions.getMinorChord(rootNote);
        } else if (modifier === "sus2") {
            chordNotes = chordFunctions.getSusTwoChord(rootNote);
        } else if (modifier === "sus4") {
            chordNotes = chordFunctions.getSusFourChord(rootNote);
        } else if (modifier === "6") {
            chordNotes = chordFunctions.getSixChord(rootNote);
        } else if (modifier === "maj6") {
            chordNotes = chordFunctions.getMajorSixChord(rootNote);
        } else if (modifier === "min6") {
            chordNotes = chordFunctions.getMinorSixChord(rootNote);
        } else if (modifier === "7") {
            chordNotes = chordFunctions.getSevenChord(rootNote);
        } else if (modifier === "maj7") {
            chordNotes = chordFunctions.getMajorSevenChord(rootNote);
        } else if (modifier === "min7") {
            chordNotes = chordFunctions.getMinorSevenChord(rootNote);
        } else if (modifier === "dim") {
            chordNotes = chordFunctions.getDiminishedChord(rootNote);
        } else if (modifier === "aug") {
            chordNotes = chordFunctions.getAugmentedChord(rootNote);
        }
    }
    


    useEffect(() => {
        getCurrentChord(currentChordNote, currentChordModifier, currentSymbol);
        plotChordNotes(...chordNotes);
    }, [currentChordNote, currentChordModifier, currentSymbol]);

    return (
        <div className="main-container">
            <div className="white-key-1 C B# Dbb">
            </div>
            <div className="black-key C# Db B## margin-left">
            </div>
            <div className="white-key D Ebb C## margin-left">
            </div>
            <div className="black-key D# Eb margin-left">
            </div>
            <div className="white-key E Fb D## margin-left">
            </div>
            <div className="white-key F E# Gbb active-note">
            </div>
            <div className="black-key F# Gb margin-left active-note">
            </div>
            <div className="white-key G Abb F## margin-left">
            </div>
            <div className="black-key G# Ab F### margin-left">
            </div>
            <div className="white-key A Bbb G## margin-left">
            </div>
            <div className="black-key A# Bb Cbb margin-left">
            </div>
            <div className="white-key B Cb A## margin-left">
            </div>
            <div className="white-key-1 C B# Dbb">
            </div>
            <div className="black-key C# Db B## margin-left">
            </div>
            <div className="white-key D Ebb C## margin-left">
            </div>
            <div className="black-key D# Eb margin-left">
            </div>
            <div className="white-key E Fb D## margin-left">
            </div>
            <div className="white-key F E# Gbb active-note">
            </div>
            <div className="black-key F# Gb margin-left active-note">
            </div>
            <div className="white-key G Abb F## margin-left">
            </div>
            <div className="black-key G# Ab F### margin-left">
            </div>
            <div className="white-key A Bbb G## margin-left">
            </div>
            <div className="black-key A# Bb Cbb margin-left">
            </div>
            <div className="white-key B Cb A## margin-left">
            </div>
        </div>
    )
};


export default ChordsWrapper;