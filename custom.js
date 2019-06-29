//Create variables
let userChoice;
let randomNumber;
let list;
let computerChoice;

// Check for invalid input
do {
    userChoice = prompt("Please choose either Rock or Paper or Scissors");

    if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissor") {
        alert("Please input a valid option");
    }
} while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissor")


// Generate a random choice by the computer
randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);

list = ["rock", "paper", "scissor"];

computerChoice = list[randomNumber];


//Compare user input with computer choice
if (userChoice === "rock") {
    if (computerChoice === "rock") {
        alert("It's a tie");
    } else if (computerChoice === "paper") {
        alert("You lost, good luck next time");
    } else {
        alert("You won, congrats!");
    }

} else if (userChoice === "paper") {
    if (computerChoice === "paper") {
        alert("It's a tie");
    } else if (computerChoice === "scissor") {
        alert("You lost, good luck next time");
    } else {
        alert("You won, congrats!");
    }

} else if (userChoice === "scissor") {
    if (computerChoice === "scissor") {
        alert("It's a tie");
    } else if (computerChoice === "rock") {
        alert("You lost, good luck next time");
    } else {
        alert("You won, congrats!");
    }

} else {
    console.log("What the hell?")
}