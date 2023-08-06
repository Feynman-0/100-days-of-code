//Write a JavaScript function that reverses a number.
let n = parseInt(prompt("Enter number you want to print"));
reverseNumber = (n) => {
  n = n.toString();
  return n.split("").reverse().join("");
}
console.log(reverseNumber(n));

//.Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".

for(let i=0; i<=100; i++){

if(i%3==0 && i%5==0 ){
  console.log("FizzBuzz")}
else if(i%3==0){
  console.log("Fizz")}
else if(i%5==0 ){
  console.log("Buzz")
}
  else{
    console.log(i)
  }


  
}