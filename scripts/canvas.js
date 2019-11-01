export function drawMatrix(matrix, canvas, ctx) {
    canvas.width = matrix.length;
    canvas.height = matrix.length;

    let colorValues = matrix.flat();
    if (typeof (colorValues[0]) === 'string') {
        colorValues = colorValues.map(hexColor => hexToRgba(hexColor));
    }
    colorValues = colorValues.flat();

    const imgData = new ImageData(Uint8ClampedArray.from(colorValues), matrix.length, matrix.length);
    ctx.putImageData(imgData, 0, 0);
}

const hexToRgba = hexColor => {
    hexColor = hexColor.replace('#', '');
    if (hexColor.length < 6) {
        hexColor = modifyHex(hexColor);
    }

    const modifyHex = (hexColor) => {
        if (hexColor.length == 4) {
            hexColor = hexColor.replace('#', '');
        }
        if (hexColor.length == 3) {
            hexColor =
                hexColor[0] + hexColor[0] +
                hexColor[1] + hexColor[1] +
                hexColor[2] + hexColor[2];
        }
        return hexColor;
    };

    const parseColor = (start, end) => {
        return parseInt(hexColor.slice(start, end), 16);
    };

    return [
        parseColor(0, 2),
        parseColor(2, 4),
        parseColor(4, 6),
        255
    ];
};

export function drawImage(src, canvas, ctx) {
    const image = new Image();
    image.src = src;
    image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0, image.width, image.height);
    }
}