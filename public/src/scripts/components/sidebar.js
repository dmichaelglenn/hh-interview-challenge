import { openActiveWindow } from "./activeWindow";
import { getRandomColor } from "../operations";

async function handleRandomClick(e) {
    let color = await getRandomColor();
    openActiveWindow(color);
}

document.getElementById('random').addEventListener('click', handleRandomClick);