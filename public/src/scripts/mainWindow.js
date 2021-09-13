import { setActiveCollection, getAllColors, placeTiles } from "./operations";
import { getPaginatedTiles, generatePagination } from './pagination';

async function setInitialState() {
    let colors = await getAllColors();
    setActiveCollection(colors);

    let tiles = getPaginatedTiles(activeCollection, 1);
    placeTiles(tiles);
}

setInitialState();
