let maxNumber = 100
let targetNumber = Math.round( Math.random() * maxNumber )

function checkGuess(guess){
    let outputElm = document.getElementById('output')

    if (guess == targetNumber){
        console.log(`Congratulations ${guess} was the number!`);
        outputElm.innerHTML += `<p>Congratulations ${guess} was the number!</p>`

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

function drawButtons(){
    let userInputElm = document.getElementById('user-input')
    
    userInputElm.innerHTML = ''

    for (let button = 1; button <= maxNumber; button += 1){
        userInputElm.innerHTML += `<button onclick="checkGuess(${button})">${button}</button>`
    }

    // console.log(`Final ${userInputElm.innerHTML}`);  
}

drawButtons()