var container = document.querySelector('.container');
var button = document.getElementById('resetButton');

function addSquare(lengthOfGrid) {
    var squareDimension = ((600 / lengthOfGrid) - 2).toFixed(2);
    var gridSize = Math.pow(lengthOfGrid, 2);

    while (gridSize > 0) {
        var newDiv = document.createElement('div');
        container.appendChild(newDiv);
        newDiv.classList.add('grid');
        newDiv.style.height = squareDimension + 'px';
        newDiv.style.width = squareDimension + 'px';
        newDiv.style.border = '1px solid black';
        newDiv.addEventListener("mouseover", randomColor);
        gridSize--;
    }
}


function randomColor(e) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function reset() {
    var newGridSize = prompt('How big of a grid would you like?');

    if (newGridSize >= 1 && newGridSize <= 100) {
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
        addSquare(newGridSize);
    } else {
        alert('Please choose a number between 1-100');
        reset();
    }
}

button.addEventListener('click', reset);
window.onload = addSquare(16);