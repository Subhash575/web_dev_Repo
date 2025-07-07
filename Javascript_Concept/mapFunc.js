// Q:- Given an array give me the new array which every value is multi by 2

// method 1:- normal way

const arr = [1, 2, 3, 4, 5, 6];

const newArry = [];

for(let i = 0; i < arr.length; i++){
    newArry[i] = arr[i]*2;
}

console.log(newArry);

//method 2: In javascript we use the map function
//remember map exist as function in the array class
//map function
const input = [3, 6, 9, 12, 15];

// function transform(i){
//     return i*2;
// }
// const res = input.map(transform);
//or

//   below is more cleaner way
const res = input.map(function(i){
    return i*2;
}) 
console.log(res);