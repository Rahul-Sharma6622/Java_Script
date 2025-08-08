//Document object model.
// alert("Welcome to javascript");
// console.log("hello");
// console.dir(window.document);

//dom manipulation
// let heading = document.getElementById("heading");
// console.dir(heading);
// let para = document.getElementsByClassName("para");
// console.dir(para);

// let paragraph = document.getElementsByTagName("p");
// console.dir(paragraph);

// let hello = document.querySelector("#heading");
// console,console.log((hello));

//  let child = document.querySelector("div").children;
//  console.log(child);

//practice set 
//1.create a h2 heading element with text "hello javascript".append "from apna college student" to this text using js.


let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText =h2.innerText +   "    from Apna College student";
console.dir(h2.innerText);


//practice set 
//create 3 div with common class name "box".access them and add some unique text to each of them.

let divs = document.querySelectorAll(".box");
divs[0].innerText = "new unique value 1";
divs[1].innerText = "new unique value 2";
divs[2].innerText = "new unique value 3";
console.log(divs);