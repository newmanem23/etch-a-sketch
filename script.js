
const canvas = document.querySelector('#canvas-container');
const slider = document.querySelector('.slider');
slider.addEventListener('change', resetGrid);

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', resetGrid);

let rainbowTurnedOn = false;
const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', () => {
    rainbowTurnedOn = !rainbowTurnedOn;
    if (rainbowButton.classList.contains("gradient")) {
        rainbowButton.classList.remove("gradient");
    } else {
        rainbowButton.classList.add("gradient");
    }

});

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

resetGrid();

function resetGrid() {
    // Need to delete previous cells upon resetting the grid
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }

    // Populate the grid with div cells
    let gridSize = document.querySelector('.slider').valueAsNumber;
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        for (let j = 0; j < gridSize; j++) {
            let cell = document.createElement("div");
            cell.classList.add("canvas");
            row.appendChild(cell);
        }
        row.classList.add("canvas");
        canvas.appendChild(row);
    }
    let label = document.querySelector(".grid-size");
    label.innerText = `${gridSize} x ${gridSize}`;

    // Have to redo the event listener for shading cells here. We have
    // deleted the elements that previously had the listener, so we need a new one
    let cells = document.querySelectorAll('.canvas');
    cells.forEach(cell => cell.addEventListener('mouseover', shade));
}


function shade(e) {
    let newColor = "black"
    if (rainbowTurnedOn) {
        let index = Math.floor(Math.random() * colors.length);
        newColor = colors[index];
    }
    if (e.buttons) e.target.style.backgroundColor = newColor;
}
