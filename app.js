// SECTION Global Variables

let maxNumber = 100
let targetNumber = Math.round( Math.random() * maxNumber )
let guessCount = 0

let userInputElm = document.getElementById('user-input')

// SECTION Game Logic Functions

function checkGuess(guess){
    let outputElm = document.getElementById('output')

    guessCount++

    if (guess == targetNumber){
        console.log(`Congratulations ${guess} was the number!`);
        outputElm.innerHTML += `<p>Congratulations ${guess} was the number!</p> <p>You managed to figure it out in only ${guessCount} guesses!</p>`
        drawReset()

    } else if (guess < targetNumber){
        console.log(`${guess} is too small, try again`);
        outputElm.innerHTML += `<p>${guess} is too small, try again</p>`
        
    } else if (guess > targetNumber) {
        console.log(`${guess} is too big, think smaller!`);
        outputElm.innerHTML += `<p>${guess} is too big, think smaller!</p>`
    } else {
        console.log('Input error, try again');
    }

}


// SECTION Draw functions

function drawButtons(){
    
    userInputElm.innerHTML = ''

    for (let button = 1; button <= maxNumber; button += 1){
        userInputElm.innerHTML += `<button onclick="checkGuess(${button})">${button}</button>`
    }

    // console.log(`Final ${userInputElm.innerHTML}`);  
}

function drawReset(){
    userInputElm.innerHTML = "<button>Reset Game</button>" 
}

drawButtons()