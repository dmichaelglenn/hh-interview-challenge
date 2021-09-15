import { baseColorsUrl, mainWindow, swatchTemplate } from './variables';
import { generatePagination, getPaginatedTiles } from './pagination';
import { openActiveWindow } from './components/activeWindow';

function setActiveCollection(newCollection) {
    activeCollection = newCollection;
    generatePagination(activeCollection);
}

function setActiveColor(color) {
    activeColor = color;    
}

async function setInitialState() {
    let colors = await getAllColors();
    setActiveCollection(colors);

    let tiles = getPaginatedTiles(activeCollection, 1);
    placeTiles(tiles);
}

async function getAllColors() {
    let res = await fetch(baseColorsUrl);
    let colors = await res.json();
    return colors;
}

async function getColorsByCategory(category) {
    let res = await fetch(baseColorsUrl + `/category/${category}`);
    let colors = await res.json();
    return colors;
}

async function getRandomColor() {
    let res = await fetch(baseColorsUrl + '/random');
    let color = await res.json();
    return color;
}

async function getColorByHex(hex) {
    if (hex.includes('#')) {
        console.log('removed a hash');
        hex = hex.replace('#', '');
    }
    let res = await fetch(baseColorsUrl + `/${hex}`);
    let color = await res.json();
    return color;
}

async function searchColorsByHex(hex) {
    if (hex.includes('#')) {
        hex = hex.replace('#', '');
    }
    let res = await fetch(baseColorsUrl + `/search/${hex}`);
    let colors = await res.json();
    return colors;
}

function removeColorFromDatabase(id) {
    fetch(baseColorsUrl, {
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: id}),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function handleRemoveTileClick(e) {
    let id = e.target.parentNode.dataset.id;
    removeColorFromDatabase(id);
    e.target.remove();
}

function placeTiles(tiles) {
    mainWindow.innerHTML = '';

    tiles.forEach(color => {
        let tile = swatchTemplate.content.firstElementChild.cloneNode(true);
        tile.querySelector('.color').style.backgroundColor = `#${color.hex}`;
        tile.querySelector('.label').innerText = `#${color.hex}`
        tile.dataset.id = color._id;
        tile.dataset.hex = color.hex;

        let remover = document.createElement('div');
        remover.classList.add('remove-tile');
        remover.innerHTML = 'x';
        remover.addEventListener('click', handleRemoveTileClick);
        tile.append(remover);

        tile.addEventListener('click', function() {
            openActiveWindow(color);
        });

        mainWindow.append(tile);
    });
}

export { setActiveCollection, setActiveColor, placeTiles, setInitialState, getAllColors, getColorsByCategory, getRandomColor, getColorByHex, searchColorsByHex }