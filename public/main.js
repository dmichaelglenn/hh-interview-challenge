import './src/scripts/components';

window.activeCollection  = {};

let urlParams = new URLSearchParams(window.location.search);
let adminStatus = urlParams.get('admin');

if (adminStatus === 'yes') {
    document.querySelector('body').classList.add('admin');
}

document.querySelector('.logo').href = window.location.href;

