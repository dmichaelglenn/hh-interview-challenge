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

    let tileColors = [
        {
            h: baseColor.h,
            s: baseColor.s,
            l: ((baseColor.l - 20) > -1 ? baseColor.l - 20 : 0)
        },
        {
            h: baseColor.h,
            s: baseColor.s,
            l: ((baseColor.l - 10) > -1 ? baseColor.l - 10 : 0)
        },
        baseColor,
        {
            h: baseColor.h,
            s: baseColor.s,
            l: ((baseColor.l + 10) < 101 ? baseColor.l + 10 : 100)
        },
        {
            h: baseColor.h,
            s: baseColor.s,
            l: ((baseColor.l + 20) < 101 ? baseColor.l + 20 : 100)
        }
    ]
    
    tileColors.forEach(color => {
        let tile = generateFakeTile(color);
        fakeTiles.append(tile);
    });

}

function openActiveWindow(color) {
    console.log('opening active window for ', color.hex)
    activeWindow.querySelector('.active-color').style.backgroundColor = `#${color.hex}`;
    activeWindow.querySelector('.active-label').innerText = `#${color.hex}`;
    generateAndPlaceFakeTiles(color);
    activeWindow.classList.add('open');
}

function closeActiveWindow() {
    activeWindow.classList.remove('open');
}

activeWindow.style.transition = 'opacity 0.2s ease-in-out';
document.getElementById('clear').addEventListener('click', closeActiveWindow);

export { openActiveWindow, closeActiveWindow }