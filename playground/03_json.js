console.log("starting json.js ...");

const fs = require("fs");

var originalJson = {
  title: "default title",
  body: "default body"
};

console.log(typeof originalJson);

let originalJsonString = JSON.stringify(originalJson);

console.log(typeof originalJsonString);

fs.writeFileSync("notes.json", originalJsonString);

var noteString = fs.readFileSync("notes.json");
console.log(typeof noteString);
let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
