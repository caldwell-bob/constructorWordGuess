// dependency for inquirer npm package
var inquirer = require("inquirer");

function Letter(letter, guessedYet) {
    this.letter = letter;
    this.guessedYet= guessedYet;

    this.displayChar = function() {
        var theChar = "_"
        if (this.guessedYet === true) {
            // console.log(this.letter);
            theChar=this.letter;
        }
        return theChar;
    };

    this.letterGuess = function(theGuess) {
        if (this.letter == theGuess) {
            this.guessedYet = true;
            console.log("updated this.guessed to true for letter: " + this.letter);
        }
    }
}

inquirer.prompt([
    {
        name: "guess",
        message: "What letter do you want to guess: "
    }
]).then(function(guesses) {
    var newLetter = new Letter(guesses.guess, false);
    var theChar="";
    theChar = newLetter.displayChar();
    console.log(theChar);
    newLetter.letterGuess('t')
    theChar = newLetter.displayChar();
    console.log(theChar);
})