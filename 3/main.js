const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');

nav.addEventListener('mouseover', () => {
    menu.style.transition = `ease-in-out 2s 2s 2s`;
    menu.classList.add('active');
});

nav.addEventListener('mouseout', () => {
    // setTimeout(() => menu.classList.remove('active'), 100);
    menu.style.transition = `ease-in-out 1s 1s`;
    menu.classList.remove('active');

})