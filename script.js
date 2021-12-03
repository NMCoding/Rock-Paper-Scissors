// let playerSelection = prompt('Type your choice of rock, paper or scissors.');

let playerSelection = 'rock';
playerSelection = playerSelection.toLowerCase();

function computerPlay() {
  const rps = ['rock', 'paper', 'scissors'];

  
  let random = Math.floor(Math.random() * rps.length);

  
  return rps[random];
}

let computerSelection = computerPlay();

function playGame(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie");
  } else if 
  
  } else (playerSelection ) 
   
  ) 
    console.log("You Lose") 
  } else {

  }
    
   
}
  
  playGame(playerSelection, computerSelection);
