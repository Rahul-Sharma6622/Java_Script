let UserScore = 0;
let ComputerScore = 0;

const choices = document.querySelectorAll(".choice");
console.log(choices)

const msg = document.querySelector("#msg")

let userC = document.querySelector(".userC")
let computerC = document.querySelector(".computerC")

let UserScorepara = document.querySelector("#user-score")
let compScorepara = document.querySelector("#computer-score")



let userChoice;
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userChoice = choice.getAttribute("id")
        console.log("choice was clicked", userChoice)
        playGame(userChoice)
    })
})



const genCompChoice = () => {
    const option = ["rock", "paper", "scisssors"]
    const randomIndex = Math.floor(Math.random() * 3)  //math.floor used for remove the decimal value
    return option[randomIndex]

}

const drawGame = () => {

    msg.innerText = " Game draw play again"
    msg.style.backgroundColor = "yellow"
    msg.style.color = "white"
}

let showWinner = (userwin) => {
    if (userwin) {
        UserScore++
        UserScorepara.innerText = UserScore
        console.log("you win")
        msg.innerText = "you win";
        msg.style.backgroundColor = "green"
        msg.style.color = "white"

    }
    else {
        ComputerScore++;
        compScorepara.innerText = ComputerScore

        msg.innerText = "you lose"
        msg.style.backgroundColor = "red"
        msg.style.color = "white"
    }

}


let comChoice
const playGame = (userChoice) => {
    //generate computer choice
    comChoice = genCompChoice()
    console.log("user choice = ", userChoice)
    console.log("computer choice = ", comChoice)
    userC.innerText = userChoice
    computerC.innerText = comChoice

    if (userChoice === comChoice) {
        drawGame();
    } else {
        let userwin = true;
        if (userChoice === "rock") {
            //scissors,paper
            userwin = comChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock scissors
            userwin = comChoice === "scissors" ? false : true;

        } else {
            //rock,paper
            comChoice === "rock" ? false : true;
        }
        showWinner(userwin)
    }


}



if (userChoice === comChoice) {
    drawGame();
}

