//Create variables
let userChoice;
let randomNumber;
let list;
let computerChoice;

// Check for invalid input
do {
    userChoice = prompt("Please choose either Rock or Paper or Scissors");

    if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissor" && userChoice!="Rock" && userChoice !="Paper" && userChoice != "Scissor") {
        alert("Please input a valid option");
    }
} while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissor" && userChoice!="Rock" && userChoice !="Paper" && userChoice != "Scissor")


// Generate a random choice by the computer
randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);

list = ["rock", "paper", "scissor"];

computerChoice = list[randomNumber];


//Compare user input with computer choice
if (userChoice === "rock" || userChoice === "Rock") {
    if (computerChoice === "rock") {
        console.log("Computer choice was " + computerChoice +  " And Used choice was " + userChoice)
        alert("It's a tie");
    } else if (computerChoice === "paper" || computerChoice === "Paper") {
        console.log("Computer choice was " + computerChoice +  " And Used choice was " + userChoice)

        alert("You lost, good luck next time");
    } else {
        console.log("Computer choice was " + computerChoice +  " And Used choice was " + userChoice)

        alert("You won, congrats!");
    }

} else if (userChoice === "paper" || userChoice === "Paper") {
    if (computerChoice === "paper") {
        console.log("Computer choice was " + computerChoice +  " And Used choice was " + userChoice)
        alert("It's a tie");
    } else if (computerChoice === "scissor") {
        console.log("Computer choice was " + computerChoice +  " And Used choice was " + userChoice)

        alert("You lost, good luck next time");
    } else {
        console.log("Computer choice was " + computerChoice +  " And Used choice was " + userChoice)

        alert("You won, congrats!");
    }

} else if (userChoice === "scissor" || userChoice === "Scissor") {
    if (computerChoice === "scissor") {
        alert("It's a tie");
        console.log("Computer choice was " + computerChoice +  " And Used choice was " + userChoice)

    } else if (computerChoice === "rock") {
        console.log("Computer choice was " + computerChoice +  " And Used choice was " + userChoice)

        alert("You lost, good luck next time");
    } else {
        console.log("Computer choice was " + computerChoice +  " And Used choice was " + userChoice)

        alert("You won, congrats!");
    }

//check that the code cover all cases
} else {
    console.log("There is a problem with the code")
}