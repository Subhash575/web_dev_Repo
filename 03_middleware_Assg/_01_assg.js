//#1 Create a middleware function that logs each incoming 
// request’s HTTP method, URL, and timestamp to the console
const express =  require('express');
const app = express();
/*
 imp-pt to remember "app.use()" only trigger the endpoints below app.use();
 not above the app.use() code.
 Therefore order is very important in the middleware.
*/
app.use(function(req, res, next){
    console.log(`method is ${req.method}`);
    console.log(`hostname is ${req.hostname}`);
    console.log(`route is ${req.url}`);
    console.log(`current time on Server: ${new Date()}`);
    next();
})

app.get('/info', (req, res)=>{
    res.sendStatus(200);
})

app.listen(5000, ()=>{
    console.log("server start at 5000");
})

/*
What is hostname?
In Express.js, req.hostname returns the hostname part of the URL that the client used to make the request.
example:-
If the request is: https://www.example.com/products
req.hostname === 'www.example.com'
*/