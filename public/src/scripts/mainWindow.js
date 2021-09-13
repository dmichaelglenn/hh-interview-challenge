import { getAllColors, placeTiles } from "./operations";
import { generatePagination } from './pagination';
import { mainWindow } from "./variables";


console.log('mainwindow js');


function setActiveCollection(newCollection) {
    activeCollection = newCollection;
    console.log(activeCollection);
}

async function initialState() {
    const colors = await getAllColors();
    setActiveCollection(colors);
    generatePagination(activeCollection);
    placeTiles(colors);
    console.log('initial', colors);
    // setActiveCollection(colors);
    // placeTiles(activeCollection);
}

initialState();

// setActiveCollection(getAllColors());
// placeTiles(activeCollection);