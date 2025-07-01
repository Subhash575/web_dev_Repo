const { Command } = require("commander");
const program = new Command();

// program
//   .option("--first")
//   .option("-s, --separator <char>")
//   .argument("<string>")
//   .argument("<string>");

// program.parse();

// const options = program.opts();
// const limit = options.first ? 1 : undefined;
// console.log(program.args[1].split(options.separator, limit));

program
  .option("-d, --debug", "output extra debugging")
  .option("-s, --small", "small pizza size")
  .option("-p, --pizza-type <type>", "flavour of pizza");

program.parse();

const options = program.opts();
if (options.debug) console.log(options);
console.log("pizza details:");
if (options.small) console.log("- small pizza size");
if (options.pizzaType) console.log(`- ${options.pizzaType}`);
console.log(options.pizzaType);
