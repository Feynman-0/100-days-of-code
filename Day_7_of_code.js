/*//1. Create an array of strings and sort it in alphabetical order.
let arr = ["pineapple", "orange", "banana", "kiwi", "lychee", "dragonfruit", "apple", "mango", "peach"]
arr.sort();
console.log(arr)
//2. Given two arrays, merge them into a single array in ascending order.
let compare = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

let arr=[1,3]
let arr2=[2,4,6]
let arr3=arr.concat(arr2)
arr3.sort(compare)
console.log(arr3)
//3. Find the maximum element in an array of numbers.

let arr=[21,31,456,789,1,2,54]
let max=arr[0]
for(let i=0; i<=arr.length; i++){
if(arr[i]>max){
 
 max = arr[i];
 

}
  
}  

console.log(max)*/
//4. Find the minimum element in an array of numbers.
let arr=[97,4556,333,123,4656,92,4435]
let min=arr[0];
for(let i=0; i<=arr.length; i++){

if(min>arr[i]){

  min=arr[i]
}
  
}
console.log(min)