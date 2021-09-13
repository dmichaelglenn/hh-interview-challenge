import { setActiveCollection, getColorsByCategory, placeTiles } from "./operations";
import { getPaginatedTiles } from "./pagination";

async function handleCategoryClick(e) {
    let colors = await getColorsByCategory(e.target.innerText.toLowerCase());
    setActiveCollection(colors);

    let tiles = getPaginatedTiles(activeCollection, 1);
    placeTiles(tiles);
}

document.querySelectorAll('.color-category').forEach(function(el) {
    el.addEventListener('click', handleCategoryClick);
})