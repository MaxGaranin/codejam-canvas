export function drawMatrix(matrix, canvas, ctx) {
    canvas.width = matrix.length;
    canvas.height = matrix.length;

    let colorValues = matrix.reduce(concat);
    if (typeof(colorValues[0]) === 'string') {
        colorValues = colorValues.map(hexColor => hexToRgba(hexColor));
    }
    colorValues = colorValues.reduce(concat);

    const imgData = new ImageData(Uint8ClampedArray.from(colorValues), matrix.length, matrix.length);
    ctx.putImageData(imgData, 0, 0);
}

const concat = (xs, ys) => xs.concat(ys);

const hexToRgba = hexColor => [
    parseInt(hexColor.slice(0, 2), 16),
    parseInt(hexColor.slice(2, 4), 16),
    parseInt(hexColor.slice(4, 6), 16),
    255
];

export function drawImage(src, canvas, ctx) {
    const image = new Image();
    image.src = src;
    image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0, image.width, image.height);
    }
}