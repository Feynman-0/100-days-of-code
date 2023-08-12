/* /1. Write a program that generates a random password for the user. The password should be at least 8 characters long and contain a mix of upper and lowercase letters, numbers, and special characters.
let password = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'i', 'o', 'u', '!', '@', '#', '&', '*'];
let random = '';

for (let i = 0; i < 8; i++) {
  let char = password[Math.floor(Math.random() * password.length)];
  random += char;
}

alert("Auto generated password for you is       " + random);
//2. Write a program that takes an integer input from the user and prints out a multiplication table for that number. For example, if the user inputs 5, the program should print:

let num=parseInt(prompt("Enter number whose table you want to see!!"))
for(let i=1; i<=10; i++){
  document.write("\n"+num+ "*"+ i+" = "+num*i)
}
//Write a program that takes a string input from the user and determines whether the string is a palindrome (i.e., reads the same backwards and forwards). For example, the string "racecar" is a palindrome, but the string "hello" is not.
str=prompt("Enter a string")
newstr=""
for(let i=str.length-1; i>=0; i--){
newstr += str[i];
}
if(str===newstr){
alert(str+" is a palindrome!!!")  
}else{alert("It is not a palindrome")}*/

//Write a program in JavaScript that simulates a rock-paper-scissors game. The program should ask the user to input their choice (rock, paper, or scissors) and then randomly generate a choice for the computer. After each round, the program should display the results and keep track of the score. The game should be played for 5 rounds, and at the end, the program should declare the overall winner. 
const rps=()=>{
let comp=['rock','paper','scissor']
let game=comp[Math.floor(Math.random()*comp.length)]
let choice=prompt("rock, paper or scissor??")
if(choice==="rock" && game==="scissor"){
  alert("you won!!")
}
if(choice==="paper" && game==="rock"){
  alert("you won!!")
}
if(choice==="scissor" && game==="paper"){
  alert("you won!!")
}
else{
  alert("computer won!!")
}
}
alert("WELCOME TO THE ROCK PAPER SCISSOR GAME!!!")
let turns=parseInt(prompt("How many turns you wish to take??"))
while(turns>=0){
  rps();
  turns--;
}