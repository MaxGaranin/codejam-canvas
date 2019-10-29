import {MATRIX_4x4, MATRIX_32x32} from './data.js';
import {drawMatrix, drawImage} from './canvas.js';

const CANVAS_SIZE = 512;

const canvas = document.getElementById('canvas');
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

const ctx = canvas.getContext('2d');

startDrawMatrix('data/4x4.json');

matrix4Link.addEventListener('click', (event) => {
    startDrawMatrix('data/4x4.json');
    event.preventDefault();
    selectItem(event);
});

matrix32Link.addEventListener('click', () => {
    startDrawMatrix('data/32x32.json');
    event.preventDefault();
    selectItem(event);
});

image256.addEventListener('click', () => {
    let src = "./data/image.png";
    drawImage(src, canvas, ctx);
    event.preventDefault();
    selectItem(event);
});

async function startDrawMatrix(src) {
    fetch(src)
        .then(response => response.json())
        .then(m => drawMatrix(m, canvas, ctx));
}

function selectItem($event) {
    let ul = $event.target.closest('ul');
    for (const li of ul.children) {
        li.classList.remove('selected');
    }
    $event.target.closest('li').classList.add('selected');
}