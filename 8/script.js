const container = document.querySelector('.container');
const actualCounter = document.querySelector('.counter');


container.addEventListener('click', counter);

let numberCounter = 0;

function counter(e) {
    numberCounter++;
    actualCounter.innerHTML = numberCounter;
}