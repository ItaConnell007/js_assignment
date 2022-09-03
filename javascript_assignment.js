const options = ['rock', 'paper', 'scissors'];

function computerPlay() {
  const randomIndex = Math.floor((Math.random()*options.length));
  return options[randomIndex];
}

function playRound(selectedOption, computerSelection) {
  const rules = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock'
  };

  return rules[selectedOption] == computerSelection;
}

function isUserOptionValid(selectedOption) {
  if (!options.includes(selectedOption)) {
    console.error(`${selectedOption} option is invalid`);
    return false;
  }

  return true
}

function game() {
  let computerWins = 0;
  let userWins = 0;

  for (let i = 0; i < 5; i ++) {
    let selectedOption = prompt().toLowerCase();
    const computerSelection = computerPlay();

    while (!isUserOptionValid(selectedOption)) {
      selectedOption = prompt().toLowerCase();
    }

    if (selectedOption == computerSelection) {
      console.log(`Draw, both players used ${selectedOption}`);
      continue;
    }

    const result = playRound(selectedOption, computerSelection)
 
    if (result) {
      console.log(`You win, ${selectedOption} beats ${computerSelection}`);
      userWins++;
    } else {
      console.log(`You lose, ${computerSelection} beats ${selectedOption}`);
      computerWins++;
    }
  }

  if (computerWins > userWins) {
    console.log('You lose the game');
  } else if (computerWins == userWins) {
    console.log('Game is a draw');
  } else {
    console.log('You win the game');
  }
}

game()
