// const student = {
//     name : "rahul",
//     age :19,
//     marks : 80,
//     printMarks : function (){
//         console.log("marks is = ",this.marks)  //this keyword means student.marks
//     },
// };


// const employee  ={
//     calcTex(){
//         console.log("tax rate is 10%")
//     },
// };

// const karanArjun = {
//     salary : 50000,
//     calcTex(){
//         console.log("tex rate is 20%")
//     }
// };
// karanArjun.__proto__=employee;


// class and object in js.
class toyotaCar {

    constructor(brand, mileage) {
        // console.log("car was started")
        console.log("creating a object");
        this.brand = brand;
        this.mileage = mileage
    }
    start() {
        console.log("start")
    }

    stop() {
        console.log("car has stop")
    }
    setBrand(brand) {
        this.Brand = brand;
    }

}


//create a object of class

let fortuner = new toyotaCar("fortuner", 10);
console.log(fortuner);
//  console.log(fortuner.setBrand("fortuner",10));
let lexus = new toyotaCar("lexus", 15);
console.log(lexus)
//  console.log(lexus.setBrand("lexus",20));


//Inheritance in js
class person {
    eat() {
        console.log("eat")
    }
    sleep() {
        console.log("sleep")
    }
}
class engineer extends person {
    work() {
        console.log("solve problem and can build anything")
    }
}
class Doctor extends person {
    work() {
        console.log("treat patient");
    }
}
let Rahul = new engineer();
Rahul.work();
Rahul.eat();


//if child and parent have a same method,child's method will be used [method overriding]

//super keyword
// Calling parent class methods
// You can use super.methodName() to call a method from the parent class.

class Parent {
    greet() {
        console.log("Hello from Parent");
    }
}

class Child extends Parent {
    greet() {
        super.greet(); // ✅ call Parent's greet()
        console.log("Hello from Child");
    }
}

const obj = new Child();
obj.greet();

// Output:
// Hello from Parent
// Hello from Child

//practice set 
//you are creating a website for your college . crearte a class user with 2 properties name and email it also has a method called viewdata() that allow user to view wesite data

// class user {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//     viewData() {
//         console.log("secrete information")
//     }
// }

// let student1 = new user("Rahul", "rahulsharam@email.com");
// let student2 = new user("shiwam", "shiwamsharam@email.com");
// let student3 = new user("Aman", "amansharma@email.com");
// student1.viewData();
// student2.viewData();
// student3.viewData();


//practice set 
//create a new class called Admin. which inherit it from user.Add a new method called editdata to Admin that allows it to edit website data.

// class user {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//     viewData() {
//         console.log("secrete information")
//     }
// }
// class Admin extends user{
//     constructor(nmae,email){
//         super(name,email);
//     }
//     editData(){
//         console.log("new data");
//     }
// }
// let admin1 = new Admin("hello","hello@email.com")


//error handlind in js
//try and catch 

// let a = 10;
// let b = 20;
// console.log("a+b = ", a + b)
// console.log("a-b = ", a - b)
// try {
//     console.log("a+b = ", a + c)
// }
// catch (err) {
//     console.log(err)

// }
// // console.log("a+b = ",a+c)
// console.log("a*b = ", a * b)
// console.log("a/b = ", a / b)
// console.log("a%b = ", a % b)

