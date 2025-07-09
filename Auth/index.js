const express = require('express');
const app = express();

const users = [];

function generateToken(){
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A',
    'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6',
    '7', '8', '9'];
    let token = "";
    for(let i = 0; i < options.length; i++){
        token += options[Math.floor(Math.random()*options.length)];
    }
    return token;
}


app.use(express.json());
// In case of express/any backend  one point to remember is that always send response back
// otherwise it will create the problems because website not go anywhere further.
app.post('/signup', (req, res)=>{
    
    const username = req.body.username;
    const password = req.body.password;
    
    //We store the user information in the database in generally but here we not using
    //the database instead we using the local memory/global variable for storing the
    //user information.
    users.push({username, password});
    
    res.json({
        message: "You have signed up"
    })
    console.log(users);
});

app.post('/signin', (req, res)=>{
//learn find function then work on this.
   const username = req.body.username;
   const password =  req.body.password;

   const user = users.find((user)=> user.username === username && 
   user.password == password);

   if(user){
    // Remember when user signin we send back the token(imp to understand)
    //therefore here we generate the token and send to the user 
    const token = generateToken();
    user.token = token;
    console.log(user);
    res.send({token});
   }else{
       res.status(403).json({
        message: "invalid username and password"
       })
   }
   //siginup two users and signin one user to check how array changes in the console.
   console.log(users);
});

// In last endpoint what happen is user send the token in headers to the server and
// server identify that person by it token(that how real application work)
app.get('/me', function(req, res){
    const token = req.headers.token;
    const user = users.find((user)=>user.token === token);
    if(user){
        res.json({user});
    }else{
        res.json({message : "Token is invalid"});
    }
})

app.listen(3000, ()=>{
    console.log("server start at port 3000");
})

