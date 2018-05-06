//Instructions (see code below)...
// You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:

//Guess what letter I'm thinking of

//Wins: (# of times the user has guessed the letter correctly)

//Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

//Guesses Left: (# of guesses left. This will update)

//Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

//When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

//When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

//pseudocode...

//computer chooses a random letter in the alphebet
    // we will get the aphepaet
        //make a new var thats stores an array of aplhpabet chars
    //we will get a random letter out of the aplphapet
        //get a random number in javascript
//user is supposed to guess what letter the comp chose
    //how to get a keypress in javascript
//user will press a key 
//if it was right the wins go up
    //if else statements
//after 10 guesses the losses go up 
//user looses a guess after every wrong guess




    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)]
 
    var wins = 0;
    var losses = 0;
    var guesses = 10;
    var wrongGuesses = [];

function gameReset(){
    wrongGuesses = [];
    document.getElementById("guessesSoFar").innerHTML = "Your Guesses So Far: " + wrongGuesses;
    guesses = 10;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guesses;
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

}

document.onkeypress = function psychicGame (event){

    
    var userChoice = event.key;
    userChoice = userChoice.toLowerCase();

    if( alphabet.indexOf(userChoice) === -1 ){ 
        alert("Please select a lower-case alphabetic character.");
        return; 
    }
    

    if (userChoice === computerChoice) {
        wins++;   
        document.getElementById("winsNum").innerHTML = "Wins: " + wins;
        alert("You Guessed Correct!");
        gameReset();
        alert("Play Again");
       
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
        gameReset();
        alert("Play Again");
      

    }  
};
