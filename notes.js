console.log("notes.js started");
const fs = require("fs");

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync("./notes-data.json");
    return JSON.parse(notesString);
  } catch (e) {
    console.log(e);
    return [];
  }
};

let saveNotes = notes => {
  fs.writeFileSync("./notes-data.json", JSON.stringify(notes));
};

let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };
  var duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

let getAll = () => {
  return fetchNotes();
};

let getNote = title => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter(note => note.title === title);
  return filteredNotes[0];
};

let removeNote = title => {
  let notes = fetchNotes();
  let updatedNotes = notes.filter(note => note.title !== title);
  saveNotes(updatedNotes);

  return notes.length !== updatedNotes.length;
};

let logNotes = note => {
  console.log("----");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNotes
};
