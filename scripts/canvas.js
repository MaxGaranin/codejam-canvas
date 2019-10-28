export function drawMatrix(matrix, ctx, canvasSize) {
    let blockCount = matrix.length;
    let blockSize = canvasSize / blockCount;

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

function drawImageData(m) {
    canvas.width = m.length;
    canvas.height = m.length;

    const flattenedRGBAValues = m
        .reduce(concat)  // 1d list of hex codes
        .map(hexToRGBA)  // 1d list of [R,G,B,A] byte arrays
        .reduce(concat); // 1d list of bytes

    const imgData = new ImageData(Uint8ClampedArray.from(flattenedRGBAValues), m.length, m.length);
    ctx.putImageData(imgData, 0, 0);
}

const concat = (xs, ys) => xs.concat(ys);

const hexToRGBA = hexStr => [
    parseInt(hexStr.slice(0, 2), 16),
    parseInt(hexStr.slice(2, 4), 16),
    parseInt(hexStr.slice(4, 6), 16),
    255
];

export function drawImage(src, ctx, canvasSize) {
    let image = new Image();
    image.src = src;
    image.onload = () => {
        ctx.drawImage(image, 0, 0, canvasSize, canvasSize);
    }
}