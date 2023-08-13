/*let button= document.createElement("button")
button.innerHTML="Displays a msg"
document.body.appendChild(button);
  button.addEventListener ("click", function() {
  console.log("did something");
});*/
function game(){
  const maxTries = 5;
const targetNumber = Math.floor(Math.random() * 100) + 1;

// Start the game loop
for (let numTries = 1; numTries <= maxTries; numTries++) {
  // Get the player's guess and check if it's correct
  const guess = prompt("Guess the number (between 1 and 100)");
  if (parseInt(guess) === targetNumber) {
    console.log("Congratulations, you guessed the number!");
    break;
  } else {
    console.log("Sorry, that's not the number.");
    if (numTries === maxTries) {
      console.log("You're out of tries. The number was " + targetNumber);
    } else if (guess < targetNumber) {
      console.log("Hint: try guessing higher.");
    } else {
      console.log("Hint: try guessing lower.");
    }
  }
}
}
document.write("WELCOME TO THE GAME")
let button= document.createElement("button")
button.innerHTML="Play a game"
document.body.appendChild(button);
  button.addEventListener ("click", function() {
  game();
  })
