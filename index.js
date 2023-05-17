// selectors //

const container = document.querySelector("#container")
const gridSizeSlider = document.querySelector("#myRange")
const gridSizeText = document.querySelector("#grid-size-text")
const clearBtn = document.querySelector("#clearBtn")
const gridSquares = document.getElementsByClassName("row-item")

// function to get the grid side length //

function getGridSize() {
    return gridSizeSlider.value
}

// function to get the number of grid squares //

function getTotalGridSquares() {
    return getGridSize() * getGridSize()
}

// event listeners used to change color selector to black or rainbow //

function addColorEventListeners() {

    for (var i = 0; i < getTotalGridSquares(); i++) {
        gridSquares[i].addEventListener("mouseover" , function(e) {
            e.target.style.backgroundColor = "black"
        })
    }
}

// event listener used to clear pad //

function clearPadEventListener() {

    clearBtn.addEventListener("click", function() {
        for (var i = 0; i < getTotalGridSquares(); i++) {
            gridSquares[i].style.backgroundColor = "white"
        }
    })
}

// function used to create the sketch pad grid //

function createGrid(gridSize) {
    
    container.innerHTML = ""

    let grid = document.createElement("div")
    grid.classList.add("grid")

    let row = document.createElement("div")
    row.classList.add("row")

    let rowItem = document.createElement("div")
    rowItem.classList.add("row-item")
    rowItem.style.height = 500/getGridSize() + "px"

    let fragment = new DocumentFragment()

        for (let i = 0; i < gridSize; i++) {
            fragment.appendChild(rowItem.cloneNode(true))
        }

    row.appendChild(fragment)

        for (let i = 0; i < gridSize; i++) {
            fragment.appendChild(row.cloneNode(true))
        }

    grid.appendChild(fragment)

    container.appendChild(grid)

    addColorEventListeners()
    clearPadEventListener()

}

// function used to create new grid and adjust text on slider input //

gridSizeSlider.oninput = function () {
    createGrid(getGridSize())
    gridSizeText.textContent = getGridSize() + " X " + getGridSize()
}

createGrid(getGridSize())

