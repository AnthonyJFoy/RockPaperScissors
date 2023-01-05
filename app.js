const playerMoveDisplay = document.getElementById('player-move-chosen')
const opponentMoveDisplay = document.getElementById('opponent-move-chosen')
const resultDisplay = document.getElementById('result')

const move = document.querySelectorAll('button') // returns all button elements
let moveChoice
let opponentMove
let result

move.forEach(choice => choice.addEventListener('click', (e) => { //Listen for which button is clicked
    moveChoice = e.target.id // assign moveChoice to the button chosen by player
    playerMoveDisplay.innerHTML = moveChoice // Display move choice in <div> playerMoveDisplay
    opponentMoveGenerator()
    gameResults()
}))

// Generate random number between 1 and 3 and assign rock, paper or scissors to opponent move
function opponentMoveGenerator() {
    const randomNumber = Math.floor(Math.random() * 4)
    if (randomNumber == 1) {
        opponentMove = 'rock'
        opponentMoveDisplay.innerHTML = opponentMove
    }
    if (randomNumber == 2) {
        opponentMove = 'paper'
        opponentMoveDisplay.innerHTML = opponentMove
    }
    if (randomNumber == 3) {
        opponentMove = 'scissors'
        opponentMoveDisplay.innerHTML = opponentMove
    }
    console.log(opponentMove) // output opponent move for testing
}

// Run comditional statements to determine the winner and display result in resultDisplay <div>
function gameResults() {
    if ( moveChoice === opponentMove ) {
        result = 'Draw!'
    }
    if ( moveChoice === 'rock' && opponentMove === 'scissors' ) {
        result = 'You Win!'
     }
    if ( moveChoice === 'paper' && opponentMove === 'rock' ) {
        result = 'You Win!'
     }
    if ( moveChoice === 'scissors' && opponentMove === 'paper' ) {
        result = 'You Win!'
    }
    if ( moveChoice === 'scissors' && opponentMove === 'rock' ) {
        result = 'You Lose!'
    }
    if ( moveChoice === 'paper' && opponentMove === 'scissors' ) {
        result = 'You Lose!'
    }
    if ( moveChoice === 'rock' && opponentMove === 'paper' ) {
        result = 'You Lose!'
    }
    resultDisplay.innerHTML = result
}