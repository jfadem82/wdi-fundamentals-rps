////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    
    if (move === null) {
        return getInput();
    } else {
        return move;
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
   
    if (move === null) {
        return randomPlay();
    } else {
        return move;
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    
    if (playerMove === computerMove) {
        winner = 'tie';
    } else if (playerMove === "rock" && computerMove === "scissors") {
        winner = 'player';
    } else if (playerMove === "scissors" && computerMove === "paper") {
        winner = 'player';
    } else if (playerMove === "paper" && computerMove === "rock") {
        winner = 'player';
    } else {
        winner = 'computer';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    
    
    while (playerWins < 5 && computerWins < 5){
        var winner = getWinner(playerMove, computerMove);
        var playerMove = getPlayerMove(getInput());
        var computerMove = getComputerMove(randomPlay());
        if (winner === "player") {
            playerWins += 1;
            console.log("You chose " + playerMove + " while the computer chose " + computerMove +".");
            console.log("The score is currently " + playerWins + " to  " + computerWins + "\n");
        } else if (winner === "computer") {
            computerWins += 1;
            console.log("You chose " + playerMove + " while the computer chose " + computerMove +".");
            console.log("The score is currently " + playerWins + " to  " + computerWins + "\n");
        } else if (winner === 'tie') {
            console.log("This round was a tie. Scores are " + playerMove + " vs " + computerMove + ".");
        }
    }
    console.log("The game is now over, thanks for playing");

    return [playerWins, computerWins];
}
playToFive();