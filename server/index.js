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
plainText.split("\n").forEach(function (line) {
  let name = line;
  let initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");
  console.log(initials);
});
