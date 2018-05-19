var guesses = 10;
var yourWins = 0;
var yourLoses = 0;
var userChoiceArray = [];
const winning = document.getElementById("winning");
const guessesLeft = document.getElementById("guessNumber");
const youLost = document.getElementById("superLoser");


function computerChoiceFuncion() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var returnLetters = letters[Math.floor(Math.random() * letters.length)];
    return returnLetters
}

var computerChoice = computerChoiceFuncion();


document.addEventListener('keypress', function (event) {
    // console.log("----------------------");
    // console.log("A key was pressed!");
    // console.log("computerChoice", computerChoice);
    // console.log("----------------------");
    var userChoice = event.key;
    userChoiceArray.push(userChoice + " ");
    compare(userChoice, computerChoice);
    shownGuess.innerHTML = userChoiceArray;
})

function resetGame() {
    // stop listening
    // select a new computer number
    computerChoice = computerChoiceFuncion();
    // display user scores
    winning.innerHTML = yourWins;
    youLost.innerHTML = yourLoses;
    // display user guesses
    guesses = 10;
    guessesLeft.innerHTML = "Guesses Left: " + guesses;
    // draw the correct screen areas
    // start listening
    console.log("This is the letter you need to guess ======>  " + computerChoice);
}

function compare(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        yourWins++;
        userChoiceArray = [];
        resetGame();
    }
    else if ((guesses === 0) || (userChoiceArray.length === 10)) {
        yourLoses++;
        userChoiceArray = [];
        resetGame();
    }
    else if (userChoice != computerChoice) {
        guesses--;
        guessesLeft.innerHTML = "Guesses Left: " + guesses;
    }
}


resetGame();
