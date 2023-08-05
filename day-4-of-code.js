//1. Write a JavaScript program that displays the largest integer among two integers.
let a=parseInt(prompt("Enter 1st integer"))
let b=parseInt(prompt("Enter 2nd Integer"))
if(a>b){
  console.log(a+" is a greater integer: ")
}
else{
  console.log(b+" is a greater integer: ")
}

//Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
let n1=parseInt(prompt("Enter first number!! "))
let n2=parseInt(prompt("Enter second number!! "))
let n3=parseInt(prompt("Enter third number!! "))
let p=n1*n2*n3
console.log(p)
if(p<0){
  console.log("Sign of p is negative")
}
else{console.log("sign of p is positive")}

//Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
let a=parseInt(prompt("Enter first number!!"))
let b=parseInt(prompt("Enter second number!!"))
let c=parseInt(prompt("Enter third number!!"))
if(a>b && b>c){
  alert("The sorted desc order will be: ",a,b,c)
}
else if(b>a && a>c){
   alert("The sorted desc order will be: ",b,a,c)
}
else {
   alert("The sorted desc order will be: ",c,b,a)
}
//Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
let l=parseInt(prompt("Enter first number!!"))
let m=parseInt(prompt("Enter second number!!"))
let n=parseInt(prompt("Enter third number!!"))
let p=parseInt(prompt("Enter fourth number!!"))
let q=parseInt(prompt("Enter ffth number!!"))
if(l>m && l>n && l>p && l>q){
  console.log(l,"is greatest")
}
if(m>l && m>n && m>p && m>q){
  console.log(m,"is greatest")
}
else if(n>l && n>m && n>p && n>q){
  console.log(n,"is greatest")
}
else if(p>l && p>m && p>n && p>q){
  console.log(p,"is greatest")
}
else if(q>l && q>m && q>n && q>p){
  console.log(q,"is greatest")
}
else{console.log("all are equal")}
//Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
for(let i=0; i<=15; i++){
  if(i%2==0){
    console.log(i," is even")
  }
  
  else{
    console.log(i," is odd")
  }
  
  
}