let UserScore = 0;
let ComputerScore = 0;

const choices = document.querySelectorAll(".choice");
console.log(choices)


choices.forEach((item) => {
    item.addEventListener("click", (e) => {
        console.log(e.target.name)
    })
})




// choices.addEventListener("click", (event)=>{
//     // console.log(event.target.name)
//     let point = event.target.name

//     if(point==="rock"){
//         console.log("Rock Rahul")
//     }else if(point=== "paper"){
//         console.log("paper Rahul")
//     }else if(point=== "scissor"){
//         console.log("scissor Rahul")
//     }
// })