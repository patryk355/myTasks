const upBtn = document.querySelector('.up');
const downBtn = document.querySelector('.down');
const items = document.querySelectorAll('.item');

upBtn.addEventListener('click', () => {
    items.forEach(item => {
        if (item.style.display === 'block') {
            item.style.display = 'none';
        } else if (item.style.display === 'none') {
            item.style.display = 'block';
        }
    })
});

downBtn.addEventListener('click', () => {

});