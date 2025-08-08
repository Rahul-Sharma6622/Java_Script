//this is a comment.
/* this is a multiline comment */

//Operator in JS ==: Used to perform some operation on data.
//1. Arithmetic Operator , + ,- ,* ,/ ,% etc


let a = 10;
let b = 4;

console.log("a = ", a, "and  b = ", b);
console.log("a+b = ", a + b);
console.log("a-b = ", a - b);
console.log("a*b = ", a * b);
console.log("a/b = ", a / b);
console.log("a%b = ", a % b);  //modulus operator.
console.log("a**b = ", a ** b);  //exponential operator.
console.log(++b);  //unary operator.
console.log(b++);
console.log(b);

//Assignment Operator
// ==,+=,-=,*=,/=,etc

let x = 20;
let y = 2;

x += 4; //24
console.log("x = ", x);  //24
y -= 2;
console.log("y =", y);  //0
x *= 5;
console.log("x =", x);  //120

//comparision operator.
// ==,===,!=,!==,<,>,<=,>=   etc.

let r = 100;
let s = 300;

console.log(r == s);  //false
console.log(r != s);  //true
console.log(r === s); //false
console.log(r > s);  //false
console.log(r < s);   //true
console.log(r <= s);  //true
console.log(r >= s);   //false

//logical operator
//1.logical AND &&  if the both condition true answer wii come true

//2.logical OR ||  if the one condition true answer will come true

//3.logical NOT !

let z = 20;
let w = 10;

let cond1 = z > w;  //true
let cond2 = z == 20;  //true
console.log("cond1 && cond2 = ", cond1 && cond2);  //true



//Conditional Statements.
//to implement some condition in the code.

//if statement
let age = 17;
if (age >= 18) {
    console.log("you can vote");
}
if (age < 18) {
    console.log("you can not vote");
}

//if  statement
let mode = "dark";
let color;

if (mode == "dark") {
    color = "black";
}
if (mode == "light") {
    color = "white";
}
if (mode == "yellow") {
    color = "red";
}
console.log(color);

//if else statement
let AGE = 18;
if (AGE >= 18) {
    console.log("you can vote");
}
else {
    console.log("you can not vote");
}

//odd and even

let num = 40;
if (num % 2 == 0) {
    console.log("even number");
} else {
    console.log("odd number");
}

//else if statement

let limit = 18;
if (limit < 18) {
    console.log("junior");
}
else if (limit > 60) {
    console.log("senior");
} else {
    console.log("adult");
}

//ternary operator
// syntax : condition? true output:false output.

let umar = 4;

let result = umar >= 18 ? "adult" : "not adult";
console.log(result);

// search MDN Docs.

//practice questions.
//1.get user to input using promt ("enter a number:") check if the number is a multiple of 5 or not.

let input = prompt("enter  number");
if (input % 5 === 0) {
    console.log(input, "it is a multiple of 5");
}
else {
    console.log(input, "it is not a multiple of 5");
}

//2.write a code which can give grades to student according to their scores:
//80-100,grade A
//70-89, grade B
//60-69, grade C
//50-59,grade D
//0-49, grade F

let score = 81;
if (score >= 80 && score <100) {
    console.log("you got a grade A ");
} else if (score >= 70 && score <= 89) {
    console.log("yu have a grade B");
} else if (score >= 60 && score <= 69) {
    console.log("grade C");

} else if (score >= 50 && score <= 59) {
    console.log("grade D");
} else if (score === 0 && score <= 49) {
    console.log("you are fail");
}

