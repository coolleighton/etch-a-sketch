// selectors and variables //

const container = document.querySelector("#container")
const gridSizeText = document.querySelector("#grid-size-text")
const gridSquares = document.getElementsByClassName("row-item")

const gridSizeSlider = document.querySelector("#myRange")
const clearBtn = document.querySelector("#clearBtn")
const eraserBtn = document.querySelector("#eraserBtn")
const rainbowBtn = document.querySelector("#rainbowBtn")
const blackBtn = document.querySelector("#blackBtn")

let penColor = "black"

// function to get the grid side length //

function getGridSize() {
    return gridSizeSlider.value
}


// function to get the number of grid squares //

function getTotalGridSquares() {
    return getGridSize() * getGridSize()
}


// function used to generate a random color //

function getRandomColor() {

    const letters = '0123456789ABCDEF';
    let color = '#';

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }


// Event listeners used to change colour on mouseover //

function addBlackEventListeners() {

    for (var i = 0; i < getTotalGridSquares(); i++) 
    {
        gridSquares[i].addEventListener("mouseover" , function(e) {
            e.target.style.backgroundColor = "black"
        })
    }
}

function addRandomColorEventListeners() {

    for (var i = 0; i < getTotalGridSquares(); i++) 
    {
        gridSquares[i].addEventListener("mouseover" , function(e) {
            e.target.style.backgroundColor = getRandomColor()
        })
    }
}

function addWhiteEventListeners() {

    for (var i = 0; i < getTotalGridSquares(); i++) 
    {
        gridSquares[i].addEventListener("mouseover" , function(e) {
            e.target.style.backgroundColor = "white"
        })
    }
}

// function used to clear pad //

function clearPad() {
    
    for (var i = 0; i < getTotalGridSquares(); i++) 
    {
        gridSquares[i].style.backgroundColor = "white"
    }
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

    addBlackEventListeners()

}


// button Event listeners //

blackBtn.addEventListener("click", function() {
    addBlackEventListeners()
})

rainbowBtn.addEventListener("click", function() {
    addRandomColorEventListeners()
})

eraserBtn.addEventListener("click", function() {
    addWhiteEventListeners()
})

clearBtn.addEventListener("click", function() {
    clearPad()
})


// create new grid and adjust text on slider input //

gridSizeSlider.oninput = function () {
    createGrid(getGridSize())
    gridSizeText.textContent = getGridSize() + " X " + getGridSize()
}

createGrid(getGridSize())
