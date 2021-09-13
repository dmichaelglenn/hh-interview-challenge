import { baseColorsUrl } from './src/scripts/variables';
import { getAllColors } from './src/scripts/operations';
import './src/scripts/colorGenerator';
import './src/scripts/components';



const urlParams = new URLSearchParams(window.location.search);
const adminStatus = urlParams.get('admin');

if (adminStatus === 'yes') {
    document.querySelector('body').classList.add('admin');
}

