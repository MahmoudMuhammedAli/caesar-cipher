///* This is a simple file to calculate the initial chars of a string.
// * The string is the plain text provided from ./testFiles/input.txt.
// * the output is in the console.
// * you need nodeJS installed on your system to run this file with `node index.js`.
const fs = require("fs");

const plainText = fs.readFileSync("./testFiles/input.txt").toString();
//? First attempt using regex
//! missing cases: when the first name is a single char. eg. "a ALice"
// plainText.split("\n").forEach(function (line) {
//   let name = line;
//   let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
//   let initials = [...name.matchAll(rgx)] || [];
//   initials = (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "");
//   console.log(initials);
// });

// second attempt using string.split
//? HANDLES ALL CASES`
let combinedInitials = [];
plainText.split("\n").forEach(function (line) {
  let name = line;
  let initials = name
    .replaceAll("\t", "")
    .replaceAll("\n", "")
    .split(" ")
    .map((word) => (word !== "\n" ? word[0] : ""))
    .join("");
  console.log(initials);
  combinedInitials.push(initials);
});
combinedInitials = combinedInitials.join("");
fs.writeFileSync("./testFiles/output.txt", combinedInitials);

//? open the output file in the default  program for text files
function getCommandLine() {
  switch (process.platform) {
    case "darwin":
      return "open";
    case "win32":
      return "start";
    case "win64":
      return "start";
    default:
      return "xdg-open";
  }
}
var exec = require("child_process").exec;

exec(getCommandLine() + " " + "./testFiles/output.txt");
