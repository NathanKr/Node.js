console.log("notes is loading");

const fs = require("fs");
const fileName = "notes.json";

const saveNotes = notes => {
  try {
    const notesString = JSON.stringify(notes);
    fs.writeFileSync(fileName, notesString);
  } catch (error) {
    console.log(`Error saveNotes : ${error.message}`);
  }
};

const getNotes = () => {
  var notes;

  // --- try handles e.g. the first time when no file exists or format issues in the file
  try {
    const notesString = fs.readFileSync(fileName);
    notes = JSON.parse(notesString);
  } catch (error) {
    notes = [];
  }

  return notes;
};

const addNote = (title, body) => {
  const note = { title, body };
  notes = getNotes();

  const filtered = notes.filter(note => note.title === title);
  if (filtered.length === 0) {
    // --- note title does not exist
    notes.push(note);
    saveNotes(notes);
  } else {
    console.log("note all ready exist");
  }
};

const getNote = title => {
  const notes = getNotes();
  const filtered = notes.filter(note => note.title === title);
  if (filtered.length === 1) {
    console.log(`body : ${filtered[0].body}`);
  } else {
    console.log("note does not exist");
  }
};

const removeNote = title => {
  const notes = getNotes();
  const index = notes.findIndex(note => note.title === title);
  if (index !== -1) {
    notes.splice(index, 1);
    saveNotes(notes);
  } else {
    console.log("note does not exist");
  } 
};

const getAllNotes = () => {
  const notes = getNotes();
  for (note in notes) {
    console.log(`title : ${notes[note].title} , body : ${notes[note].body}`);
  }
};

module.exports = {
  addNote,
  getAllNotes,
  getNote,
  removeNote
};
