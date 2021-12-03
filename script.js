// let playerSelection = prompt('Type your choice of rock, paper or scissors.');

let playerSelection = 'rock';
playerSelection = playerSelection.toLowerCase();

function computerPlay() {
  const rps = ['rock', 'paper', 'scissors'];

  // Returns a random integer from 0 to 2:
  let random = Math.floor(Math.random() * rps.length);

  // uses random function above to choose and return rock, paper or scissors
  return rps[random];
}

let computerSelection = computerPlay();

function playGame(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie");
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
  
  }
    
   
}
  
  playGame(playerSelection, computerSelection);
