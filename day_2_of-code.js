/1. Write a JavaScript program to check whether a given number is positive, negative, or zero.
let n=prompt("Enter number")
if(n>0){
  console.log("It is a positive number!!");
}
else if(n<0){
  console.log("It is a negative number!!");
}
else{
  console.log("It is zero")
}
//2. Write a program that takes two numbers as input and prints their sum, difference, product, and quotient.
let n1=parseInt(prompt("Enter number1"))
let n2=parseInt(prompt("Enter number2"))
console.log("sum: ", n1 + n2)
console.log("difference:",n1-n2)
console.log("product:",n1*n2)
console.log("quotient",n1/n2)

//3. Write a JavaScript program to check whether a given year is a leap year or not.
let year=parseInt(prompt("Enter a year"))
if(year%400==0){
  alert("Leap year Alert!!")
}
else if(year%100==0){
  alert("Leap year Alert!!")}
else if(year%4==0){
  alert("Leap year Alert!!")}
else{alert("It is a nomal year")
    }
//4. Write a program that takes three numbers as input and determines the largest number among them.
let n1=parseInt(prompt("Enter a number"))
let n2=parseInt(prompt("Enter a number"))
let n3=parseInt(prompt("Enter a number"))
console.log(n1>n2 && n1>n3 ? "n1 is greatest" : "n1 is not greatest")
console.log(n2>n1 && n2>n3 ? "n2 is greatest" : "n2 is not greatest")
console.log(n3>n1 && n3>n2 ? "n3 is greatest" : "n3 is not greatest")

//5.Write a JavaScript program that takes a temperature in Fahrenheit and converts it to Celsius.
let f=parseInt(prompt("Enter temperature in farenheit"))

let c=(f-32)*5/9 
console.log(c)