/*//6. Write a program that takes a number as input and determines whether it is prime.
let n = parseInt(prompt("Enter a number"));

let isPrime = true;

// Check if n is 1 or 0
if(n == 1 || n == 0) {
  isPrime = false;
}
else {
  // Check if n is divisible by any number other than 1 and itself
  for(let i = 2; i <= Math.sqrt(n); i++) {
    if(n % i == 0) {
      isPrime = false;
      break;
    }
  }
}

if(isPrime) {
  console.log(n + " is a prime number.");
}
else {
  console.log(n + " is not a prime number.");
}
//7. Write a program that takes a number as input and prints its multiplication table up to 10.
let a = parseInt(prompt("Enter a number"))

for(let i=1; i<=10; i++){
let table=a*i;
  console.log(a+" * "+i+" = "+table)
  
}*/
//10. Write a program that takes a number as input and prints a pyramid pattern with that many rows.
let n = parseInt(prompt("Enter the number of rows"));

// Nested loop to print the pyramid pattern
for(let i = 1; i <= n; i++) {
  // Print spaces before the numbers
  for(let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
  // Print the left half of the pyramid
  for(let k = i; k >= 1; k--) {
    process.stdout.write(k.toString() + " ");
  }
  // Print the right half of the pyramid
  for(let l = 2; l <= i; l++) {
    process.stdout.write(l.toString() + " ");
  }
  // Move to the next line after printing each row
  console.log();
}