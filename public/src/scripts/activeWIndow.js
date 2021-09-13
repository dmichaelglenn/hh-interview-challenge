import { activeWindow } from './variables';
import { setActiveColor } from './operations';


function openActiveWindow(color) {
    console.log('opening active window for ', color.hex)
    activeWindow.querySelector('.active-color').style.backgroundColor = `#${color.hex}`;
    activeWindow.querySelector('.label').innerText = `#${color.hex}`;
    activeWindow.classList.add('open');
}

function closeActiveWindow() {
    activeWindow.classList.remove('open');
}

document.getElementById('clear').addEventListener('click', closeActiveWindow);

export { openActiveWindow }