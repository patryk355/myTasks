const email = document.querySelector('#email');
const label = document.querySelector('.label');

email.addEventListener('focus', () => {
    label.style.top = '1rem';
    label.style.fontSize = '.8rem'
})

email.addEventListener('blur', () => {
    label.style.top = '1.4rem';
    label.style.fontSize = '1rem';
})
