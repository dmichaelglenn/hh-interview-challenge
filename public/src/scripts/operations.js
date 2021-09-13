import { baseColorsUrl, mainWindow, swatchTemplate } from './variables';

function placeTiles(tiles) {

    mainWindow.innerHTML = '';
    console.log('tiles', tiles);
    tiles.forEach(color => {
        console.log(swatchTemplate.content);
        const tile = swatchTemplate.content.firstElementChild.cloneNode(true);
        tile.querySelector('.color').style.backgroundColor = color.hex;
        tile.dataset.id = color._id;
        tile.dataset.hex = color.hex;
        console.log(tile.querySelector('.color').style);
        console.log(color);



        mainWindow.append(tile);

    });
}


async function getAllColors() {
    let res = await fetch(baseColorsUrl);
    let colors = await res.json();
    return colors;
}

// async function getAllColors() {
//     let res = await fetch(baseColorsUrl)
//     .then(res => res.json())
//     .then(data )
//         console.log('thennn', colors);
//     });
//     console.log('all colors', colors);
//     return colors;
// }

export { placeTiles, getAllColors }