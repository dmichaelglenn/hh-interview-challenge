const baseColorsUrl = 'http://localhost:8080/colors';
const perPageCount = 12;
const mainWindow = document.getElementById('main');
const activeWindow = document.getElementById('active-window');
const paginationWrap = document.getElementById('pagination');
const swatchTemplate = document.getElementById("swatch-template");


export { baseColorsUrl, perPageCount, mainWindow, activeWindow, paginationWrap, swatchTemplate }