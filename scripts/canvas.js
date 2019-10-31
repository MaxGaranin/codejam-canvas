function drawMatrix(matrix) {
    let blockCount = matrix.length;
    let blockSize = CANVAS_SIZE / blockCount;

    for (let i = 0; i < blockCount; i++) {
        for (let j = 0; j < blockCount; j++) {
            let data = matrix[i][j];
            if (Array.isArray(data)) {
                ctx.fillStyle = `rgba(${data})`;
            } else if (typeof data == 'string') {
                ctx.fillStyle = `#${data}`;
            }
            ctx.fillRect(i * blockSize, j * blockSize, blockSize, blockSize);
        }
    }
}

function drawImage(src) {
    let image = new Image();
    image.src = src;
    image.onload = () => {
        ctx.drawImage(image, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}