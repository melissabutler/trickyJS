
// Write a function called ***guessingGame*** which returns a 
//function that allows you to guess a random whole number between 0 and 99. 
// Every time you create a new game, it should select a *new* random number,
// and keep it secret from the player.

// Once the game has started, you can guess the number. 
//The game should tell you whether your guess is too high, too low, or correct.

// After a correct guess, the game ends.

function guessingGame() {
    // create a function that picks a random number between 0-99
    let target = Math.floor(Math.random() * 100);
    let win = false;
    let count = 0;


return function guess(guess) {
    if (win) return "The game is over, you already won!";
    count++; 
    if(guess === target){
        win = true;
        return `You win! You found ${target} in ${count} guesses.`;
        }
    if(guess < target) return `${guess} is too low!`;
    if(guess > target) return `${guess} is too high!`;  
};

}

module.exports = { guessingGame };


// // let game = guessingGame();
// guessingGame(50); // "50 is too low!"
// guessingGame(90); // "90 is too high!"
// guessingGame(70); // "You win! You found 70 in 3 guesses."
// guessingGame(70); // "The game is over, you already won!"