import { openActiveWindow } from "./activeWindow";
import { setActiveCollection, setActiveColor, getColorsByCategory, getRandomColor, placeTiles } from "../operations";
import { getPaginatedTiles } from "../pagination";

async function handleCategoryClick(e) {
    let colors = await getColorsByCategory(e.target.innerText.toLowerCase());
    setActiveCollection(colors);

    let tiles = getPaginatedTiles(activeCollection, 1);
    placeTiles(tiles);
}

async function handleRandomClick(e) {
    let color = await getRandomColor();
    openActiveWindow(color);
}

document.querySelectorAll('.color-category').forEach(function(el) {
    console.log(el);
    el.addEventListener('click', handleCategoryClick);
})

document.getElementById('random').addEventListener('click', handleRandomClick);