const canvas = document.querySelector('#canvas-container');
const cells = document.querySelectorAll('.canvas');

for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    for (let j = 0; j < 16; j++) {
        let cell = document.createElement("div");
        cell.classList.add("canvas");
        row.appendChild(cell);
    }
    row.classList.add("canvas");
    canvas.appendChild(row);
}

