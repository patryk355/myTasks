const upBtn = document.querySelector('.up');
const downBtn = document.querySelector('.down');
const items = document.querySelectorAll('.item');
let number = 0;

upBtn.addEventListener('click', () => {
    items.forEach(item => {
        if (item.classList.contains('active')) {
            number = item.dataset.number;
            item.classList.remove('active');
            number++;
        }
    });

    if (number === items.length) number = 0;

    items[number].classList.add('active');
    number++;
    items[number++].classList.add('active');
});

downBtn.addEventListener('click', () => {
    items.forEach(item => {
        if (item.classList.contains('active')) {
            number = item.dataset.number;
            item.classList.remove('active');
            number--;

        }
    });

    if (number === 0) number = items.length - 1;

    items[number].classList.add('active');
    number--;
    items[number--].classList.add('active');
});

function slideDivs() {
    items.forEach(item => {
        item.classList.remove('animated');
        if (item.classList.contains('active')) {
            item.classList.add('animated');
        }
    });
}

upBtn.addEventListener('click', slideDivs);

downBtn.addEventListener('click', slideDivs);