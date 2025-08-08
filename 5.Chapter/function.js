//function in JS.
//block of code that performs a specific task,can be invoked whenever needed.

//function definition:

//calling or invoked of the function
// myFunction();
// myFunction();

//function with parameter

// function helloPrint(msg) {
//     //parameter
//     console.log(msg);
// }
// helloPrint("Goog morning Rahul"); //argument

//sum of 2 number
// function sum(x,y){
//     console.log(x+y);
// }
// sum(40,50);


//Arrow function
// const sum=(a,b)=>{
//      console.log(a+b);
// }
// sum(60,70);


// let mul = multiply=(x,y)=>{
//     console.log(x*y);
// }
// multiply(25,25);

// const hello = ()=>{
//     console.log("Namste bharat");
// }
// hello();


//practice set 
//create a function using the function keyword that takes a string as an argument and return the number of vowels in the string.

// function countVowels(str) {
//     //ApnaCollege
//     let count = 0;
//     for (const char of str) {
//         if (char == "a" || char == "i" || char == "o" || char == "u" || char == "e"){
//              count++;
//         }
         
       
//     }
//      console.log(count);
// }
// countVowels("apnacollege");



//forEach loop in arrays.
// let arr= [1,2,4,56,7];
// arr.forEach(function printVal(val){
//     console.log(val);
// });


// let city = ["pune ","delhi","bihar"];
// city.forEach((value)=>{
//     console.log(value.toLocaleUpperCase());
// });


//practice set
//for a given array of numbers print the square of each value using theforEach loop.

// let nums = [2,3,4,6];
// nums.forEach((num)=>{
//     console.log(num*num);  //num**2;
// })


//some more array methods.
//map method

//filter method.
// let arr = [2,4,7,9,10];
// let evenArr = arr.filter((val)=>{
//     return val%2===0;

// });
// console.log(evenArr);
// console.log(arr);  //no change in original array.

//Reduce method
// let digit = [1,23,5,6];
// let output= digit.reduce((res,currentVal)=>{
//     return res+currentVal;
// });
// console.log(output); //35

let n =prompt("enter the number");
let arr= [];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum = arr.reduce((previus,current)=>{
    return previus+current;
});
console.log("sum is",sum);