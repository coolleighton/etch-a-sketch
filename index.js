const container = document.querySelector("#container")
const gridSizeSlider = document.querySelector("#myRange")
let gridSize = gridSizeSlider.value

function createGrid(gridSize) {
const fragment = new DocumentFragment();

let grid = document.createElement("div")
grid.classList.add("grid")

let row = document.createElement("div")
row.classList.add("row")

let rowItem = document.createElement("div")
rowItem.classList.add("row-item")
rowItem.style.height = 500/gridSize + "px"

    for (let i = 0; i < gridSize; i++) {
        fragment.appendChild(rowItem.cloneNode(true))
    }

row.appendChild(fragment)

    for (let i = 0; i < gridSize; i++) {
        fragment.appendChild(row.cloneNode(true))
    }

grid.appendChild(fragment)

container.appendChild(grid)

}

createGrid(gridSize)
