console.log("Hello World!!");
console.log("I am Rahul sharma");
console.log("I am frontend developer");
console.log("I love java_script");


// VARIABLES IN JS.

// name = "Rahul sharma";
// console.log(name);
// age = 19;
// console.log(age);
// price = 23.00;
// console.log(price);

// let,const,and var keyword:
//  mostly let keyword used 

let name = "virat";
let age = 19;
let price = 23.00;
console.log(name);

const pi = 3.14;  //const keyword means fixed values.
console.log(pi);

// DATA TYPES IN JS.
//1.PRIMITIVE DATA TYPES(7) : number,string,boolean,undefined,null,binint,symbol:
//2. NON PRIMITIVE DATA TYPES : object,array:

// you can check any variables data types using typeof keyword.

let a = 20;
console.log(typeof a);   //number
let NAME = "anushaka sharma";
console.log(typeof NAME);   //string
let isGreat = true;
console.log(typeof isGreat);  //boolean
let x;
console.log(typeof x);  //undefined
let y = null;
console.log(typeof y); //object
let h = BigInt(123);
console.log(typeof h); //bigint
let g = Symbol("hello");
console.log(typeof g); //symbol

//WHAT IS OBJECT = object is a collection of values.
//key : values


const student = {
    fullName: "Rahul",
    age: 19,
    cgpa: 8.9,
    isPass: true,
};
// console.log(student.age);
console.log(student["age"]);

// practice Qs.
// create a const object called "product" to store information shown in the picture.

const product = {
    name: "ballpen",
    ratting: 4,
    offers: 5,
    price: 270,
};
console.log(typeof product["ratting"]);


//Comment in JS
//comment is a part of code which is not executed.
//1.single line comment
//2.multiline comment


