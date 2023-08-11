//1. Create a webpage with a button. When the button is clicked, display an alert message with a message of your choice.
const button = document.createElement('button')
button.innerText='Hey! Click me'
document.body.appendChild(button);
button.addEventListener('click',()=>{
  
 alert("you have pressed the button!!")
  
})