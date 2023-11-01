const body = document.querySelector("body");

const containerForButtons = document.createElement("div");
const resultsContainer = document.createElement("div");
const scoreContainer = document.createElement("div");
const winnerContainer = document.createElement("div");

scoreContainer.id = "score-container";
body.appendChild(scoreContainer);

winnerContainer.id = "winner-container";
body.appendChild(winnerContainer);

containerForButtons.id = "button-container";
body.appendChild(containerForButtons);

resultsContainer.id = "results-container";
body.appendChild(resultsContainer);

const buttonRock = document.createElement("button");
const buttonPaper = document.createElement("button");
const buttonScissors = document.createElement("button");

buttonRock.textContent = "Rock";
buttonPaper.textContent = "Paper";
buttonScissors.textContent = "Scissors";

buttonRock.classList.add("button-rock");
buttonPaper.classList.add("button-paper");
buttonScissors.classList.add("button-scissors");

containerForButtons.appendChild(buttonRock);
containerForButtons.appendChild(buttonPaper);
containerForButtons.appendChild(buttonScissors);

buttonRock.addEventListener("click", () => {
  playRound("Rock", getComputerChoice());
});
buttonPaper.addEventListener("click", () => {
  playRound("Paper", getComputerChoice());
});
buttonScissors.addEventListener("click", () => {
  playRound("Scissors", getComputerChoice());
});

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
  let roundResult = "";
  winnerContainer.textContent = "";
  if (playerSelection === "Rock") {
    if (computerSelection === "Rock") {
      roundResult = "It is a tie";
    } else if (computerSelection === "Scissors") {
      userScore += 1;
      roundResult = "Computer Lost! Rock beats Scissors";
    } else if (computerSelection === "Paper") {
      computerScore += 1;
      roundResult = "You Lost! Paper beats Rock";
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      computerScore += 1;
      roundResult = "You Lost! Rock beats Scissors";
    } else if (computerSelection === "Scissors") {
      roundResult = "It is a tie";
    } else if (computerSelection === "Paper") {
      userScore += 1;
      roundResult = "Computer Lost! Scissors beats Paper";
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      userScore += 1;
      roundResult = "Computer Lost! Paper beats Rock";
    } else if (computerSelection === "Scissors") {
      computerScore += 1;
      roundResult = "You Lost! Scissors beats Paper";
    } else if (computerSelection === "Paper") {
      roundResult = "It is a tie";
    }
  }
  resultsContainer.textContent = `You chose ${playerSelection}, the Computer chose ${computerSelection}. ${roundResult}`;

  scoreContainer.textContent = `USER:${userScore} VS COMPUTER:${computerScore}`;
  announceWinner();
}

function announceWinner() {
  if (userScore === 5) {
    winnerContainer.textContent = `You Won!`;
    endGame();
  } else if (computerScore === 5) {
    winnerContainer.textContent = "Computer Won!";
    endGame();
  }
}
function endGame() {
  userScore = 0;
  computerScore = 0;
}
