import {drawMatrix, drawImage} from './canvas.js';

const CANVAS_SIZE = 512;

const canvas = document.getElementById('canvas');
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

const ctx = canvas.getContext('2d');

fetchAndDrawMatrix('data/4x4.json');

const matrix4Link = document.getElementById('matrix4Link');
matrix4Link.addEventListener('click', (event) => {
    fetchAndDrawMatrix('data/4x4.json');
    event.preventDefault();
    selectItem(event.target);
});

const matrix32Link = document.getElementById('matrix32Link');
matrix32Link.addEventListener('click', () => {
    fetchAndDrawMatrix('data/32x32.json');
    event.preventDefault();
    selectItem(event.target);
});

const image256Link = document.getElementById('image256Link');
image256Link.addEventListener('click', () => {
    const src = "./data/image.png";
    drawImage(src, canvas, ctx);
    event.preventDefault();
    selectItem(event.target);
});

function fetchAndDrawMatrix(src) {
    fetch(src)
        .then(response => response.json())
        .then(matrix => drawMatrix(matrix, canvas, ctx));
}

function selectItem(item) {
    const ul = item.closest('ul');
    for (const li of ul.children) {
        li.classList.remove('selected');
    }
    item.closest('li').classList.add('selected');
}