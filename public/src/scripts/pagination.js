import { perPageCount, paginationWrap } from './variables';

function generatePagination(activeCollection) {
    paginationWrap.innerHTML = '';
    let pageCount = Math.ceil(activeCollection.length / perPageCount);

    for (i = 0; i < pageCount; i++) {
        let el = document.createElement('li');
        el.innerText = i;
        paginationWrap.append(el);
    }
    console.log('page count', pageCount);
}

export { generatePagination }