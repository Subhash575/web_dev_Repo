// Assignment of Express.
/*
**You need to create 4 routes (4 things that the hospital can do)**
1.GET - User can check how many kidneys they have and their health 
2.POST - User can add a new kidney**
3. PUT - User can replace a kidney, make it healthy**
4. DELETE - User can remove a kidney**
*/
const express = require('express');
const app = express();

let user = [{
    name:'Suraj',
    kidneys : [{
        healthy:'true'
    },
    {
        healthy: 'false'
    },
    {
        healthy : 'true'
    }
    ]
}];

// 1. get method
// In case of get request we generally use the "query parameter"
app.get('/', function(req, res){
    const NoOfKidneys = user[0].kidneys;
    let NoOfhealthyKidneys = 0;
    
    const totalKidneys = NoOfKidneys.length;
    for(let i = 0; i < NoOfKidneys.length; i++){
        if(NoOfKidneys[i].healthy=== 'true'){
           NoOfhealthyKidneys = NoOfhealthyKidneys + 1; 
        }
    }
    const NoOfUnhealthyKidneys =   totalKidneys- NoOfhealthyKidneys;
    
    res.json({
        totalKidneys,
        NoOfhealthyKidneys,
        NoOfUnhealthyKidneys
    });
 
});

// 2. post method
// In case of post we generally send information in the body as
// const isHealthy = req.body.ishealthy  //remmber here "ishealthy" is the json present
// in the body send by the client to the server
// vv.imp point to remember before using req.body we need to write
// app.use(express.json());

app.post('/', function(req, res){
    const newKidney = {healthy:'true'};
    user[0].kidneys.push(newKidney);
    res.json({msg : "added kidney" })
})

//3. put method
app.put('/', function (req, res) {
    const NoOfKidneys = user[0].kidneys;
    let cnt = 0;
     for(let i = 0; i < NoOfKidneys.length; i++){
        if(NoOfKidneys[i].healthy=== 'false'){
            cnt++;
           NoOfKidneys[i].healthy = 'true';
           break;
        }
    }
    if(cnt > 0){
         res.json({msg :"kidney is replace"})
        
    }else{
        res.json({ msg :"all kidney is healthy"})
    }
  
})

// 4. delete method
app.delete('/', function(req, res){
    const NoOfKidneys = user[0].kidneys;
    let flg = 0;
    for(let i = 0; i < NoOfKidneys.length; i++){
        if(NoOfKidneys[i].healthy=== 'false'){
            flg +=1;
            // We can use splice method to delete items at particular index.
            NoOfKidneys.splice(i, 1);
            break;
        }
    }
    if(flg > 0){
        res.send("unhealthy kidney is removed");
    }
    else{
        // res.send("No unhealthy kidney present");
        res.status(411).json({msg : "You have no unhealthy kidneys"});
    }
//Instead of writing else we can use the status code which say that there is no
//healthy kidneys in  all the http methods.
})

app.listen(3000);

