function computerPlay() {
    // Randomly selects and returns Rock, Paper or Scissors
    const computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * 3)];
  }

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    switch(playerChoice) {
      case "rock":
        if (computerChoice === "rock") {
          return ["draw", "Draw! Rock vs Rock", computerChoice];
        } else if (computerChoice === "paper") {
          return ["lose", "You lose! Paper beats Rock", computerChoice];
        } else if (computerChoice === "scissors") {
          return ["win", "You win! Rock beats Scissors", computerChoice];
        }
        break;
      case "paper":
        if (computerChoice === "rock") {
          return ["win", "You win! Paper beats Rock", computerChoice];
        } else if (computerChoice === "paper") {
          return ["draw", "Draw! Paper vs Paper", computerChoice];
        } else if (computerChoice === "scissors") {
          return ["lose", "You lose! Scissors beats Paper", computerChoice];
        }
        break;
      case "scissors":
        if (computerChoice === "rock") {
          return ["lose", "You lose! Rock beats Scissors", computerChoice];
        } else if (computerChoice === "paper") {
          return ["win", "You win! Scissors beats Paper", computerChoice];
        } else if (computerChoice === "scissors") {
          return ["draw", "Draw! Scissors vs Scissors", computerChoice];
        }
        break;
    }
  }
function game(e) {
  let roundResult = playRound(this.id, computerPlay());

  if (roundResult[0] === "win") {
    playerScore += 1;
    pScore.textContent = `Your score: ${playerScore}`
  } else if (roundResult[0] === "lose") {
    computerScore += 1;
    cScore.textContent = `Computer score: ${computerScore}`
  }
  round ++;
  displayRound.textContent = `Round ${round}`;
  compChoice.textContent = `The computer chose ${roundResult[2]}`;
  roundActions.textContent = `Round ${round-1} result: ${roundResult[1]}`;
  if (playerScore === 5 || computerScore ===5) declareWinner();
  }

function swapButtons() {
  const buttonDiv = document.getElementById('buttons');
  buttons.forEach(button => button.remove());
  buttons = document.createElement('button');
  buttons.textContent = 'New Game';
  buttons.classList.add('newgamebutton');
  buttonDiv.appendChild(buttons);
  buttons.addEventListener("click", buttons => location.reload())
}

function declareWinner() {
  if (playerScore > computerScore) {
    endResults.textContent = 'You win!'
  } else {
    endResults.textContent = 'You lose, better luck next time!'
  }
  swapButtons();
}
// Declare global variables and setup button event listeners
let playerScore = 0;
let computerScore = 0;
let round = 1;
const pScore=document.getElementById('playerscore');
const cScore=document.getElementById('computerscore');
const displayRound=document.getElementById('round');
const roundActions=document.getElementById('roundactions');
const compChoice=document.getElementById('computerchoice');
const endResults=document.getElementById('endresults');
let buttons=document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", game));