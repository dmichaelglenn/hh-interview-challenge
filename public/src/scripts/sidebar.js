import { setActiveCollection, getColorsByCategory, getRandomColor, placeTiles } from "./operations";
import { getPaginatedTiles } from "./pagination";

async function handleCategoryClick(e) {
    let colors = await getColorsByCategory(e.target.innerText.toLowerCase());
    setActiveCollection(colors);

    let tiles = getPaginatedTiles(activeCollection, 1);
    placeTiles(tiles);
}

async function handleRandomClick(e) {
    let color = getRandomColor();
    console.log(color);
}

document.querySelectorAll('.color-category').forEach(function(el) {
    el.addEventListener('click', handleCategoryClick);
})

document.getElementById('random').addEventListener('click', handleRandomClick);