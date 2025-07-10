const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
//Here we generate the key:- which is the random string
//here "JWT_SECRET" is the common name for the key
const JWT_SECRET = "Ilovemyworkraddjkedjkdk";

// In JWT we convert the username into JWT(Json Web Token)
const users = [];

// function generateToken(){
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
//     'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A',
//     'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
//     'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6',
//     '7', '8', '9'];
//     let token = "";
//     for(let i = 0; i < options.length; i++){
//         token += options[Math.floor(Math.random()*options.length)];
//     }
//     return token;
// }


app.use(express.json());

app.post('/signup', (req, res)=>{
    
    const username = req.body.username;
    const password = req.body.password;
    
    users.push({username, password});
    
    res.json({
        message: "You have signed up"
    })
    console.log(users);
});


// This is our signin endpoint logic after using the jsonwebtoken(jwt)
app.post('/signin', (req, res)=>{
   const username = req.body.username;
   const password =  req.body.password;

   const user = users.find((user)=> user.username === username && 
   user.password == password);

   if(user){
    //jwt.sign():- It create the token not encrypt it.
    //here we convert the username to token using "JWT_SECRET".
    const token = jwt.sign({
        username: username,
    }, JWT_SECRET);

    // user.token = token; 
    // since it is the stateless token(jwt) therefore we don't need to store(v.imp)
    // Here token itself store it state. therefore we don't need to store it in
    // our database.
    console.log(user);
    res.send({token});
   }else{
       res.status(403).json({
        message: "invalid username and password"
       })
   }
  
   console.log(users);
});

// This endpoint verify the user by it token
app.get('/me', function(req, res){
    const token = req.headers.token; // here it get JWT
    const decodedInfo = jwt.verify(token, JWT_SECRET);
    const username = decodedInfo.username;
    // here we write decodedInfo.username; bcs intially username have key username
    // you can see in the signin endpoint or below code mension
    // const token = jwt.sign({
        // username: username,
    // }, JWT_SECRET);
    // not uncomment the above token logic it is only for understanding
     

    //Intially in our in-memory database we verify the token which is store inside the
    //users[] array but bcs of JWT we don't need to store the token instead we convert
    //our username into token with the help of jsonwebtoken library and when user hit
    //the "/me" this endpoint it simply convert the token into the username again this
    // token is send by the user(browser). with the help of username we get the 
    // information about the user and show the user it data that how json webtoken work.
    const user = users.find((user)=>user.username === username);
    if(user){
        res.json({user});
    }else{
        res.json({message : "Token is invalid"});
    }
})

app.listen(3000, ()=>{
    console.log("server start at port 3000");
})

/*
##Some note:-
You can use same token for two website as well . Let say we hit the backend of [harkirat.classax.co.in](http://harkirat.classax.co.in) and it give us the token during signin. We use the same token in the [app.100xdevs.com](http://app.100xdevs.com) . In this way we login or logout of the different website simultaneously.
##remember token is usually store inside the browser.

In our jwt/token approach when we signin server/Backend automatically send us the token. Which we explicity store in the browser and send the token in every subsequent request.

In case of cookie approach  the cookie is automically save by the browser  and it send with every subsequent request. cookie is send in the header

Remember cookie is browser specific concept you can see in the above image.
*/