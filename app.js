console.log("Starting app.js ...");

const yargs = require("yargs");
const _ = require("lodash");

const notes = require("./notes.js");

// var command = process.argv[2]; // replacing normal process argument functionality with 3rd parth yargs
const argv = yargs.argv;
let command = argv._[0];

console.log("Command:", command);

if (command === "add") {
  let note = notes.addNote(argv.title, argv.body);
  if (_.isUndefined(note)) {
    console.log("Duplicate Entry");
  } else {
    console.log("Note Added.");
    notes.logNotes(note);
  }
} else if (command === "list") {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach(note => {
    notes.logNotes(note);
  });
} else if (command === "read") {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log("Note Found.");
    notes.logNotes(note);
  } else {
    console.log("Note not found.");
  }
} else if (command === "remove") {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "Note was removed." : "Note not removed.";
  console.log(message);
} else {
  console.log("command not recognized.");
}
