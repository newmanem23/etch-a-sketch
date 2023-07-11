const canvas = document.querySelector('#canvas-container');

for (let i = 0; i < 50; i++) {
    let row = document.createElement("div");
    for (let j = 0; j < 50; j++) {
        let cell = document.createElement("div");
        cell.classList.add("canvas");
        row.appendChild(cell);
    }
    row.classList.add("canvas");
    canvas.appendChild(row);
}

function shade(e) {
    if (e.buttons) e.target.style.backgroundColor = "black";
}

const cells = document.querySelectorAll('.canvas');
cells.forEach(cell => cell.addEventListener('mouseover', shade));
