/*//1. Write a function that takes an array of numbers and returns the largest number in the array.
let arr=[34,543,67,89,23,656]
max=arr[0]
let largestNum=(arr)=>{
  for(let i=0; i<arr.length; i++){
    if(arr[i]>max){
      max=arr[i];
    }
  }
  return max;
  
}
console.log(largestNum(arr));
// Write a function that takes an array of strings and returns the first string that is longer than 5 characters.
let arr=["art","typewriter","banana","iewr"]

let Longer=(arr)=>{
  for(let i=0; i<=arr.length; i++){
    if(arr[i].length>5){
     return arr[i];
    }
  }

}
console.log(Longer(arr));

// Write a function that takes a string and returns the reverse of the string.
let str=prompt("Enter a string")
let revstr="";
let rev=(str)=>{
  for(let i=str.length-1; i>=0; i--)
  {
    revstr+=str[i]
  }
  return revstr;
}
console.log(rev(str));*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let newarr = [];
let even = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      newarr.push(arr[i]);
    } else {
      continue;
    }
  }
  console.log(newarr);
}
even(arr);