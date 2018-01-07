console.log("starting notes.js");

// module.exports = { age: 32 };
module.exports.addNotes = function() {
  console.log("add note.");
  return "new note."; // if we do not have a return statemetn it will return undefined.
};
