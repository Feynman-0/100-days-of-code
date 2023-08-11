//3. Write a function that takes two numbers as parameters and returns their sum. Display the result on the webpage when the user inputs two numbers using prompt.
let num1 = parseInt(prompt("Enter first number"))
let num2 = parseInt(prompt("Enter second number"))
let sum=(num1,num2)=>{

  return num1+num2;

}
document.write("The sum of numbers entered is:",sum(num1,num2))