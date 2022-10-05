//let readlineSync = require('readline-sync');
import { Console } from 'console';
import readlineSync from 'readline-sync';

let playAgain = true;
let playerScores = [0, 0];
console.log('\x1b[33mWelcome to Rock, Paper, Sissors\x1b[0m')

let player1Name = readlineSync.question("What is player 1's name: ");
let player2Name = readlineSync.question("What is player 2's name: ");

while (playAgain == true) {

    let playerChoice = playersChoose();
    let winner = pickWinner(playerChoice[0], playerChoice[1])
    if (winner === 0) {
        console.log("Draw, play again!!!")
        continue;
    }
    if (winner === 1) {
        playerScores[0]++;
        console.log(`${player1Name} Wins)`);
    }
    if (winner === 2) {
        playerScores[1]++;
        console.log(`${player2Name} Wins)`)
    }
    console.log(`Current Score: \n ${player1Name}: ${playerScores[0]} \n ${player2Name}: ${playerScores[1]}`)
    let pAgain = ['Yes', 'No', 'Reset Score']
    let pAgainChoice = readlineSync.keyInSelect(pAgain, 'Do you want to play again?', { cancel: false })
    if (pAgainChoice === 1) {
        playAgain = false;
    } else if (pAgainChoice === 2) {
        playerScores = [0, 0]
    }
}


function playersChoose() {
    let choice = ['Rock', 'Paper', 'Sissor'];
    let pChoice = []

    pChoice[0] = choice[readlineSync.keyInSelect(choice, `${player1Name}, what is your choice? `, { hideEchoBack: true, cancel: false })];
    pChoice[1] = choice[readlineSync.keyInSelect(choice, `${player2Name}, what is your choice? `, { hideEchoBack: true, cancel: false })];
    return pChoice;
}


function pickWinner(p1Choice, p2Choice) {
    switch (p1Choice) {
        case 'Rock':
            switch (p2Choice) {
                case 'Rock': return 0; break;
                case 'Paper': return 2; break;
                case 'Sissor': return 1; break;
                default: break;
            }
            break;
        case 'Paper':
            switch (p2Choice) {
                case 'Rock': return 1; break;
                case 'Paper': return 0; break;
                case 'Sissor': return 2; break;
                default: break;
            }
            break;
        case 'Sissor':
            switch (p2Choice) {
                case 'Rock': return 2; break;
                case 'Paper': return 1; break;
                case 'Sissor': return 0; break;
                default: break;
            }
            break;
        default:

            break;


    }
}