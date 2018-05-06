//computer chooses a random letter in the alphebet
    // we will get the aphepaet
        //make a new var thats stores an array of aplhpabet chars
    //we will get a random letter out of the aplphapet
        //get a random number in javascript
//user is supposed to guess what letter the comp chose
    //how to get a keypress in javascript
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)]

    var wins = 0;
    var losses = 0;
    var guesses = 10;
    var wrongGuesses = [];

document.onkeypress = function psychicGame (event){

    
    var userChoice = event.key;

    if (userChoice === computerChoice) {
        wins++;   
        document.getElementById("winsNum").innerHTML = "Wins: " + wins;
        alert("You Guessed Correct!");
    } else {
        guesses--;
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guesses;
        wrongGuesses.push(userChoice);
        document.getElementById("guessesSoFar").innerHTML = "Your Guesses So Far: " + wrongGuesses;
    } 
    if (guesses === 0) {
        losses++;
        document.getElementById("lossesNum").innerHTML = "Losses: " + losses;
        alert("You Lose!");

    }  
};




//user will press a key 
//if it was right the wins go up
    //if else statements
//after 10 guesses the losses go up 
//user looses a guess after every wrong guess
