function drawMatrix(m, canvas, ctx) {
    canvas.width = m.length;
    canvas.height = m.length;

    let flattenedRGBAValues = m.reduce(concat);
    if (typeof(flattenedRGBAValues[0]) == 'string') {
        flattenedRGBAValues = flattenedRGBAValues.map(hexToRGBA);
    }
    flattenedRGBAValues = flattenedRGBAValues.reduce(concat);

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

function drawImage(src, canvas, ctx) {
    let image = new Image();
    image.src = src;
    image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0, image.width, image.height);
    }
}