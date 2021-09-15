import { debounce } from '../helpers';
import { mainWindow } from '../variables';
import { setActiveCollection, setInitialState, searchColorsByHex, placeTiles } from "../operations";
import { getPaginatedTiles } from "../pagination";

const searchInput = document.getElementById('search');

const handleSearchInput = debounce(async function(e) {
    if (e.target.value === '' || e.target.value === ' ') {
        setInitialState();
        return;
    }

    let colors = await searchColorsByHex(e.target.value);
    setActiveCollection(colors);

    let tiles = getPaginatedTiles(activeCollection, 1);

    if (tiles.length < 1) {
        mainWindow.innerHTML = `<div class="no-results">There were no hex codes containing <strong>"${e.target.value}"</strong>.<br/>Please try another search.</div>`
    } else {
        placeTiles(tiles);
    }
}, 300);

searchInput.addEventListener('input', handleSearchInput);