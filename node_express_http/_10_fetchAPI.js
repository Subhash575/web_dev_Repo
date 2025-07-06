const axios = require('axios');
// promisify version using the fetch API
// function callRequest(){
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(res=>res.json())
//     .then(data=>console.log(data));
// }

// Using async and await
// async function callRequest(){
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     const data = await res.json();
//     console.log(data);
// }


//POST Request
// async function callRequest(){
//     const res = await fetch("https://www.postb.in/1751818115880-9571354349609", {
//         method: "POST",
//         body: {
//             username : "Subhash009456",
//             password : "780564"
//         },
//         headers: {
//             "Authorization" : "Bear 123"
//         }
//     })
//     //  const contentType = res.headers.get("content-type");
//     // console.log("Content-Type:", contentType);
//     //It returning the text. By running above two comment statement you can understand.
//     //and comment the below statement
//     // const data = await res.json();  
//     // It is not json therefore above line show error when log.
//     // therefore convert it into the text
//     const data = await res.text();
   
//     console.log(data);
// }



// Another way is using the axios library
// It is cleaner way to write syntax than another way.
// In case of fetch you need to write two time the await but here you need to write only
// one time. 
//Bcs here you don't need to convert the data given by the server into JSON bcs recieve
//data is in the json format.
// async function callRequest(){
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
//     console.log(res.data.title);
// }



//POST Request
//We need to know about the:-
//changing request method
//send body---->this is the second argument(body)
//send headers---->third argument is header key

// async function callRequest(){
//     const res = await axios.post("https://httpdump.app/dumps/0d257a30-f130-4ec5-b8bb-9c0d4e45c8f6", {
//             username : "Subhash009456",
//             password : "780564",
//         },
//         {
//            headers:{
//             "Authorization" : "Bearer 123"
//            }
//         }
//        );
//     console.log(res.data);
// }



// For checking your http request work or not use this website:-
// httpdump.app
// This will give me the endpoint if I send data there it will log every things
// you can send get ,post etc many request and also send the query parameter
// https://httpdump.app/dumps/0d257a30-f130-4ec5-b8bb-9c0d4e45c8f6/?name:subhash

// async function callRequest(){
//     const res = await axios.get(" https://httpdump.app/dumps/0d257a30-f130-4ec5-b8bb-9c0d4e45c8f6/?name:subhash",{
//         headers:{
//             "Authorization" : "Bearer 123"
//               }
//     });
// }

// You can go to the website of httpdump and see the request log there
// (important point):- You cannot send body in case of only "get" request, 
// but If you want to send the header
// than header need to be second argument in the get request and you can also
// able to send the query parameter.


//It is the more cleaner way
async function callRequest(){
    const response = await axios({
        url : "https://httpdump.app/dumps/0d257a30-f130-4ec5-b8bb-9c0d4e45c8f6/?name:subhash",
        method : "POST",
        headers : {
            Authorization : "Bearer 456",
        },
        // for body here we use the data
        data : {
            username : "Subhash",
        }
    });

}

callRequest();

// We can go on the axios documentation for learn more concept according to need or use.