const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
  
const bodyRef = document.querySelector('body');
const startRef = document.querySelector('button[data-action ="start"]');
const stopRef = document.querySelector('button[data-action="stop"]');

startRef.addEventListener('click', onColorChange);
stopRef.addEventListener('click', onStoppedColorChange);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const bodyColor = function() {
  bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  console.log(bodyRef.style.backgroundColor);
}

let timerId = null;

function onColorChange() {
  timerId = setInterval( 
    bodyColor, 1000);
  startRef.removeEventListener('click', onColorChange);
  };

function onStoppedColorChange() {
  bodyRef.style.backgroundColor = '';
  clearInterval(timerId);
  startRef.addEventListener('click', onColorChange);
};