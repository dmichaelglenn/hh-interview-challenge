import { activeWindow, fakeTiles, swatchTemplate } from '../variables';
import { HSLToHex } from '../helpers';

function generateFakeTile(color) {
        let hex = HSLToHex(color.h, color.s, color.l);
        let tile = swatchTemplate.content.firstElementChild.cloneNode(true);
        tile.querySelector('.color').style.backgroundColor = `#${hex}`;
        tile.querySelector('.label').innerText = `#${hex}`;
        return tile;
}

function generateAndPlaceFakeTiles(baseColor) {
    fakeTiles.innerHTML = '';

    for (i = 0; i < 5; i++) {
        let tile = generateFakeTile(baseColor);
        fakeTiles.append(tile);
    }

}

function openActiveWindow(color) {
    activeWindow.querySelector('.active-color').style.backgroundColor = `#${color.hex}`;
    activeWindow.querySelector('.active-label').innerText = `#${color.hex}`;
    generateAndPlaceFakeTiles(color);
    activeWindow.classList.add('open');
}

function closeActiveWindow() {
    activeWindow.classList.remove('open');
}

document.getElementById('clear').addEventListener('click', closeActiveWindow);

export { openActiveWindow }