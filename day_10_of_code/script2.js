//2. Add an event listener to the button from Q1 so that it changes the color of the background of the webpage when clicked.

const button = document.createElement('button')
button.innerText = 'Hey! Click me'
document.body.appendChild(button);
button.addEventListener('click', () => {
  color = prompt("Enter color you want:")
  document.body.style.background = color;


})