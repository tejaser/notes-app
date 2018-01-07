console.log("starting Notes-node app....");
const fs = require("fs");
const os = require("os");

let user = os.userInfo();
// console.log(user);

fs.appendFile("greetings.txt", `Hello, ${user.username}!`, function(err) {
  if (err) {
    console.log("problem in writing to file.");
  } else {
    console.log("Write Success!");
  }
});
