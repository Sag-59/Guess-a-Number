let randNum = Math.floor(Math.random()*100) + 1

const form = document.getElementById("game")
let prev = []
const result = document.querySelector(".result")
let prevGuess = document.querySelector(".prevGuess")
let guessRem = document.querySelector(".guessRem")
let remGuess = parseInt(guessRem.innerText)
const showResult = document.querySelector(".showResult")
const restartBtn = document.querySelector(".restartGame")
const submitBtn = document.querySelector(".submitGuess")




form.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    const inputNumber = parseInt(document.querySelector(".inputNumber").value)
    document.querySelector(".inputNumber").value = "";
    console.log(randNum)


    if(inputNumber < 1 || inputNumber > 100 || isNaN(inputNumber) || inputNumber === ""){
        result.innerHTML = `You have entered invalid number.`
        return;
    }


    if(randNum === inputNumber){
        result.innerHTML = `You guessed it right! Number was ${randNum}`
        enterNumInList(inputNumber)
        endGame("🎉 You won the game!")
    }
    else if(randNum > inputNumber){
        result.innerHTML = `You have entered lower number, enter a higher number than ${inputNumber}`
        enterNumInList(inputNumber)
        if(remGuess === 0){
            endGame("❌ You lost the game. Try again!")
        }
    }
    else if(randNum < inputNumber){
        result.innerHTML = `You have entered higher number, enter a lower number than ${inputNumber}` 
        enterNumInList(inputNumber)
        if(remGuess === 0){
            endGame("❌ You lost the game. Try again!")
        }
    }
})



function enterNumInList(inputNumber){
    prev.push(inputNumber)
    prevGuess.innerHTML = `Previous Guesses: ${prev.join(", ")}`
    // if(prev.length === 1){
    //     prevGuess.innerHTML =  `Your previous entered number is ${prev}`
    // } 
    // else{
    //     prevGuess.innerHTML =  `Your previous entered numbers are ${prev}`
    // }
    
    remGuess--;
    guessRem.innerHTML = `${remGuess}`   
}



function endGame(message){
    showResult.innerHTML = message
    submitBtn.disabled = true
    restartBtn.style.display = "block"
}



restartBtn.addEventListener("click", () => {
    randNum = Math.floor(Math.random() * 100) + 1
    prev = []
    remGuess = 10

    result.innerHTML = ""
    prevGuess.innerHTML = ""
    guessRem.innerHTML = "10"
    showResult.innerHTML = ""

    submitBtn.disabled = false
    restartBtn.style.display = "none"

    document.querySelector(".inputNumber").value = ""
})
