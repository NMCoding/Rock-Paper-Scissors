// let playerSelection = prompt('Type your choice of rock, paper or scissors.');

let playerSelection = 'rock';

playerSelection = playerSelection.toLowerCase();

function computerPlay() {
  const rps = ['rock', 'paper', 'scissors'];

  let random = Math.floor(Math.random() * rps.length);

  return rps[random];
}

let computerSelection = computerPlay();

{
  /* <div class="button-box">
  <button id="Rock">Rock</button>

  <button id="Paper">Paper</button>

  <button id="Scissors">Scissors</button>
</div>; */
}

function playGame(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie");
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    console.log(
      'Computer Wins. ' + computerSelection + ' beats ' + playerSelection
    );
  } else {
    console.log('You Lose');
  }
}
playGame(playerSelection, computerSelection);
