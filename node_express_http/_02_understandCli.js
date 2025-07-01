const fs = require("fs");

function main(fileName) {
  // console.log(process.argv);
  // If we use the above "process.argv" we have access over the terminal element path
  // for ex: If we write:  node _02_understandCli.js hi

  // On the terminal we get:-
  // [
  //'D:\\Nodejs_setup\\node.exe',
  //'D:\\HP_pavillion\\myWebDevSource\\myNodeProject\\_02_understandCli.js',
  //'hi'
  // ]
  // 19 -->This is the result of loop logic.

  // We get above type of data on the terminal.
  // 'D:\\Nodejs_setup\\node.exe', {This will be "node" path}

  // 'D:\\HP_pavillion\\myWebDevSource\\myNodeProject\\_02_understandCli.js',
  //  Above will be the "_02_understandCli.js" path.

  //  'hi' It is the extra argument given by me in the terminal.

  //(imp)--------------------------------------->
  // Here we can use the process.argv[0] and get it accordingly.
  // process.argv is useful when we write extra argument and we can able to access it by
  // indexing. ex:- node script.js work
  // we can access the argument path as:- process.argv[2] it will access the work.

  fs.readFile(fileName, "utf-8", function (err, data) {
    total = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] === " ") total++;
    }
    console.log(total + 1);
  });
}

// main("dop.txt");
main(process.argv[2]);
//This is useful to take filepath or file dynamically from the terminal

//Above codes almost act like the Cli what it not have the "-h" helper functionality
//like cli therefore library like commander come into the picture.
