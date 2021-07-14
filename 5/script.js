const mode = document.querySelector('.mode');
const lightMode = document.querySelector('.light');
const darkMode = document.querySelector('.dark');
const modeText = document.querySelector('.mode-text');
const body = document.querySelector('body');

function changeMode() {
    if (lightMode.classList.contains('active')) {
        lightMode.classList.remove('active');
        darkMode.classList.add('active');
        modeText.innerHTML = `Change mode from dark to light`;
        body.classList.add('dark-body');
        body.classList.remove('light-body');
    } else {
        darkMode.classList.remove('active');
        lightMode.classList.add('active');
        modeText.innerHTML = `Change mode from light to dark`;
        body.classList.add('light-body');
        body.classList.remove('dark-body');
    }
}

mode.addEventListener('click', changeMode);