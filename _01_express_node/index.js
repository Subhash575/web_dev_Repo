// Here we are going to use the "express library" which is the external library.
//We can install the exppress library using command:- npm install express.
//Express library is specifically for creating HTTP(Hypertext Transfer Protocol) Server.
//We can also able to create the HTTP server from the scratch. By reading the
//documentation:-  https://datatracker.ietf.org/doc/html/rfc2616
//For express library link:- https://www.npmjs.com/package/express

const express = require("express");
const app = express();

//route handlers
// Here route handlers on the '/' route for the GET method.
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  // res.send("Hello World from the post end point");
  // We can send html also.
  res.send("<b> my Star </b>");
});
// You can see this on postman

//another route
app.get("/asd", (req, res) => {
  res.json({
    name: "Subhash",
  });
  //We can send json(javascript Object Notation).
});

app.listen(3000); //which port
