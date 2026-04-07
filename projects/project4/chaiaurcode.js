let randomNumber = parseInt(Math.random() * 100 + 1)

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const userGuess = document.querySelector('.guesses')
const remaingGuesses = document.querySelector('.lastResult')
const lowOrhigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

// create new button
let p = document.createElement('p')
//guess storage
let preGuess = []
//count the number of guesses made by user
let numGuess = 1
//is game active or not
let playGame = true

if(playGame){
     submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGame(guess);
     })
}

function validateGame(guess){
   if(isNaN(guess)){
     alert(`Please enter a valid number.`)
   }
   else if(guess < 1){
     alert(`Please enter a valid number.`)
   }     
   else if(guess > 100){
     alert(`Please enter a valid number.`)
   }
   else{
     preGuess.push(guess)
     if(numGuess > 10){
       displayGuess(guess)
       displayMessage(`Game Over. Random number was: ${randomNumber}`)
       endGame()
     }
     else{
       displayGuess(guess)
       checkGuess(guess)
     }
   } 
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`Hurray your guess was right`)
    endGame()
  }
  else if(guess < randomNumber){
    displayMessage(`Guess Higher`)
  }
  else if(guess > randomNumber){
    displayMessage(`Guess Lower`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  userGuess.innerHTML += `${guess}, `
  numGuess++
  remaingGuesses.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  lowOrhigh.innerHTML = `${message}`
}


function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')

  p.className = ('button')
  p.innerHTML = "<h2 id='newGame'>New Game</h2>"
  startOver.appendChild(p)

  playGame = false

  // newGame callback
  newGame()

}

function newGame(){
   const newGameButton = document.querySelector('#newGame')

   newGameButton.addEventListener('click', function(e){
         randomNumber = parseInt(Math.random() * 100 + 1)
         preGuess = []
         numGuess = 1
         userGuess.innerHTML = ''
         remaingGuesses.innerHTML = `10`
         userInput.removeAttribute('disabled')
         startOver.removeChild(p)
         playGame = true
   })
  
}

