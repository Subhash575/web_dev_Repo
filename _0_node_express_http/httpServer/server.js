/*
# Create an HTTP Server
It should have 4 routes
1. http://localhost:3000/multiply?a=1&b=2
2. [http://localhost:3000/add?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
3. [http://localhost:3000/divide?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
4. [http://localhost:3000/subtract?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
Inputs given at the end after `?` are known as query parameters (usually used in GET requests)
The way to get them in an HTTP route is by extracting them from the `req` argument (req.query.a , req.query.b)
*/

const express = require("express");
const app = express();

// Four route/endpoint are mulitply, add, divide and subtract
// Here we using the query parameter.
// For dynamic route like: localhost:3000/multipy/10/20  here 10 and 20 is our a and b
// which will be our dynamic route(v.imp) to understand. 
// To solve this problem we use the following way:-  "/multiply/:a/:b"

// app.get("/multiply", function(req, res){
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.status(200).json({ans: a*b});
// } )
app.get("/multiply/:a/:b", function(req, res){
   const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.status(200).json({ans: a*b});
} )

// In case of addition remember it is the string data therefore first convert it into
// number than use it.
// app.get("/add", function(req, res){
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.status(200).json({ans: a+b});
// } )

app.get("/add/:a/:b", function(req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.status(200).json({ans: a+b});
} )

// app.get("/divide", function(req, res){
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.status(200).json({ans: a/b});
// } )

app.get("/divide/:a/:b", function(req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.status(200).json({ans: a/b});
} )

// app.get("/subtract", function(req, res){
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.status(200).json({ans: a-b});
// } )

app.get("/subtract/:a/:b", function(req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.status(200).json({ans: a-b});
} )

app.listen(3000, ()=>{
    console.log("Server start at port no 3000");
});
