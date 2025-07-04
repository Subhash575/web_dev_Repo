// Here we use the "express.json()" middleware for body parsing.
// Behind the scene "express.json()" use "body-parser()" external library.
const express = require('express');
const app = express();


app.use(express.json());
app.post('/add', (req, res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({ans : a + b });
})

app.listen(3000, ()=>{
    console.log("server start at 3000 port");
})