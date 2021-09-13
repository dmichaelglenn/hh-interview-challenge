import { baseColorsUrl, mainWindow, swatchTemplate } from './variables';
import { generatePagination } from './pagination';

function setActiveCollection(newCollection) {
    activeCollection = newCollection;
    generatePagination(activeCollection);
}

function placeTiles(tiles) {
    mainWindow.innerHTML = '';

    tiles.forEach(color => {
        const tile = swatchTemplate.content.firstElementChild.cloneNode(true);
        tile.querySelector('.color').style.backgroundColor = color.hex;
        tile.dataset.id = color._id;
        tile.dataset.hex = color.hex;

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

export { setActiveCollection, placeTiles, getAllColors, getColorsByCategory, getRandomColor }