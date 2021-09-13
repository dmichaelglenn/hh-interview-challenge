import './src/scripts/components';

const urlParams = new URLSearchParams(window.location.search);
const adminStatus = urlParams.get('admin');

if (adminStatus === 'yes') {
    document.querySelector('body').classList.add('admin');
}

document.querySelector('.logo').href = window.location.href;

