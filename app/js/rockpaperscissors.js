function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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

function getPlayerMove(move) {

    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
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
    var 
        playerWins = 0,
        computerWins = 0,
        winner
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    
    
    while (playerWins < 5 || computerWins < 5){
        (console.log( "winner", winner ))
        winner = getWinner( getPlayerMove(), getComputerMove() )
        if ( winner === "player" ){
        playerWins +=1
        } else if ( winner === "computer" ){
        }
        }
    



    return [playerWins, computerWins];
}
    
console.log( "Let's play Rock, Paper Scissors" )
console.log( playToFive() )
console.log( "The game is now over, thanks for playing" )