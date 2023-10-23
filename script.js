//Randomly return either Rock, Paper or Scissors
function getComputerChoice() {
  let choice = Math.random() * 3;
  if (choice <= 1) {
    return (choice = "Rock");
  } else if (choice <= 2) {
    return (choice = "Paper");
  } else {
    return (choice = "Scissors");
  }
}
getComputerChoice();

//Function that plays a single round of Rock Paper Scissors

function playRound(playerSelection, computerSelection) {
  //Make input data case-insensitive
  let playerChoice = playerSelection.toLowerCase();
  let computerChoice = computerSelection.toLowerCase();

  // Return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
  //If playerChoice has a "rock" add three different posibilities(Rock,Paper,Scissors) of a computerChoice
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      console.log("It is a tie bro");
    } else if (computerChoice === "scissors") {
      console.log("Computer Lost! Rock beats Scissors");
    } else if (computerChoice === "paper") {
      console.log("Player Lost! Paper beats Rock");
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("Player Lost! Rock beats Scissors");
    } else if (computerChoice === "scissors") {
      console.log("It is a tie bro");
    } else if (computerChoice === "paper") {
      console.log("Computer Lost! Scissors beats Paper");
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("Computer Lost! Paper beats Rock");
    } else if (computerChoice === "scissors") {
      console.log("Player Lost! Scissors beats Paper");
    } else if (computerChoice === "paper") {
      console.log("It is a tie bro");
    }
  } else {
    console.log("Invalid input");
  }
}
playRound("Rock", getComputerChoice());
