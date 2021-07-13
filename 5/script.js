const mode = document.querySelector('.mode');
const lightMode = document.querySelector('.light');
const darkMode = document.querySelector('.dark');
const modeText = document.querySelector('.mode-text');

function changeMode(e) {
    if (lightMode.classList.contains('active')) {
        lightMode.classList.remove('active');
        darkMode.classList.add('active');
        modeText.innerHTML = `Change mode from dark to light`;
    } else {
        darkMode.classList.remove('active');
        lightMode.classList.add('active');
        modeText.innerHTML = `Change mode from light to dark`;
    }
}

mode.addEventListener('click', changeMode);