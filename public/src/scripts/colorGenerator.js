import { baseColorsUrl } from './variables';
import { HSLToHex, generateRandomHSL } from './helpers';
import { getColorByHex } from './operations';


function generateAndAddRandomColors(count) {
    for (let i = 0; i < count; i++) {
        let hsl = generateRandomHSL();
        let hex = HSLToHex(hsl.h, hsl.s, hsl.l);
        console.log('random hex', hex);
        let exists = getColorByHex(hex);

        if (exists.length > 0) {
            console.log('ima skip this 1 chief');
            i--;
            continue;
        }

        let data = {
            h: hsl.h,
            s: hsl.s,
            l: hsl.l,
            hex: hex
        }

        fetch(baseColorsUrl, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
}

function handleGeneratorClick() {
    let count = document.getElementById('generator-count').value;
    console.log('going with count', count);
    generateAndAddRandomColors(count);
}

document.getElementById('generate-by-count').addEventListener('click', handleGeneratorClick);

// export { generateAndAddRandomColors };
// var randomColor = Math.floor(Math.random()*16777215).toString(16);