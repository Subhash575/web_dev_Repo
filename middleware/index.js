// #Middleware In Express
const express = require('express');
const app = express();

// ##1 Verification is done without the middleware
// func that return a boolean if the age of person is more than or equal to 14

// function ageCheck(age){
//     if(age >=14)
//         return true;
//     else
//         return false;       
// }

// ride-1

// app.get('/ride1', function(req, res){
//     const pAge = req.query.age;
//     if(ageCheck(pAge))
//        res.json({ msg : "You can ride first ride."});
//     else
//        res.status(411).json({msg:"Sorry you are not of age yet" });
// })

// ride-2

// app.get('/ride2', function(req, res){
//     const pAge = req.query.age;
//     if(ageCheck(pAge))
//        res.json({ msg : "You can ride second ride."});
//     else
//     res.status(411).json({msg:"Sorry you are not of age yet" });
//     // remember 411 is use for access denied
// })

// Are we use same age check function for both endpoint ride1 and ride2.
// but the better way is the middleware.

// ## We can use middleware to do all the check and in the final endpoint we only do
// simple work not authentication work
// Middleware divide the work and make the code easy to understand that why we 
// generally use the middleware.
// ## Same example but using middleware.

// middleware define: middleware take three parameter req, res, next
function ageChecker(req, res, next) {
    const personAge = req.query.age;
    if(personAge >=14)
        next();
    else
       res.json({msg : "you are not of age yet."});   
}

app.get('/ride1', ageChecker, function(req, res){
    res.json({ msg : "You can ride first ride."});
})

app.get('/ride2', ageChecker, function(req, res){
    res.json({ msg : "You can ride second ride."});
})

// When request call happen first control go to middleware(ageChecker) after that
// it go to the call function(req, res).

// (v.imp pt):- If I went that certain middleware goes to all the endpoints then
// we use:- app.use(ageChecker); 
// and remove ageChecker from the every endpoints(imp to understand)
// imp-pt to remember "app.use()" only trigger the endpoints below app.use();
// not above the app.use() code.
// Therefore order is very important in the middleware.

//Two way to use middleware
// #1 first write function name before callback in the endpoints
// #2 Second use the app.use(middleware-Name).
app.listen(5000, ()=>{
    console.log("Server start at port number 5000");
    
});