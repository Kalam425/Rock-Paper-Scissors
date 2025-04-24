console.log("Hello World")

const choices = ["rock", "paper", "scissors"];


function game() {
//this is a game
//on the console only
//for five rounds
}

function playRound(){
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
}

function playerChoice () {
    //input from player
    let input = prompt("Type Rock, Paper, or Scissors");
}

function computerChoice () {
    //random input for computer
    return choices [Math.floor(Math.random()*choices.length)]
    //the lowest "number" estimate of the 3 choices will ranbdomly be multiplied then chosen
}