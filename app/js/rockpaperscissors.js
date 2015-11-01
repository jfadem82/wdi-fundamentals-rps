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
        if (move !== null){
            move = move;
     }else{
       move = getInput();

}
console.log ("Please Enter A Value");
return move;
}

function getComputerMove(move) {
         move = randomPlay();{
    } 
    return move;
}
function getWinner(playerMove,computerMove) {
        var winner;
    if (playerMove === 'scissors'){
       switch(computerMove){
        case 'scissors':
       winner = 'tie';
       break;
       case 'paper':
       winner = 'player';
       break;
       case 'rock':
       winner = 'computer';
       break;
       default:
       winner = null;
       alert('null value'); 
       }
    } else if (playerMove === 'rock'){
       switch(computerMove){
       case 'rock':
       winner = 'tie';
       break;
       case 'scissors':
       winner = 'player';
       break;
       case 'paper':
       winner = 'computer';
       break;
       default:
       winner = null;
       alert('wrong value'); 
       }
    }else if (playerMove === 'paper'){
       switch(computerMove){
       case 'rock':
       winner = 'player';
       break;
       case 'scissors':
       winner = 'computer';
       break;
       case 'paper':
       winner = 'tie';
       break;
       default:
       winner = null;
       alert('null value'); 
       }
    }
    return winner;
}
function playToFive() {
    console.log("Let\'s play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    function getPlayerMove(move) {
   return move || getInput();
}
    function getComputerMove(move) {
    return move || randomPlay();
}
        while ((playerWins < 5) && (computerWins < 5)){
               var winner = getWinner(getPlayerMove, getComputerMove);
                    if(winner === "player"){
                    playerWins += 1;
                    }
                    else if (winner === "computer"){
                        computerWins+=1;
                    }
                    else{
                        playerWins += 0;
                        computerWins += 0;
                        return [playerWins, computerWins];
                    }

                    console.log("Player chose "+ getPlayerMove + " and Computer choose " + getComputerMove);
    return console.log (winner + "won this round!") && console.log ("The score is currently " + playerWins + ' to ' + computerWins);
                }
                return [playerWins, computerWins];
            }
//getWinner('rock', getComputerMove());
