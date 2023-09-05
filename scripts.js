const grid = document.querySelector('.grid');

const slider = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

slider.addEventListener("input", (event) => {
    const tempSliderValue = event.target.value;
    sliderValue.textContent = tempSliderValue;
  })

let numOfSquares = prompt('Enter value');
let sideLength = 640 / numOfSquares;

for (let i = 0; i < (numOfSquares ** 2); i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.height = sideLength + "px";
    square.style.width = sideLength + "px";
    grid.appendChild(square);
}



