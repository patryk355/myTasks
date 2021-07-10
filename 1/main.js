const menu = document.querySelector('.menu-container');
const btn = document.querySelector('.menu');
const menuLine = document.querySelector('.menu-line');
const list = document.querySelector('.list');

menu.addEventListener('click', openMenu);

function openMenu() {
    menu.classList.toggle('active');
    menuLine.classList.toggle('active');
    list.classList.toggle('active');
}