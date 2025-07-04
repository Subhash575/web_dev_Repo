const express = require('express');
const app = express();

//We inventually learn how to add the better routing, database and middleware
// We not need middleware but it provide cleaner syntax to 
// work with and provide more security and authenication

// In this way By using the global middleware we can able to count no of request.
let requestCount = 0;
app.use(function(req, res, next){
    requestCount = requestCount + 1;
    next();
})

app.get('/add',function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({ans: a+b});
})
app.get('/subtract',function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({ans: a-b});
})
app.get('/multiply',function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({ans: a*b});
})
app.get('/divide',function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({ans: a/b});
})

app.get('/requestCnt', function(req, res){
    res.json({requestCount});
})

app.listen(3000, ()=>{
    console.log("server start at port 3000");  
})