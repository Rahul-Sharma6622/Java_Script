
//Attributes
//getAttributes(attr)
//setSttributes(attr,value)

// let div = document.querySelector("div");
// console.log(div);

//  let value = div.getAttribute("id");
//  console.log(value);

//  let para = document.querySelector("p");
//  console.log(para.getAttribute("class"));

//set attributes
//  let para = document.querySelector("p");
//  console.log(para.setAttribute("class","pragraph"));


//style attributes
// let div = document.querySelector("div");
// div.style.backgroundColor = "red"
// div.style.backgroundColor = "purple"
// div.style.fontSize = "25px"
// div.innerText = " Rahul sharma"
// div.style.visibility = "hidden"


//some method
// let newButton = document.createElement("button");
// newButton.innerText = "click me"

// let div = document.querySelector("div")
// div.append(newButton)
// div.prepend(newButton)
// div.before(newButton)
// div.after(newButton)

// let newHeading = document.createElement("h1")
// newHeading.innerText = " Welcome to JavaScript"
//  document.querySelector("body").prepend(newHeading)

//delete element
// let para = document.querySelector("p");
// para.remove();

//practice set
//create a button element give it text "click me" backgruound color of red and text color of white
//insert the button as the first element inside the body tag.

let newButton = document.createElement("button");
newButton.innerText = "click me";

newButton.style.backgroundColor = "red";
newButton.style.color = "white";


document.querySelector("body").prepend(newButton);


//practice set 
//create a <p> tag in html and it a class and some styling.
//now create a new class in CSS and try to append this class to the <p> element
//did you notice how you overwrite the class name when you add a new sole this problem using classlist


let newpara = document.querySelector("p")

//   newpara.getAttribute("class")
//   newpara.setAttribute("class","content")
newpara.classList.add("content")
