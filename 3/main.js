const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');

nav.addEventListener('mouseover', () => {
    menu.classList.add('active');
    menu.addEventListener('mouseover', () => {
        menu.classList.add('active');
    })
});

menu.addEventListener('mouseout', () => {
    menu.classList.remove('active');
})