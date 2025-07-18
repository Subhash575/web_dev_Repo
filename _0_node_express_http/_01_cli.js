// This cli is created by me and here we use the "commander.js" external library.
const { Command } = require("commander");
const program = new Command();

program.command("count");
program.option("-p, --fPath <type>", "adding path for cli");
program.parse();

const options = program.opts();

const fs = require("fs");
fs.readFile(options.fPath, "utf-8", function (err, data) {
  if (err) {
    console.log("Add the valid path");
  } else {
    cnt = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] == " ") cnt++;
    }
    cnt = cnt + 1;
    console.log(cnt);
    // we can do this using "split function" also.
  }
});

// For running above code we use following command on the terminal:-
// node _01_cli.js count -p dop.txt
// Here count refer as command name.
