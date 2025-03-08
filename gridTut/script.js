const gridContainer = document.getElementById('gridContainer');

function createGrid(rows, cols) {
    gridContainer.innerHTML = ''; // Clear previous grid
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 100px)`;
    gridContainer.style.gridTemplateColumns = `repeat(${cols}, 100px)`;

    const colors = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D', '#9B5DE5', '#00B4D8', '#FF7F3F'];
    let colorIndex = 0;

    for (let i = 0; i < rows * cols; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.textContent = i + 1;
        gridItem.style.backgroundColor = colors[colorIndex % colors.length];
        colorIndex++;
        gridContainer.appendChild(gridItem);
    }
}

createGrid(3, 3); // Initial grid
