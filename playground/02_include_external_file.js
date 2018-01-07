console.log("starting program.");

const fs = require("fs");
const os = require("os");
const notes = require("./02_notes.js");

const user = os.userInfo();

// console.log(notes.age);

// fs.appendFile(
//   "greetings.txt",
//   `Hello, ${user.username}!  Your age is ${notes.age}.`,
//   function(err) {
//     if (err) {
//       console.log("Error in writing to file.");
//     } else {
//       console.log("write successful.");
//     }
//   }
// );
console.log(notes.addNotes());
