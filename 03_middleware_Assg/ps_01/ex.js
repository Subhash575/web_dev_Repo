// Here we use the "express.json()" middleware for body parsing.
// Behind the scene "express.json()" use "body-parser()" external library.

// To remove the problem of the cross-origin(domain) we use the cors external library
const express = require('express');
const app = express();
// const cors = require('cors');
// app.use(cors()); 
// If you not mension any domain then all the frontend can able to
// send the request to our backend
// or
// mension domain
// OR allow only specific origin
// app.use(cors({
//   origin: 'http://localhost:5173'
// }));

//We can host frontend and backend on the same domain name.
//by this way.(important)
app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/index.html");
})
//After that you need to the start the server and go to the localhost:3000/ directly
//in the browser than you can see that you backend or frontend or host on the same
//domain.(v.v.imp) to understand.

app.use(express.json());
app.post('/sum', (req, res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({ans : a + b });
})


app.listen(3000, ()=>{
    console.log("server start at 3000 port");
})