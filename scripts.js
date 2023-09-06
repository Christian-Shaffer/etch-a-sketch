const grid = document.querySelector('.grid');
const clearButton = document.querySelector('.clear-button');
const slider = document.querySelector("#range");
const sliderValue = document.querySelector('.value');

let tableVectorSize = 16; // default value
let sideLength = 40; // default value

let selectedColor = '';
const defaultColor = '#5264c6';

const square = document.createElement('div');
square.classList.add('square'); 

clearButton.addEventListener("click", function() {
    draw();
});

slider.addEventListener("input", (e) => {
    tableVectorSize = e.target.value;
    sliderValue.textContent = tableVectorSize + " x " + tableVectorSize;
    sideLength = 640 / tableVectorSize;
    draw();
  });

function draw () {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    for (let i = 0; i < (tableVectorSize ** 2); i++) {
        square.style.height = sideLength + "px";
        square.style.width = sideLength + "px";
        grid.appendChild(square.cloneNode(true));
    }
    setColor(selectedColor);
}

function setColor (color) {
    const squares = document.querySelectorAll('.square');
    if (color == defaultColor) {
        squares.forEach(square => {
            square.onmouseover = () => square.style.backgroundColor = defaultColor;
        });
        selectedColor = defaultColor;
    }
}

draw();
setColor(defaultColor);