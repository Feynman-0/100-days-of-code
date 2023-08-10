/*//1. Write a JavaScript program that takes a string and randomly shuffles the characters. The user then has to guess the original word.
let str="fascinating"
let arr=Array.from(str)


let guess;
do{
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    } }
shuffleArray(arr)
  console.log(arr)

  guess=prompt("guess the word: ")
if(guess===str){
  console.log("you have guessed the correct word!!")
}
else{console.log("Incorrect guess!!")}
}
  while(guess!==str)*/
let password = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j',
  'i', 'k', 'l', 'm', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  '0', '-', '=', '/', '*', '-', '9', '6', '5', '.', '`', '!', '@',
  '$', '%', '^', '&', '*'
];

console.log("Welcome to The Password Generator");

let length = parseInt(prompt("Enter desired length of password:"));

function shuffleArray(array) {
  let result = [];
  for (let i = array.length - 1; i >= array.length - length; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    result.push(array[i]);
  }
  return result;
}

const shuffledChars = shuffleArray(password);
const passwordStr = shuffledChars.join('');
console.log("Your desired password is: " + passwordStr);