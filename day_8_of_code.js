/*//Create a new array from an existing array, containing only elements that pass a certain test.
let arr=[1,3,5,7,9,2,4,6,8,10]
let arr2=arr.map((value)=>{

return value+1;

  
}
  
)
console.log(arr)
console.log(arr2)
//6. Find the sum of all the elements in an array of numbers.
let arr=[1,3,5,7,9,2,4,6,8,10]
let sum=arr.reduce((value1,value2)=>{
 return value1+value2;
}
  
)
console.log(sum)*/
//7. Create a new array that contains the square root of each element in an existing array of numbers.
/*let arr=[1,3,5,7,9,11]
let square=arr.map((values)=>{
return values*values
  })
console.log(square)


//. Create a new array by concatenating two or more existing arrays.
let arr=[2,4,5,6,7,89]
let arr2=[93,5,6,8,7,54,55]
let arr3=arr.concat(arr2)
console.log(arr3)
//9. Create a new array that contains only the unique elements from an existing array.

let arr=[2,4,5,5,6,7,89]

let Unique=new Set(arr)

console.log(Unique) 
//10Reverse the order of elements in an array.
let arr=[1,3,5,7,9,11]
for(let i=arr.length-1; i>=0; i--){
console.log(arr[i])

}
//11. Check if a certain element exists in an array.
let arr=[1,3,4,56,767,,4,7,5,24]
console.log(arr.includes(3))
//12. Create a new array from an existing array, containing only elements that are greater than a certain value.
let arr=[1,2,3,3,54,56,77,899,0,10]
let greater=arr.filter((values)=>{

return values>34;
  
}
  
)
console.log(greater)*/