var rockButton = document.getElementById('rock')
var paperButton = document.getElementById('paper')
var scissorsButton = document.getElementById('scissor')

const rock = "./assets/rock-hand.png"
const paper = "./assets/paper-hand.png"
const scissors = "./assets/scissors-hand.png"

var playerDiv = document.querySelector('.gameDiv')
var computerDiv = document.querySelector('.computerDiv')

var FinalScore = document.querySelector('.score')
var Result = document.querySelector('.result')
var Final = document.querySelector('.final')
var Options = document.querySelector('#options')


var playerPoints = 0
var computerPoints = 0
var playerOption = ""
var computerOption = ""




    rockButton.addEventListener('click', () =>{
        playerDiv.innerHTML = `<img src="${rock}" height='200px'>`
        playerOption = "r"
        computerTurn()
        
    })

    paperButton.addEventListener('click', () =>{
        playerDiv.innerHTML = `<img src="${paper}" height='200px'>`
        playerOption = "p"
        computerTurn()
        

    })

    scissorsButton.addEventListener('click', () =>{
        playerDiv.innerHTML = `<img src="${scissors}" height='200px'>`
        playerOption = "s"
        computerTurn()
    })



function computerTurn(){
    const random = Math.floor(Math.random() * 3) + 1;
    if(random == 1){
        computerDiv.innerHTML = `<img src="${rock}" height='200px'>`
        computerOption = "r"
        points()
    }
    else if(random == 2){
        computerDiv.innerHTML = `<img src="${paper}" height='200px'>`
        computerOption = "p"
        points()
    }
    else if(random == 3){
        computerDiv.innerHTML = `<img src="${scissors}" height='200px'>`
        computerOption = "s"
        points()
    }

}
function points(){
    if(playerOption === computerOption){
        playerOption = playerOption
    }
    else if(playerOption == "p" && computerOption == "r"){
        playerPoints += 1
    }
    else if(playerOption == "r" && computerOption == "s"){
        playerPoints += 1
    }
    else if(playerOption == "s" && computerOption == "p"){
        playerPoints += 1
    }
    else{
        computerPoints += 1
    }
    finalScore()
}

function finalScore(){
    FinalScore.textContent = `${playerPoints} - ${computerPoints}`
    if(playerPoints >= 5 || computerPoints >= 5){
        Result.style.visibility = "visible"
        Options.style.visibility = "hidden"
    }
    if(playerPoints >= 5){
        Final.textContent = "You Won "
    }
    else{
        Final.textContent = "Computer Won "
    }
    
}

Result.addEventListener('click',() => {
    location.reload()
})