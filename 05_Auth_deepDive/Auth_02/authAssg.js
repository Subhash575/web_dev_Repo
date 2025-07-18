/*
Can you try creating a middleware called auth that verifies if a user is logged in and ends the request early if the user isn’t logged in?
*/
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ashwuiwisjhkdiuewsuyw33";

//we need three endpoint :- signup, signin, me
app.use(express.json());

const users = [];

//We are creating the logger middleware which log the method
//By using app.use() It will become the global middleware.
app.use(function(req, res, next){
    console.log(req.method + "req come");
    next();
})

//vvvv.impt to understand
//If some one go to the "/" or localhost:3000 endpoint what we do is we return our
//frontend file from the backend itself so that our frontend and backend are host on the
//same port therefore there is no problem of cors
//here we use __dirname:-> Which contain the current directory path
//here path is:- D:\HP_pavillion\myWebDevSource\Auth_deepDive\Auth_02

//After runing the backend code of this file the server start at port 3000
//you need to hit the endpoint:- localhost:3000/ 
// (In the browser so that you can see your website)
// Let for example if you hit the localhost:3000/me endpoint it will return the json

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

//we send username and password
app.post('/signup', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    //first we check user with this username already exist or not

    // const check = users.find((user)=>user.username == username);
    // if(check){
    //     res.json({message : "user is already exist"});
    // }

    users.push({
        username: username,
        password: password
    })

    // If key and value have the same name we can write this.
    // users.push({
    //     username,
    //     password
    // })
    
    res.json({
        message : "you are signup"
    })

})

// here we again send username and password and verfiy in our in memory database
// and return the token
app.post('/signin', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find((user)=>user.username === username
    && user.password === password)

    if(user){
        const token = jwt.sign({
            username : username,
            iat : new Date().getTime()// this field show when token is issue.
        }, JWT_SECRET,{
            expiresIn : "1d"
        });
        //Here we pass the third argument also which say when our token get expire 
        res.header('jwt', token);
        res.header('random', "Subhash");
        res.json({
            token : token
        })
        // res.header('jwt', token);
        // res.header('random', "Subhash");
        // writting header after the response not sent to the client.
        
    }else{
        res.json({
            message : "enter valid username and password"
        })
    }

})


//Auth middleware which tell person is login or not according to that call the next() fn
function Auth(req, res, next){
    const token = req.headers.token;
    const decodeInfo = jwt.verify(token, JWT_SECRET);
    if(decodeInfo){
        //vvv.imp:- Line to understand here
        //here we modify the request and response data
        req.username = decodeInfo.username;
        //you can add the key by updating the req object like
        //The way of sending data from one place to another it by updating the
        //req which you see above syntax.
        next();
    }else{
        res.json({message : "You are not login"});
    }

}

// last endpoint is the "me" were we recieved the token and according to that show
// the user information
//Remember here we recieved the token in the headers.(v.imp)
//also here we use .get() method
app.get('/me', Auth, (req, res)=>{
   
    //important to understand
    const user = users.find((user)=>user.username === req.username);
    res.json({user});
})
// remember:- endpoint is not worry about the decoding the token and return something like
//res.json({message : "you are not log in"});
//It will all done by the middleware bcs most important work of middleware is
//authentication.

app.listen(3000, ()=>{
    console.log("server start at the 3000 port");
})


