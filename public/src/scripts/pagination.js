import { perPageCount, paginationWrap } from './variables';
import { placeTiles } from './operations';

function getPaginatedTiles(activeCollection, page) {
    const max = perPageCount * page;
    const min = max - perPageCount;
    let tiles = [];

    for (var i = min; i < max; i++) {
        if (i > (activeCollection.length - 1)) {
            break;
        } 
        tiles.push(activeCollection[i]);
    }
    console.log('min', min, 'max', max);

    return tiles;
}

function handlePaginationClick(e) {
    const page = e.target.dataset.page;
    const tiles = getPaginatedTiles(activeCollection, page);

    placeTiles(tiles);

    paginationWrap.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
}

function generatePagination(activeCollection) {
    paginationWrap.innerHTML = '';
    let pageCount = Math.ceil(activeCollection.length / perPageCount);

    for (i = 0; i < pageCount; i++) {
        let el = document.createElement('li');
        el.innerText = i + 1;
        el.dataset.page = i + 1;
        el.addEventListener('click', handlePaginationClick);
        if (i === 0) el.classList.add('active');
        paginationWrap.append(el);
    }
    console.log('page count', pageCount);
}

export { getPaginatedTiles, generatePagination }