let baseColorsUrl = '';

if (window.location.port === '1234') {
    // it's parcel live reload
    baseColorsUrl = 'http://localhost:8080/colors';
} else {
    baseColorsUrl = '/colors';
}

const perPageCount = 12;
const mainWindow = document.getElementById('main');
const activeWindow = document.getElementById('active-window');
const fakeTiles = document.getElementById('fake-tiles');
const paginationWrap = document.getElementById('pagination');
const swatchTemplate = document.getElementById("swatch-template");


export { baseColorsUrl, perPageCount, mainWindow, activeWindow, fakeTiles, paginationWrap, swatchTemplate }