//try...catch is used for error handling in JavaScript. It helps catch and handle runtime errors so your program doesn't crash.

//example 1;- By default below line of code show error bcs value is not define.

// let a = 5;
// console.log(a)
// let b = value
// console.log("Hi there")

//If we use try and catch it doesn't show error.

try {
  let a = 5;
  console.log(a);
  let b = value;
} catch (err) {
  console.log(err.message);
} finally {
  console.log("It will always run");
}
//finally always run in try-catch block

console.log();

// Real-world example.
function parseUserData(jsonString) {
  try {
    const user = JSON.parse(jsonString); //Here we converting string into the json
    console.log("username :" + user.name);
  } catch (e) {
    console.log("Invalid JSON :" + e.message);
  }
}

parseUserData('{"name": "John"}'); //It is valid-->It is string
parseUserData('{"name": Sonam'); //It is invalid

/*
Important Notes:
try only catches runtime errors, not syntax errors.
catch(error) gives access to the error object, which has .message, .name, etc.
Don't use try...catch for normal flow control — use it only where necessary.
*/
