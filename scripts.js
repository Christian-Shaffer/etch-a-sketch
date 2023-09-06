const grid = document.querySelector('.grid');

const colorButton = document.querySelector('.button.color');
colorButton.disabled = true;

const darkenButton = document.querySelector('.button.darken');
const rainbowButton = document.querySelector('.button.rainbow');
const eraserButton = document.querySelector('.button.eraser');
const clearButton = document.querySelector('.button.clear');
const slider = document.querySelector("#range");
const sliderValue = document.querySelector('.value');
const colorWheel = document.querySelector('#color');

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
    "#F0E68C", // Khaki
    "#EEE8AA", // PaleGoldenrod
    "#F5DEB3", // Wheat
  ];

const darkColors = [
    'rgba(0, 0, 0, 0.02)',
    'rgba(0, 0, 0, 0.04)',
    'rgba(0, 0, 0, 0.06)',
    'rgba(0, 0, 0, 0.08)',
    'rgba(0, 0, 0, 0.10)',
    'rgba(0, 0, 0, 0.12)',
    'rgba(0, 0, 0, 0.14)',
    'rgba(0, 0, 0, 0.16)',
    'rgba(0, 0, 0, 0.18)',
    'rgba(0, 0, 0, 0.20)',
    'rgba(0, 0, 0, 0.22)',
    'rgba(0, 0, 0, 0.24)',
    'rgba(0, 0, 0, 0.26)',
    'rgba(0, 0, 0, 0.28)',
    'rgba(0, 0, 0, 0.30)',
    'rgba(0, 0, 0, 0.32)',
    'rgba(0, 0, 0, 0.34)',
    'rgba(0, 0, 0, 0.36)',
    'rgba(0, 0, 0, 0.38)',
    'rgba(0, 0, 0, 0.40)',
    'rgba(0, 0, 0, 0.42)',
    'rgba(0, 0, 0, 0.44)',
    'rgba(0, 0, 0, 0.46)',
    'rgba(0, 0, 0, 0.48)',
    'rgba(0, 0, 0, 0.50)',
    'rgba(0, 0, 0, 0.52)',
    'rgba(0, 0, 0, 0.54)',
    'rgba(0, 0, 0, 0.56)',
    'rgba(0, 0, 0, 0.58)',
    'rgba(0, 0, 0, 0.60)',
    'rgba(0, 0, 0, 0.62)',
    'rgba(0, 0, 0, 0.64)',
    'rgba(0, 0, 0, 0.66)',
    'rgba(0, 0, 0, 0.68)',
    'rgba(0, 0, 0, 0.70)',
    'rgba(0, 0, 0, 0.72)',
    'rgba(0, 0, 0, 0.74)',
    'rgba(0, 0, 0, 0.76)',
    'rgba(0, 0, 0, 0.78)',
    'rgba(0, 0, 0, 0.80)',
    'rgba(0, 0, 0, 0.82)',
    'rgba(0, 0, 0, 0.84)',
    'rgba(0, 0, 0, 0.86)',
    'rgba(0, 0, 0, 0.88)',
    'rgba(0, 0, 0, 0.90)',
    'rgba(0, 0, 0, 0.92)',
    'rgba(0, 0, 0, 0.94)',
    'rgba(0, 0, 0, 0.96)',
    'rgba(0, 0, 0, 0.98)',
    'rgba(0, 0, 0, 1.0)'
  ];

const eraserColor = '#ededed';
const defaultColor = '#5264c6';

const square = document.createElement('div');
square.classList.add('square'); 

colorButton.addEventListener("click", function() {
    darkIndex = 0;
    useColorWheel();
});

colorWheel.addEventListener('input', () => {
    useColorWheel();
 })

function useColorWheel () {
    setColor(colorWheel.value);
    colorButton.disabled = true;
    darkenButton.disabled = false;
    rainbowButton.disabled = false;
    eraserButton.disabled = false;  
}

clearButton.addEventListener("click", function() {
    darkIndex = 0;
    draw();
});

let darkIndex = 0; // used for progressing the darkening effect
darkenButton.addEventListener("click", function() {
    setColor(darkColors[darkIndex]);
    colorButton.disabled = false;
    darkenButton.disabled = true;
    rainbowButton.disabled = false;
    eraserButton.disabled = false;
});

function darken () {
    return darkColors[darkIndex];
}

rainbowButton.addEventListener("click", function() {
    darkIndex = 0;
    setColor(pickRandomRainbowColor());
    colorButton.disabled = false;
    darkenButton.disabled = false;
    rainbowButton.disabled = true;
    eraserButton.disabled = false;
});

function pickRandomRainbowColor () {
    return rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
}

eraserButton.addEventListener("click", function() {
    darkIndex = 0;
    setColor(eraserColor);
    colorButton.disabled = false;
    darkenButton.disabled = false;
    rainbowButton.disabled = false;
    eraserButton.disabled = true;
});

slider.addEventListener("input", (e) => {
    tableVectorSize = e.target.value;
    sliderValue.textContent = tableVectorSize + " x " + tableVectorSize;
    sideLength = 640 / tableVectorSize;
    draw();
  });

function draw () {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild); // removes all drawn squares before redrawing
    }
    for (let i = 0; i < (tableVectorSize ** 2); i++) {
        square.style.height = sideLength + "px";
        square.style.width = sideLength + "px";
        grid.appendChild(square.cloneNode(true));
    }
    // This if chain ensures the right color is selected after redraw occurs
    if (colorButton.disabled == true) { 
        setColor(colorWheel.value);
    } else if (eraserButton.disabled == true) {
        setColor(eraserColor);
    } else if (rainbowButton.disabled == true) {
        setColor(pickRandomRainbowColor());
    } else if (darkenButton.disabled == true) {
        setColor(darken());
    }
}

function setColor(color) {
    const squares = document.querySelectorAll('.square')
    if (rainbowColors.includes(color)) {
        squares.forEach(square => {
            square.onmouseover = () => {
                square.style.backgroundColor = pickRandomRainbowColor();
            };
        });
    } else if (darkColors.includes(color)) {
        squares.forEach(square => {
            square.onmouseover = () => {
                square.style.backgroundColor = darken();
                // Makes sure darkIndex doesn't go out of bounds
                if (darkIndex < darkColors.length - 1) { 
                    darkIndex++;
                }
            };
        });
    } else {
        squares.forEach(square => {
            square.onmouseover = () => {
                square.style.backgroundColor = color;
            };
        });
    }
}

draw();