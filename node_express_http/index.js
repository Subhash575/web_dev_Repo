// ##For installing external dependencies command:- npm install libraryName
// ex:- npm install chalk
// After running above command you can see that chalk library is install in the node
//modules folder and chalk library have it own package.json.
//Any library you install it will install on the node_modules. First node_modules is
//install than library install. Alway remember node_modules is only install if it not
// present in the directory.

// import chalk from "chalk";
// console.log(chalk.blue("Hello World!"));
// console.log(chalk.bold.red("Error Message"));
// console.log(chalk.green.underline("work is sucess!"));

// There is two way to use the chalk library
//way-1:- you can run it by changing on the package.json

//way-2:- another way change index.js with index.mjs and run the below command.
// node --experimental-modules index.mjs  for printing this specific library we need to
// use this command. Because it use the "modern import syntax javascript.""

//For using this we name file as index.mjs (here mjs extension is important for it running)
// This library is use to print the text in colorfull manner.

// It will print what directory I was in.
// console.log(__dirname);

// const path = require("path");
// console.log(path.join(__dirname, "index.js"));
// console.log(__dirname + "index.js");

// We can do same thing with this syntax also so what is the different the different
// is that it cannot resolve the ../..  this will only resolve by the "join" method
//here
// console.log(" ");
// console.log(__dirname + "/../../index.js" + "projects");
// console.log(path.join(__dirname, "../../index.js", "projects"));

// "/../.." here this is nothing but few directory backward.
// For concatenation of path this is very good:- which is "path.join()"
// Therefore "path" library is good for this purpose.
// Here this "/.." is important but you see in the path code I forget to add the "/"
// But this will be automatically added by the "path" library.

// -----------------------------------------------------------------------------
// Here we writing some express code.
// This express code help us to use the build in http library(express)

/* vv.imp-->
By default, all data from the query string in a URL is received as a string in Express (and most web frameworks).
*/
const express = require ('express');
const app = express();

function sum(a, b){
    return parseInt(a) + parseInt(b);
}

app.get('/', function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const ans = sum(a, b);
    // v.imp-> whenever you send the response make sure it is string not a number
    // bcs browser some time refer it as status code.
    res.send(ans.toString()); 
})

app.listen(3000);

//This will be use in browser to send the request
// http://localhost:3000/?a=2&b=3  (you can use query parameter like this as a = 2
// & b = 3) here 

// Also we can use the postman for this

/*
? starts the query parameter section.
keyword=books is a key-value pair.
& is used to separate multiple parameters.
sort=price is another key-value pair.
## In over example we have a and b as key value pair
*/

// ## Extra:- to find your pc ip we use:- ipconfig command