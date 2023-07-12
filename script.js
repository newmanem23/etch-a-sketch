const canvas = document.querySelector('#canvas-container');

function resetGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
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
    let cells = document.querySelectorAll('.canvas');
    cells.forEach(cell => cell.addEventListener('mouseover', shade));
}

function shade(e) {
    if (e.buttons) e.target.style.backgroundColor = "black";
}

const slider = document.querySelector('.slider');
slider.addEventListener('change', resetGrid);
resetGrid();
