// filter function in Js
//Given an input array, give me back all the even value from it.

//old way:-

let arr = [1, 2, 3, 4, 5, 6];
let newArr = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i]%2 == 0)
        newArr.push(arr[i]);
}
console.log(newArr);

//new way:- Using the filter logic

const input = [10, 12, 5, 8, 24, 7];

//Bases on bool value it filter the result
// function filterLogic(i){
//     if(i%2 == 0)
//        return true;
//     else
//        return false;
// }

// const res = input.filter(filterLogic);

//or 

//using callback 
const res = input.filter(function filterLogic(i){
    if(i%2 == 0)
       return true;
    else
       return false;
});

console.log(res);