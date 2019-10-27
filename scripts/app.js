const canvasSize = 512;

let canvas = document.getElementById('canvas');
canvas.width = canvasSize;
canvas.height = canvasSize;

let ctx = canvas.getContext('2d');

// let m = m32x32;
let m = m4x4;
drawMatrix(m);

// let src = "./data/image.png";
// drawImage(src);

function drawMatrix(m) {
    let blockCount = m.length;
    let blockSize = canvasSize / blockCount;

    for (let i = 0; i < blockCount; i++) {
        for (let j = 0; j < blockCount; j++) {
            let data = m[i][j];
            if (Array.isArray(data)) {
                ctx.fillStyle = 'rgba(' + data + ')';
            } else if (typeof data == 'string') {
                ctx.fillStyle = '#' + data;
            }
            ctx.fillRect(i * blockSize, j * blockSize, blockSize, blockSize);
        }
    }
}

function drawImage(src) {
    let image = new Image();
    image.src = src;
    image.onload = () => {
        ctx.drawImage(image, 0, 0, canvasSize, canvasSize);
    }
}