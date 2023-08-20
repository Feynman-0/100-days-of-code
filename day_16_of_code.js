/*//Write a JavaScript program to print the current window contents.  
window.print()
//Write a JavaScript program to get the current date.  
let date = new Date();
console.log(date)
//4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

var s = (5 + 6 + 7)/2;
var area =  Math.sqrt(s*((s-5)*(s-6)*(s-7)));
console.log(area);
//Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front. 
let str = 'w3resource';

setInterval(function() {
  str = str[str.length - 1] + str.substring(0, str.length - 1);
  document.write(str);
}, 20);
//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 
let year=parseInt(prompt("Enter Year"))
if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
 
  console.log("It is a leap year")
  
  
}
else{console.log("It is not a leap year")}*/
//Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
for (var year = 2014; year <= 2050; year++)
    {
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        document.write(" 1st January is being a Sunday  "+year+"-");
    }