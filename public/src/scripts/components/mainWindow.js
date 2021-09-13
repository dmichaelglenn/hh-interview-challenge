import { getAllColors, placeTiles } from "../operations";
import { getPaginatedTiles, generatePagination } from '../pagination';

async function setInitialState() {
    let colors = await getAllColors();
    let tiles = getPaginatedTiles(colors, 1);
    placeTiles(tiles);

    generatePagination(colors);
}

setInitialState();
