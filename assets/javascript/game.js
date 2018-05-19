var guesses = 10;
var yourWins = 0;
var yourLoses = 0;
var userChoiceArray = [];
const winning = document.getElementById("winning");
const guessesLeft = document.getElementById("guessNumber");
const youLost = document.getElementById("superLoser");



function lettersFunction(){
    var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var computerChoiceTwo = letters[Math.floor(Math.random() * letters.length)];
return computerChoiceTwo;
}

var computerChoice = lettersFunction();
console.log(computerChoice);


document.addEventListener('keypress', function(event){
    var userChoice = event.key;
    userChoiceArray.push(userChoice);
    compare(userChoice, computerChoice);
    shownGuess.innerHTML = "Your Guess So Far: " + userChoiceArray;
})


function compare(userChoice, computerChoice){
    if (userChoice === computerChoice) {
        yourWins++;
        winning.innerHTML = "Wins: " + yourWins;
    }
    else if((guesses === 0) || (userChoiceArray.length === 10)){
        yourLoses++;
        youLost.innerHTML = "Losses: " + yourLoses;
        guesses = 10;
        userChoiceArray = [];
    }
    else if(userChoice != computerChoice){
        guesses--;
        guessesLeft.innerHTML = "Guesses Left: " + guesses;
    }
}



