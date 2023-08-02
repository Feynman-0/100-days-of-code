/*1) Create two variables, num1 and num2, and assign them values. Add these two variables and store the result in a third variable called sum. Print the value of sum.*/

let num1=34
let num2=66
let sum=console.log(num1+num2)

/*2) Declare a variable name and assign your name to it. Print a greeting message like "Hello, [name]!" using string concatenation.*/
let name="Mudassir"
console.log("Hello!!"+name);

/*3) Write a program that calculates the area of a rectangle. Declare two variables, width and height, and assign them values. Calculate the area and store it in a variable called area. Print the result.*/

let width=5.6;
let height=7;
let area=width*height;
console.log(area)

/*4) Create an object representing a person with properties like name, age, and city. Assign values to these properties and print them individually.*/
const person= {
name1:"Mudathir",
age: 21,
city: "Karachi"  
}
console.log(person['name1'],person['age'],person['city']);
/*5) Create a variable called age and assign your age to it. Then, print a message like "I am [age] years old."*/
let age1=21
console.log("i am "+ age1 + " years old")

/*6) Create a variable called isStudent and set it to true or false depending on whether you are a student or not. Then, print a message like "Am I a student? [true/false]." */
let is_Student=true;
console.log("Am I a student? "+ is_Student)

/*7) Write a program that calculates the area of a circle. Declare a constant variable pi with the value 3.14. Then, declare a variable radius and assign it a value. Calculate the area of the circle using the formula: Area = pi * radius * radius. Print the result.*/

const pi=3.14
let radius=5.5
let area1= pi*radius*radius
console.log(area1)

/*8) Create an object representing a favorite food item. It should have properties like name, type, and price. Assign values to these properties and print them individually, like "My favorite food is [name]. It is a [type] and costs $[price]."*/

const fav_food= {
name: "Biryani",
type: "rice",
price: "200 PKR" 
  
}
console.log("My favourite food is "+ fav_food['name']+" It is a "+ fav_food['type']+" its price is "+fav_food['price']);

/*Declare a variable temperature and assign it a value in Celsius. Write a program that converts the temperature to Fahrenheit using the conversion formula: Fahrenheit = (Celsius * 9/5) + 32. Print the result.*/
let temp_cel= 37
let temp_Farh=(temp_cel*9/5)+32;
console.log(temp_Farh)




/*Create two variables, num1 and num2, and assign them numerical values. Write a program that swaps the values of these two variables. After swapping, print the new values of num1 and num2.*/

let numm1=56
let numm2=76
let swap
console.log("Before swapping number 1 is: "+ numm1 +" Before swapping number 2 is: "+ numm2)
swap=numm2
numm2=numm1
numm1=swap

console.log("After swapping number 1 is: "+ numm1 +" After swapping number 2 is: "+ numm2)



