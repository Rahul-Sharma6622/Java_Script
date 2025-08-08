//loop  and string in JS.
//for loop
//while loop
//do while loop


// console.log("Apna college");
// console.log("Apna college");
// console.log("Apna college");
// console.log("Apna college");
// console.log("Apna college");


//using for loop

// for(let i = 1;  i<=10; i++){
//     console.log("apna college");  //5 times execute
// }

// console.log("loop has ended");


//sum of first 1 to 5 numbers.


// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//     sum = sum + i;

// }
// console.log(`sum of 1 to 5 is ${sum}`);

//print 1 to 100 number

// for(let i = 1; i<=10;i++){
//     console.log(`i = ${i}`);
// }

//while loop

/*
let i = 1;
while(i<=5){
   console.log(i);
   i++;
}
*/

//do while loop

// let i =20;
// do{
//     console.log("apna college");
//     i++;
// }while(i<=10);

//for-of loop

// let str = "Trichosanthesdioica";
// for(let value of str){
//     console.log(`value is = ${value}`);
// }


//for- in loop
//this used for object

// let student = {
//     name:"Rahul sharma",
//     age:19,
//     cgpa:8.9,
//     ispass:true,
// };

// for(let key in student){
//     console.log(`value of student is ${key}`);
//     console.log(`key = ${key},value = ${student[key]}`);

// }

//1.practice question
//print all even numbers from 0 to 100.

// for(let i = 0;i<=10;i++){
//     if(i%2==0){
//         console.log("even number", i);
//     }
// }

//2. practice question.
//create a game where you start with any random game number . ask to keep guessing the game number until the user enters correct value.

//  let gameNumber = 25;
//  let userNumber = prompt("guess the game number");
//  console.log(userNumber);

//  while(userNumber != gameNumber){
//   userNumber =  prompt("you entered wrong number guess again :")

//  }
//  console.log("congratulation you entered the right number");


//string in JS.

// let str = " Rahul sharma ";
// let str1 = ' hello world';
// console.log(`${str} ${str1} `);
// console.log(str[1]) //R


//template literals.
// let specialString = `this is a simmple string`;
// console.log(specialString);


//escape characters
// console.log("apna\ncollege");  //next line

// console.log("Rahul\tSharma");   //space

// let str2 = "Rahul\tsharam";
// console.log(str2.length);  //12

//string method in js.

// let str3 = "hello world";
// console.log(str3.toLocaleUpperCase());
// console.log(str3.toLowerCase());
// console.log(str3.trim())  //this method remove whitespaces from starting to ending.

// console.log(str3.slice(1, 4));  //ell
// console.log(str3.replace("h", "y"))  //yellow world


//practice question.
//prompt the user to enter full name.Generate a username for them based on the input start username with @,followed by their full name and ending with the fullname length.
//eg. user name = "rahulsharma",username should be  "@rahulsharma11"


// let fullname = prompt("enter full name without space");
//  let username = "@" + fullname + fullname.length;
//  console.log(username);

