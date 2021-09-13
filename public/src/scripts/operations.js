import { baseColorsUrl, mainWindow, swatchTemplate } from './variables';
import { generatePagination } from './pagination';
import { openActiveWindow } from './components/activeWindow';

function setActiveCollection(newCollection) {
    activeCollection = newCollection;
    generatePagination(activeCollection);
}

function setActiveColor(color) {
    activeColor = color;    
}

function placeTiles(tiles) {
    mainWindow.innerHTML = '';

    tiles.forEach(color => {
        const tile = swatchTemplate.content.firstElementChild.cloneNode(true);
        tile.querySelector('.color').style.backgroundColor = `#${color.hex}`;
        tile.querySelector('.label').innerText = `#${color.hex}`
        tile.dataset.id = color._id;
        tile.dataset.hex = color.hex;
        tile.addEventListener('click', function() {
            openActiveWindow(color);
        });

        mainWindow.append(tile);
    });
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

export { setActiveCollection, setActiveColor, placeTiles, getAllColors, getColorsByCategory, getRandomColor, getColorByHex }