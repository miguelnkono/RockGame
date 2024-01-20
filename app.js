const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;
let randomNumber;

let choice = [
    'rock',
    'scissors',
    'paper'
];

possibleChoices.forEach(element => element.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();
    getResult();
}));

function generateComputerChoice(){
    randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;  // 3;

    /*if (randomNumber  === 1 ) {
        computerChoice = 'rock';
    }else if (randomNumber === 2) {
        computerChoice = 'scissors';
    }else {
        computerChoice = 'paper';
    }*/
    choice.forEach(choice => check());

    computerChoiceDisplay.innerHTML = computerChoice;
}

function check() {
    switch (randomNumber) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
        case 3:
            computerChoice = 'paper';
            break;
    }
}

function getResult() {
    
    choice.forEach(element => compare());

    resultDisplay.innerHTML = result;
}


/*let choice = [
    'rock',
    'scissors',
    'paper'
];
*/

function compare(randomNumber, userChoice) {
    if ((randomNumber === 'rock' && userChoice === 'paper') ||
        (randomNumber === 'paper' && userChoice === 'scissors') ||
        (randomNumber === 'scissors' && userChoice === 'rock')) {
        result = 'You win!';
    } else if ((randomNumber === 'rock' && userChoice === 'scissors') ||
               (randomNumber === 'paper' && userChoice === 'rock') ||
               (randomNumber === 'scissors' && userChoice === paper)) {
        result = 'You lose!';
    } else {
        result = "It's a draw!";
    }
}
