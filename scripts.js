const grid = document.querySelector('.grid');
const rainbowButton = document.querySelector('.button.rainbow');
const eraserButton = document.querySelector('.button.eraser');
const clearButton = document.querySelector('.button.clear');
const slider = document.querySelector("#range");
const sliderValue = document.querySelector('.value');

let tableVectorSize = 16; // default value
let sideLength = 40; // default value

const rainbowColors = [
    "#FF0000", // Red
    "#FF4500", // OrangeRed
    "#FFA500", // Orange
    "#FFD700", // Gold
    "#FFFF00", // Yellow
    "#ADFF2F", // GreenYellow
    "#7FFF00", // Chartreuse
    "#7CFC00", // LawnGreen
    "#00FF00", // Lime
    "#32CD32", // LimeGreen
    "#228B22", // ForestGreen
    "#008000", // Green
    "#20B2AA", // LightSeaGreen
    "#40E0D0", // Turquoise
    "#00CED1", // DarkTurquoise
    "#00FFFF", // Aqua
    "#00BFFF", // DeepSkyBlue
    "#1E90FF", // DodgerBlue
    "#0000FF", // Blue
    "#4169E1", // RoyalBlue
    "#8A2BE2", // BlueViolet
    "#9370DB", // MediumPurple
    "#DA70D6", // Orchid
    "#EE82EE", // Violet
    "#FF00FF", // Fuchsia
    "#FF69B4", // HotPink
    "#FF1493", // DeepPink
    "#FFB6C1", // LightPink
    "#FFC0CB", // Pink
    "#FFDAB9", // PeachPuff
    "#FFDEAD", // NavajoWhite
    "#FFE4E1", // MistyRose
    "#FFE4B5", // Moccasin
    "#FFF8DC", // Cornsilk
    "#F0E68C", // Khaki
    "#EEE8AA", // PaleGoldenrod
    "#F5DEB3", // Wheat
  ];

function pickRandomRainbowColor () {
    let selectedColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
    return selectedColor;
}

let selectedColor = '';
const eraserColor = '#FFF8DC';
const defaultColor = '#5264c6';

const square = document.createElement('div');
square.classList.add('square'); 

clearButton.addEventListener("click", function() {
    draw();
});

eraserButton.addEventListener("click", function() {
    setColor(eraserColor);
});

rainbowButton.addEventListener("click", function() {
    setColor(pickRandomRainbowColor());
})

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
        if (rainbowColors.includes(selectedColor)) {
            square.style.backgroundColor = rainbowColors[0];
        }
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
    } else if (color == eraserColor) {
        squares.forEach(square => {
            square.onmouseover = () => square.style.backgroundColor = eraserColor;
        });
        selectedColor = eraserColor;
    } else if (rainbowColors.includes(color)) {
        squares.forEach(square => {
            square.onmouseover = () => square.style.backgroundColor = pickRandomRainbowColor();
        });
        selectedColor = color;
    }
}

draw();
setColor(defaultColor);