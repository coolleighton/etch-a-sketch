// selectors //

const container = document.querySelector("#container")
const gridSizeSlider = document.querySelector("#myRange")
const gridSizeText = document.querySelector("#grid-size-text")
const clearBtn = document.querySelector("#clearBtn")
const gridSquares = document.getElementsByClassName("row-item")

// function used to create the sketch pad grid //

function createGrid(gridSize) {
    
    container.innerHTML = ""

    let grid = document.createElement("div")
    grid.classList.add("grid")

    let row = document.createElement("div")
    row.classList.add("row")

    let rowItem = document.createElement("div")
    rowItem.classList.add("row-item")
    rowItem.style.height = 500/gridSize + "px"

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

    addEventListeners()

}

// Event listeners used to change sketch pad color //

function addEventListeners() {

    const numGridSquares = gridSizeSlider.value * gridSizeSlider.value

    // event listeners to change color to black or rainbow //

    for (var i = 0; i < numGridSquares; i++) {
        gridSquares[i].addEventListener("mouseover" , function(e) {
            e.target.style.backgroundColor = "black"
        })
    }

    // event listener used to clear pad //

    clearBtn.addEventListener("click", function() {
        for (var i = 0; i < numGridSquares; i++) {
            gridSquares[i].style.backgroundColor = "white"
           
        }
    })
    
}

// grid size slider input //

gridSizeSlider.oninput = function () {
    createGrid(gridSizeSlider.value)
    gridSizeText.textContent = gridSizeSlider.value + " X " + gridSizeSlider.value
}

createGrid(gridSizeSlider.value)

