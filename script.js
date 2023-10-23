//Variables to keep score of the game
let userScore = 0;
let computerScore = 0;

//Computer Randomly returns either Rock, Paper or Scissors
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

//Function that plays a single round of Rock Paper Scissors

function playRound(playerSelection, computerSelection) {
  //Make input data case-insensitive
  let playerChoice = playerSelection.toLowerCase();
  let computerChoice = computerSelection.toLowerCase();

  // Return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
  //If playerChoice has a "rock" add three different posibilities(Rock,Paper,Scissors) of a computerChoice
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      return "It is a tie bro";
    } else if (computerChoice === "scissors") {
      userScore += 1;
      return "Computer Lost! Rock beats Scissors";
    } else if (computerChoice === "paper") {
      computerScore += 1;
      return "Player Lost! Paper beats Rock";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore += 1;
      return "Player Lost! Rock beats Scissors";
    } else if (computerChoice === "scissors") {
      return "It is a tie bro";
    } else if (computerChoice === "paper") {
      userScore += 1;
      return "Computer Lost! Scissors beats Paper";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      userScore += 1;
      return "Computer Lost! Paper beats Rock";
    } else if (computerChoice === "scissors") {
      computerScore += 1;
      return "Player Lost! Scissors beats Paper";
    } else if (computerChoice === "paper") {
      return "It is a tie bro";
    }
  } else {
    return "Invalid input";
  }
}

function game() {
  //get input from the user
  let getUserInput = prompt("Please enter Rock,Paper or Scissors");
  if (getUserInput) {
    return playRound(getUserInput, getComputerChoice());
  } else {
    return "Your input is NULL.Try again";
  }
}
//Play a 5 round game
function playGameFiveTimes() {
  for (let i = 0; i < 5; i++) {
    console.log(game());
    //console.log(`User Score is ${userScore}`);
    //console.log(`Computer Score is ${computerScore}`);
  }
  // reports a winner or loser at the end.
  if (userScore > computerScore) {
    console.log(`User won: User:${userScore}-Computer:${computerScore}`);
  } else if (computerScore > userScore) {
    console.log(`Computer won: User:${userScore}-Computer:${computerScore}`);
  } else {
    console.log(`It is a tie: User:${userScore}-Computer:${computerScore}`);
  }
}
playGameFiveTimes();
