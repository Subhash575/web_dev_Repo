// Here we create the CLI
// 1. It read the no of word in the given/ask file.
// 2. It read the no of line in the given/ask file.

//(imp): using-> "alias" we can convert "node fileName.js" into name of our choice
// command: alias countt ="node fileName.js"
// and then use command-like: countt count_word
// remember this above command not work in powershell it only work on mac/linux and bash

const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program
  .name("File content count")
  .description("Creating cli which will do some work")
  .version("0.8.0");

//1. It read the no of word in the given/ask file.
program
  .command("count_word")
  .description("It is use to count the word in the file")
  .argument("<string>", "file or filePath")
  .action((file) => {
    fs.readFile(file, "utf-8", function (err, data) {
      if (err) console.log(err);
      else {
        const len = data.split(" ").length;
        console.log(`There are ${len} word in the ${file}`);
      }
    });
  });

// 2. It read the no of line in the given/ask file.
program
  .command("count_line")
  .description("It is use to count the no of line in the file")
  .argument("<string>", "file or filePath")
  .action((file) => {
    const fs = require("fs");
    fs.readFile(file, "utf-8", function (err, data) {
      if (err) console.log(err);
      else {
        const len = data.split("\n").length;
        console.log(len);
      }
    });
  });

program.parse();

// split function is JS:-
/*
The split() method splits a string into an array of substrings.
The split() method returns the new array.
The split() method does not change the original string.
If (" ") is used as separator, the string is split between words.

Ex:-
Split the words, and return the second word:
let text = "How are you doing today?";
const myArray = text.split(" ");
let word = myArray[1];

Ex:-
Use the limit parameter:
const myArray = text.split(" ", 3);
*/
