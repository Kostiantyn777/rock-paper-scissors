function getComputerChoice() {
  let choice = Math.random() * 3;
  if (choice <= 1) {
    console.log((choice = "Rock"));
  } else if (choice <= 2) {
    console.log((choice = "Paper"));
  } else {
    console.log((choice = "Scissors"));
  }
}
getComputerChoice();
