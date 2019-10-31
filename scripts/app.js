const CANVAS_SIZE = 512;

const canvas = document.getElementById('canvas');
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

const ctx = canvas.getContext('2d');

drawMatrix(matrix4x4);

matrix4Link.addEventListener('click', (event) => {
    drawMatrix(matrix4x4);
    event.preventDefault();
    selectItem(event);
});

matrix32Link.addEventListener('click', () => {
    drawMatrix(matrix32x32);
    event.preventDefault();
    selectItem(event);
});

image256Link.addEventListener('click', () => {
    let src = "./data/image.png";
    drawImage(src);
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