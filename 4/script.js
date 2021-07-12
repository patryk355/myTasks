const button = document.querySelector('.button');
const list = document.querySelector('.list');

button.addEventListener('click', () => {
    list.classList.toggle('active');
    if (list.classList.contains('active')) {
        button.innerHTML = `<i class="fas fa-archive"></i> Select item <i class="fas fa-chevron-down"></i>`;
    } else {
        button.innerHTML = `<i class="fas fa-archive"></i> Select item <i class="fas fa-chevron-up"></i>`;
    }
});