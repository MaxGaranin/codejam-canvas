const canvasSize = 512;

let canvas = document.getElementById('canvas');
canvas.width = canvasSize;
canvas.height = canvasSize;

let ctx = canvas.getContext('2d');

drawMatrix(m4x4);

m4.addEventListener('click', (event) => {
    drawMatrix(m4x4);
    event.preventDefault();
});

m32.addEventListener('click', () => {
    drawMatrix(m32x32);
    event.preventDefault();
});

image256.addEventListener('click', () => {
    let src = "./data/image.png";
    drawImage(src);
    event.preventDefault();
});