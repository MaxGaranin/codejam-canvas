import {MATRIX_4x4, MATRIX_32x32} from './data.js';
import {drawMatrix, drawImage} from './canvas.js';

const CANVAS_SIZE = 512;

const canvas = document.getElementById('canvas');
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

const ctx = canvas.getContext('2d');

drawMatrix(MATRIX_4x4, ctx, CANVAS_SIZE);

matrix4Link.addEventListener('click', (event) => {
    drawMatrix(MATRIX_4x4, ctx, CANVAS_SIZE);
    event.preventDefault();
    selectItem(event);
});

matrix32Link.addEventListener('click', () => {
    drawMatrix(MATRIX_32x32, ctx, CANVAS_SIZE);
    event.preventDefault();
    selectItem(event);
});

image256Link.addEventListener('click', () => {
    let src = "./data/image.png";
    drawImage(src, ctx, CANVAS_SIZE);
    event.preventDefault();
    selectItem(event);
});

function selectItem($event) {
    let ul = $event.target.closest('ul');
    for (const li of ul.children) {
        li.classList.remove('selected');
    }
    $event.target.closest('li').classList.add('selected');
}