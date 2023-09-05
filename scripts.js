const grid = document.querySelector('.grid');

const slider = document.querySelector("#range")
const sliderValue = document.querySelector(".value")

let tableVectorSize = 15; //default value
let sideLength = 42.66666667; //default value

slider.addEventListener("input", (e) => {
    tableVectorSize = e.target.value;
    sliderValue.textContent = tableVectorSize + " x " + tableVectorSize;
    sideLength = 640 / tableVectorSize;
    draw();
  });

function draw () {
    if (grid.firstChild) {
        resetGrid();
    }
    for (let i = 0; i < (tableVectorSize ** 2); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.height = sideLength + "px";
        square.style.width = sideLength + "px";
        grid.appendChild(square);
    }
}

function resetGrid () {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

    
    




draw();

// reset();



