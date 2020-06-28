const plotChordNotes = (note1, note2, note3, note4 = null) => {
    const pianoContainer = document.querySelector(".main-container");
    for (let i = 0; i < pianoContainer.children.length; i++) {
        if (pianoContainer.children[i].classList.contains(note1) || pianoContainer.children[i].classList.contains(note2) || pianoContainer.children[i].classList.contains(note3) || pianoContainer.children[i].classList.contains(note4)) {
         pianoContainer.children[i].classList.add("active-note");
        } else {
         pianoContainer.children[i].classList.remove("active-note");
        }
    }
}

export default plotChordNotes;