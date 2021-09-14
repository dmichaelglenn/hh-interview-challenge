import { perPageCount, paginationWrap } from './variables';
import { placeTiles } from './operations';

function getPaginatedTiles(activeCollection, page) {
    let max = perPageCount * page;
    let min = max - perPageCount;
    let tiles = [];

    for (var i = min; i < max; i++) {
        if (i > (activeCollection.length - 1)) {
            break;
        } 
        tiles.push(activeCollection[i]);
    }
    
    return tiles;
}

function handlePaginationClick(e, activeCollection) {
    let page = e.target.dataset.page;
    let tiles = getPaginatedTiles(activeCollection, page);

    paginationWrap.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

    placeTiles(tiles);
}

function generatePagination(activeCollection) {
    let pageCount = Math.ceil(activeCollection.length / perPageCount);

    paginationWrap.innerHTML = '';

    for (let i = 0; i < pageCount; i++) {
        let el = document.createElement('li');
        el.innerText = i + 1;
        el.dataset.page = i + 1;
        el.addEventListener('click', function(e) {
            handlePaginationClick(e, activeCollection);
        });
        if (i === 0) el.classList.add('active');
        paginationWrap.append(el);
    }
}

export { getPaginatedTiles, generatePagination }