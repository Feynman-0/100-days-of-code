//How can you find the index of the first occurrence of the letter "a" in the string "banana" using a string method?
let fruit="banana"
console.log(fruit.indexOf("a"))
//Convert the string "hello world" to uppercase using a string method.
let str="hello world"
console.log(str.toUpperCase(str))
//Replace all occurrences of the word "apple" with "orange" in the string "I like apple, apple is delicious."
let str1="I like apple, apple is delicious."
console.log(str1.replaceAll("apple","orange"))
//Given the string "programming", use a string method to check if it ends with "ing".
let str2 = `programming`;
console.log(str2.endsWith("ing"));
console.log(`${str2} ends with ing ${str2.endsWith("ing")}`);

//Count the number of occurrences of the letter "o" in the string "Hello, how are you doing today?"
let str3="Hello, how are you doing today?"
let count=0;
for(let i=0; i<=str3.length; i++){
if(str3[i]==="o"){
  count++;
}
  
}
console.log("The number of times o is repeated is: ",count)
//Extract the domain name (without "www" and ".com") from the URL "https://www.example.com".

let url ="https://www.example.com"
console.log(url.slice(12,19))

//Check if the string "racecar" is a palindrome (reads the same forwards and backwards) using a string method.
let pal="racecar"

for(i=0; i<=pal.length; i++){
if(pal[0]===pal[6]){
  
  if(pal[1]===pal[5]){

    if(pal[2]===pal[4]){
    console.log("It is a palindrome")
  }
    else{"It is not a palindrome"}
  }
}
  
}
